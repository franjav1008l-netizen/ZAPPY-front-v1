import { apiClient, type QueryParams } from './apiClient'

export type KnowledgeEntry = {
  id: string
  title: string
  content: string
  companyId?: string | null
  metadata?: Record<string, unknown>
  createdAt?: string
  updatedAt?: string
}

export type KnowledgeListResponse = {
  ok: boolean
  records: KnowledgeEntry[]
  pagination: {
    limit: number
    offset: number
    total: number
  }
}

export type KnowledgeQuery = {
  companyId?: string
  search?: string
  limit?: number
  offset?: number
}

export type CreateKnowledgeRequest = {
  title: string
  content: string
  companyId?: string
  metadata?: Record<string, unknown>
}

export type CreateKnowledgeResponse = {
  ok: boolean
  id: string
}

export type UploadKnowledgeRequest = {
  text?: string
  base64?: string
  companyId?: string
  metadata?: Record<string, unknown>
}

export type UploadKnowledgeResponse = {
  ok: boolean
  created: number
}

export type UrlKnowledgeRequest = {
  url: string
  companyId?: string
  metadata?: Record<string, unknown>
}

export type UrlKnowledgeResponse = {
  ok: boolean
  created: number
}

export type SearchKnowledgeRequest = {
  query: string
  companyId?: string
  limit?: number
}

export type KnowledgeSearchResult = {
  id: string
  title: string
  score: number
  snippet: string
}

export type SearchKnowledgeResponse = {
  ok: boolean
  results: KnowledgeSearchResult[]
}

export type DeleteKnowledgeResponse = {
  ok: boolean
}

const buildKnowledgeQuery = (params: KnowledgeQuery = {}): QueryParams => {
  const query: QueryParams = {}
  if (params.companyId) query.companyId = params.companyId
  if (params.search) query.search = params.search
  if (typeof params.limit === 'number') query.limit = params.limit
  if (typeof params.offset === 'number') query.offset = params.offset
  return query
}

const list = (params: KnowledgeQuery = {}) =>
  apiClient.get<KnowledgeListResponse>('/api/knowledge/', {
    query: buildKnowledgeQuery(params),
  })

const create = (body: CreateKnowledgeRequest) =>
  apiClient.post<CreateKnowledgeResponse, CreateKnowledgeRequest>('/api/knowledge/', { body })

const upload = (body: UploadKnowledgeRequest) =>
  apiClient.post<UploadKnowledgeResponse, UploadKnowledgeRequest>('/api/knowledge/upload', { body })

const uploadFromUrl = (body: UrlKnowledgeRequest) =>
  apiClient.post<UrlKnowledgeResponse, UrlKnowledgeRequest>('/api/knowledge/url', { body })

const search = (body: SearchKnowledgeRequest) =>
  apiClient.post<SearchKnowledgeResponse, SearchKnowledgeRequest>('/api/knowledge/search', { body })

const deleteEntry = (id: string) =>
  apiClient.delete<DeleteKnowledgeResponse>(`/api/knowledge/${id}`, {})

export const knowledgeService = {
  list,
  create,
  upload,
  uploadFromUrl,
  search,
  delete: deleteEntry,
}

export type KnowledgeService = typeof knowledgeService

