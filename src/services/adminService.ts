import { apiClient } from './apiClient'

export type SeedUsuariosRequest = {
  generate?: boolean
}

export type SeedCompletoRequest = {
  generate?: boolean
}

export type SeedUsuariosResponse = {
  ok: boolean
  inserted: number
  updated: number
}

export type SeedCompletoResponse = {
  ok: boolean
  stats: {
    companies: number
    contacts: number
    interactions: number
    workItems: number
    freshData: number
  }
}

export type AnalyzeTriggerRequest = {
  type: 'interaction' | 'work_item' | 'contact'
  id?: string
  limit?: number
}

export type AnalyzeTriggerResponse = {
  ok: boolean
  processed: number
}

export type WatchersInitResponse = {
  ok: boolean
}

export type ReindexRequest = {
  type?: 'interactions' | 'work_items' | 'fresh_data' | 'all'
}

export type ReindexResponse = {
  ok: boolean
  queued: number
}

const seedUsuarios = (body?: SeedUsuariosRequest) =>
  apiClient.post<SeedUsuariosResponse, SeedUsuariosRequest>('/api/admin/seed/usuarios', {
    body: body || {},
  })

const seedCompleto = (body?: SeedCompletoRequest) =>
  apiClient.post<SeedCompletoResponse, SeedCompletoRequest>('/api/admin/seed/completo', {
    body: body || {},
  })

const triggerAnalyze = (body: AnalyzeTriggerRequest) =>
  apiClient.post<AnalyzeTriggerResponse, AnalyzeTriggerRequest>('/api/admin/analyze/trigger', {
    body,
  })

const initWatchers = () => apiClient.post<WatchersInitResponse>('/api/admin/watchers/init', {})

const reindex = (body?: ReindexRequest) =>
  apiClient.post<ReindexResponse, ReindexRequest>('/api/admin/ai/reindex', {
    body: body || {},
  })

export const adminService = {
  seedUsuarios,
  seedCompleto,
  triggerAnalyze,
  initWatchers,
  reindex,
}

export type AdminService = typeof adminService

