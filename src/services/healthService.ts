import { apiClient } from './apiClient'

export type HealthResponse = {
  ok: boolean
  timestamp: string
  hasSupabase: boolean
  hasGemini: boolean
}

const checkHealth = () => apiClient.get<HealthResponse>('/health/')

export const healthService = {
  checkHealth,
}

export type HealthService = typeof healthService

