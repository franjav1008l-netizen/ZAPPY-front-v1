import { apiClient, type QueryParams } from './apiClient'

export type AlertSeverity = 'low' | 'medium' | 'high' | 'critical'

export type Alert = {
  id: string
  entity_type: string
  entity_id: string
  severity: AlertSeverity
  status: string
  message: string
  created_at?: string
  data?: Record<string, unknown>
  company?: {
    id: string
    name: string
  } | null
  contact?: {
    id: string
    name: string
  } | null
}

export type AlertsListResponse = {
  ok: boolean
  alerts: Alert[]
  pagination?: {
    limit: number
    offset: number
    total: number
  }
  count?: number
}

export type AlertsQuery = {
  status?: string
  severity?: AlertSeverity
  companyId?: string
  contactId?: string
  limit?: number
  offset?: number
}

const buildAlertsQuery = (params: AlertsQuery = {}): QueryParams => {
  const q: QueryParams = {}
  if (params.status) q.status = params.status
  if (params.severity) q.severity = params.severity
  if (params.companyId) q.companyId = params.companyId
  if (params.contactId) q.contactId = params.contactId
  if (typeof params.limit === 'number') q.limit = params.limit
  if (typeof params.offset === 'number') q.offset = params.offset
  return q
}

const listAlerts = (params: AlertsQuery = {}) =>
  apiClient.get<AlertsListResponse>('/api/alerts/', { query: buildAlertsQuery(params) })

const resolveAlert = (id: string) => apiClient.post<{ ok: boolean }>(`/api/alerts/${id}/resolve`, {})

export const alertsService = {
  listAlerts,
  resolveAlert,
}

export type AlertsService = typeof alertsService
