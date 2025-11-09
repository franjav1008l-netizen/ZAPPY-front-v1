import { apiClient, type QueryParams } from './apiClient'
import type { Interaction, WorkItem } from './crmService'

export type InsightsSummaryResponse = {
  ok: boolean
  summary?: Record<string, unknown> | null
  workItemsStatus?: Array<Record<string, unknown>>
  sentiment?: Array<Record<string, unknown>>
  topDeals?: Interaction[]
  upcomingWorkItems?: WorkItem[]
  recentInteractions?: Interaction[]
}

export type TrendsResponse = {
  ok: boolean
  interactions: Array<Record<string, unknown>>
  workItems: Array<Record<string, unknown>>
  freshData: Array<Record<string, unknown>>
}

export type ActionableInsightsResponse = {
  ok: boolean
  risky_contacts: Array<Record<string, unknown>>
  open_alerts: Array<Record<string, unknown>>
  overdue_work_items: WorkItem[]
  stale_companies: Array<Record<string, unknown>>
}

type SummaryQuery = { companyId?: string; limit?: number }
const buildSummaryQuery = (params: SummaryQuery = {}): QueryParams => {
  const query: QueryParams = {}
  if (params.companyId) query.companyId = params.companyId
  if (typeof params.limit === 'number') query.limit = params.limit
  return query
}

const getSummary = (params: SummaryQuery = {}) =>
  apiClient.get<InsightsSummaryResponse>('/api/crm/insights/summary', {
    query: buildSummaryQuery(params),
  })

type TrendsQuery = { companyId?: string; days?: number }
const buildTrendsQuery = (params: TrendsQuery = {}): QueryParams => {
  const query: QueryParams = {}
  if (params.companyId) query.companyId = params.companyId
  if (typeof params.days === 'number') query.days = params.days
  return query
}

const getTrends = (params: TrendsQuery = {}) =>
  apiClient.get<TrendsResponse>('/api/crm/insights/trends', {
    query: buildTrendsQuery(params),
  })

type ActionableQuery = { companyId?: string }
const buildActionableQuery = (params: ActionableQuery = {}): QueryParams => {
  const query: QueryParams = {}
  if (params.companyId) query.companyId = params.companyId
  return query
}

const getActionable = (params: ActionableQuery = {}) =>
  apiClient.get<ActionableInsightsResponse>('/api/crm/insights/actionable', {
    query: buildActionableQuery(params),
  })

export const insightsService = {
  getSummary,
  getTrends,
  getActionable,
}

export type InsightsService = typeof insightsService
