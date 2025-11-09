import { adminService } from './adminService'
import { crmService, type Contact } from './crmService'

export type AssignedProfile = {
  id: string
  name: string
  email: string | null
  phone: string | null
  role: string | null
  companyId: string | null
  companyName: string | null
  avatar: string
}

export type AuthUser = {
  id: string
  email: string
  firstName: string
  lastName: string
  fullName: string
  passwordHash: string
  createdAt: string
  updatedAt: string
  assignedProfile: AssignedProfile | null
}

export type SignupPayload = {
  email: string
  password: string
  firstName: string
  lastName: string
}

export type LoginPayload = {
  email: string
  password: string
}

type StoredSession = {
  userId: string
  token: string
  createdAt: string
}

const USERS_KEY = 'zappy-auth-users'
const SESSION_KEY = 'zappy-auth-session'

const isBrowser = () => typeof window !== 'undefined'

const safeParse = <T>(value: string | null): T | null => {
  if (!value) return null
  try {
    return JSON.parse(value) as T
  } catch (error) {
    console.warn('[authService] No fue posible parsear datos almacenados', error)
    return null
  }
}

const loadUsers = (): AuthUser[] => {
  if (!isBrowser()) return []
  const stored = safeParse<AuthUser[]>(window.localStorage.getItem(USERS_KEY))
  if (!stored) return []
  return stored
}

const saveUsers = (users: AuthUser[]) => {
  if (!isBrowser()) return
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

const loadSession = (): StoredSession | null => {
  if (!isBrowser()) return null
  return safeParse<StoredSession>(window.localStorage.getItem(SESSION_KEY))
}

const saveSession = (session: StoredSession | null) => {
  if (!isBrowser()) return
  if (!session) {
    window.localStorage.removeItem(SESSION_KEY)
    return
  }
  window.localStorage.setItem(SESSION_KEY, JSON.stringify(session))
}

const normalizeEmail = (value: string) => value.trim().toLowerCase()

const generateId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `auth-${Math.random().toString(36).slice(2, 12)}`
}

const toHex = (buffer: ArrayBuffer) =>
  Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')

const hashPassword = async (password: string): Promise<string> => {
  if (typeof password !== 'string') return ''
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    try {
      const data = new TextEncoder().encode(password)
      const digest = await crypto.subtle.digest('SHA-256', data)
      return toHex(digest)
    } catch (error) {
      console.warn('[authService] hashPassword fallback', error)
    }
  }
  if (typeof btoa === 'function') {
    try {
      return btoa(password)
    } catch (error) {
      console.warn('[authService] No fue posible codificar la contraseña en base64', error)
    }
  }
  return password
}

const samePassword = async (plain: string, hashed: string) => (await hashPassword(plain)) === hashed

const createAvatarUrl = (name: string) => {
  const safeName = name || 'Usuario'
  return `https://ui-avatars.com/api/?background=4338CA&color=FFFFFF&name=${encodeURIComponent(safeName)}`
}

const mapContactToProfile = (contact: Contact): AssignedProfile | null => {
  if (!contact) return null
  const id = contact.id || generateId()
  const name = contact.name || 'Contacto asignado'
  return {
    id,
    name,
    email: contact.email ?? null,
    phone: contact.phone ?? null,
    role: contact.role ?? null,
    companyId: contact.company?.id ?? null,
    companyName: contact.company?.name ?? null,
    avatar: createAvatarUrl(name),
  }
}

const createMockProfile = (payload: SignupPayload): AssignedProfile => {
  const fullName = `${payload.firstName} ${payload.lastName}`.trim() || payload.email
  return {
    id: generateId(),
    name: fullName,
    email: payload.email,
    phone: null,
    role: 'Nuevo colaborador',
    companyId: null,
    companyName: 'Cuenta Demo',
    avatar: createAvatarUrl(fullName),
  }
}

const buildSession = (userId: string): StoredSession => ({
  userId,
  token: generateId(),
  createdAt: new Date().toISOString(),
})

const findAssignedIds = (users: AuthUser[]) => {
  const ids = new Set<string>()
  users.forEach((user) => {
    const contactId = user.assignedProfile?.id
    if (contactId) ids.add(contactId)
  })
  return ids
}

const fetchAvailableProfile = async (
  excludeIds: Set<string>,
): Promise<AssignedProfile | null> => {
  try {
    const response = await crmService.listContacts({ limit: 100 })
    const contacts = response.data ?? []
    const candidate = contacts.find((contact) => contact.id && !excludeIds.has(contact.id))
    if (!candidate) return null
    return mapContactToProfile(candidate)
  } catch (error) {
    console.warn('[authService] No fue posible obtener contactos disponibles', error)
    return null
  }
}

const ensureProfile = async (payload: SignupPayload, users: AuthUser[]) => {
  const assignedIds = findAssignedIds(users)

  let profile = await fetchAvailableProfile(assignedIds)
  if (profile) return profile

  try {
    await adminService.seedUsuarios({ generate: true })
    profile = await fetchAvailableProfile(assignedIds)
    if (profile) return profile
  } catch (error) {
    console.warn('[authService] No fue posible generar nuevos usuarios', error)
  }

  return createMockProfile(payload)
}

const createUserRecord = (
  payload: SignupPayload,
  passwordHash: string,
  profile: AssignedProfile | null,
): AuthUser => {
  const firstName = payload.firstName.trim()
  const lastName = payload.lastName.trim()
  const fullName = [firstName, lastName].filter(Boolean).join(' ') || payload.email

  const now = new Date().toISOString()
  return {
    id: generateId(),
    email: normalizeEmail(payload.email),
    firstName,
    lastName,
    fullName,
    passwordHash,
    createdAt: now,
    updatedAt: now,
    assignedProfile: profile,
  }
}

const signup = async (payload: SignupPayload): Promise<AuthUser> => {
  const users = loadUsers()
  const email = normalizeEmail(payload.email)

  if (users.some((user) => user.email === email)) {
    throw new Error('Ya existe una cuenta registrada con este correo.')
  }

  const passwordHash = await hashPassword(payload.password)
  const profile = await ensureProfile(payload, users)

  const user = createUserRecord({ ...payload, email }, passwordHash, profile)
  saveUsers([...users, user])
  saveSession(buildSession(user.id))

  return user
}

const login = async (payload: LoginPayload): Promise<AuthUser> => {
  const users = loadUsers()
  const email = normalizeEmail(payload.email)
  const user = users.find((candidate) => candidate.email === email)

  if (!user || !(await samePassword(payload.password, user.passwordHash))) {
    throw new Error('Credenciales incorrectas.')
  }

  user.updatedAt = new Date().toISOString()
  saveUsers(users)
  saveSession(buildSession(user.id))

  return user
}

const logout = () => {
  saveSession(null)
}

const getCurrentUser = (): AuthUser | null => {
  const session = loadSession()
  if (!session) return null
  const users = loadUsers()
  return users.find((user) => user.id === session.userId) ?? null
}

const restoreSession = (): AuthUser | null => getCurrentUser()

export const authService = {
  signup,
  login,
  logout,
  restoreSession,
  getCurrentUser,
}

export type AuthService = typeof authService

