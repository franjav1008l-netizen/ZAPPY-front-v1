const OPENAPI_DEFAULT_BASE_URL = 'https://api.payly.tech'

const DEFAULT_BASE_URL = OPENAPI_DEFAULT_BASE_URL

const normalizeBaseUrl = (value?: string | null) => {
  if (!value) return DEFAULT_BASE_URL
  return value.replace(/\/$/, '')
}

const API_BASE_URL = normalizeBaseUrl(import.meta.env.VITE_API_BASE_URL)

export class ApiError<T = unknown> extends Error {
  public readonly status: number

  public readonly data: T | null

  constructor(status: number, message: string, data: T | null = null) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

type Primitive = string | number | boolean

type QueryValue = Primitive | null | undefined

export type QueryParams = Record<string, QueryValue | QueryValue[]>

export type RequestOptions<TBody = unknown> = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  headers?: Record<string, string>
  query?: QueryParams
  body?: TBody
}

const buildUrl = (path: string, query?: QueryParams) => {
  const url = new URL(path, `${API_BASE_URL}/`)

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value === undefined || value === null) return

      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (item === undefined || item === null) return
          url.searchParams.append(key, String(item))
        })
        return
      }

      url.searchParams.set(key, String(value))
    })
  }

  return url.toString()
}

const toRequestInit = <TBody>(options: RequestOptions<TBody>): RequestInit => {
  const { method = 'GET', headers, body } = options

  const headerBag = new Headers({ Accept: 'application/json' })

  if (headers) {
    Object.entries(headers).forEach(([key, value]) => {
      headerBag.set(key, value)
    })
  }

  const init: RequestInit = {
    method,
    headers: headerBag,
  }

  if (body !== undefined && body !== null) {
    if (typeof body === 'string' || body instanceof FormData || body instanceof Blob) {
      init.body = body
    } else {
      init.body = JSON.stringify(body)
      if (!headerBag.has('Content-Type')) {
        headerBag.set('Content-Type', 'application/json')
      }
    }
  }

  return init
}

const parseResponse = async <T>(response: Response): Promise<T> => {
  const contentType = response.headers.get('content-type')

  if (contentType && contentType.includes('application/json')) {
    return (await response.json()) as T
  }

  if (contentType && contentType.includes('text/')) {
    return (await response.text()) as unknown as T
  }

  // No body or unsupported type
  return undefined as T
}

async function request<TResponse, TBody = unknown>(
  path: string,
  options: RequestOptions<TBody> = {},
): Promise<TResponse> {
  const { query, ...rest } = options

  const url = buildUrl(path, query)
  const init = toRequestInit(rest)

  const response = await fetch(url, init)

  if (!response.ok) {
    let errorPayload: unknown = null

    try {
      errorPayload = await parseResponse<unknown>(response)
    } catch {
      errorPayload = null
    }

    const message =
      (typeof errorPayload === 'object' && errorPayload !== null && 'message' in errorPayload
        ? String((errorPayload as Record<string, unknown>).message)
        : undefined) || response.statusText || 'Request failed'

    throw new ApiError(response.status, message, errorPayload)
  }

  return await parseResponse<TResponse>(response)
}

export const apiClient = {
  get: <TResponse>(path: string, options: Omit<RequestOptions, 'method' | 'body'> = {}) =>
    request<TResponse>(path, { ...options, method: 'GET' }),
  post: <TResponse, TBody = unknown>(path: string, options: Omit<RequestOptions<TBody>, 'method'> = {}) =>
    request<TResponse, TBody>(path, { ...options, method: 'POST' }),
  put: <TResponse, TBody = unknown>(path: string, options: Omit<RequestOptions<TBody>, 'method'> = {}) =>
    request<TResponse, TBody>(path, { ...options, method: 'PUT' }),
  patch: <TResponse, TBody = unknown>(path: string, options: Omit<RequestOptions<TBody>, 'method'> = {}) =>
    request<TResponse, TBody>(path, { ...options, method: 'PATCH' }),
  delete: <TResponse>(path: string, options: Omit<RequestOptions, 'method' | 'body'> = {}) =>
    request<TResponse>(path, { ...options, method: 'DELETE' }),
}

export type ApiClient = typeof apiClient
