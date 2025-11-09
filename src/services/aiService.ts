import { apiClient, type QueryParams } from './apiClient'

export type AIContext = {
  id: string
  type: string
  title: string
  content: string
  company?: {
    id: string
    name: string
  } | null
  contact?: {
    id: string
    name: string
  } | null
}

export type AIContextsListResponse = {
  ok: boolean
  data: AIContext[]
  pagination: {
    limit: number
    offset: number
    total: number
  }
}

export type AIContextsQuery = {
  companyId?: string
  contactId?: string
  type?: string
  limit?: number
  offset?: number
}

const buildAIContextsQuery = (params: AIContextsQuery = {}): QueryParams => {
  const query: QueryParams = {}
  if (params.companyId) query.companyId = params.companyId
  if (params.contactId) query.contactId = params.contactId
  if (params.type) query.type = params.type
  if (typeof params.limit === 'number') query.limit = params.limit
  if (typeof params.offset === 'number') query.offset = params.offset
  return query
}

const listContexts = (params: AIContextsQuery = {}) =>
  apiClient.get<AIContextsListResponse>('/api/ai/contexts', {
    query: buildAIContextsQuery(params),
  })

const deleteContext = (id: string) => apiClient.delete<{ ok: boolean }>(`/api/ai/contexts/${id}`, {})

export const aiService = {
  listContexts,
  deleteContext,
}

export type AIService = typeof aiService

