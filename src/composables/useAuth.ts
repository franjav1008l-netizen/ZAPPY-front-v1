import { computed, ref } from 'vue'
import {
  authService,
  type AuthUser,
  type LoginPayload,
  type SignupPayload,
} from '@/services/authService'

type Status = 'idle' | 'loading'

const currentUser = ref<AuthUser | null>(authService.restoreSession())
const status = ref<Status>('idle')
const errorMessage = ref<string | null>(null)

const setStatus = (value: Status) => {
  status.value = value
}

const setError = (message: string | null) => {
  errorMessage.value = message
}

const setCurrentUser = (user: AuthUser | null) => {
  currentUser.value = user
}

const isAuthenticated = computed(() => currentUser.value !== null)
const isLoading = computed(() => status.value === 'loading')
const assignedProfile = computed(() => currentUser.value?.assignedProfile ?? null)

const login = async (payload: LoginPayload) => {
  setStatus('loading')
  setError(null)
  try {
    const user = await authService.login(payload)
    setCurrentUser(user)
    return user
  } catch (error) {
    const message = error instanceof Error ? error.message : 'No se pudo iniciar sesión.'
    setError(message)
    throw new Error(message)
  } finally {
    setStatus('idle')
  }
}

const signup = async (payload: SignupPayload) => {
  setStatus('loading')
  setError(null)
  try {
    const user = await authService.signup(payload)
    setCurrentUser(user)
    return user
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'No fue posible crear la cuenta. Intenta de nuevo.'
    setError(message)
    throw new Error(message)
  } finally {
    setStatus('idle')
  }
}

const logout = async () => {
  authService.logout()
  setCurrentUser(null)
}

const restore = () => {
  setCurrentUser(authService.restoreSession())
}

const clearError = () => setError(null)

export const useAuth = () => ({
  currentUser,
  assignedProfile,
  isAuthenticated,
  isLoading,
  errorMessage,
  login,
  signup,
  logout,
  restore,
  clearError,
})

export type UseAuth = ReturnType<typeof useAuth>

