import { apiClient } from './apiClient'

export type SearchQueryRequest = {
  query: string
  companyId?: string
  limit?: number
}

export type SearchResult = {
  id: string
  type: string
  score: number
  snippet: string
  metadata?: {
    companyId?: string
    contactId?: string
    [key: string]: unknown
  }
}

export type SearchQueryResponse = {
  ok: boolean
  results: SearchResult[]
}

const query = (body: SearchQueryRequest) =>
  apiClient.post<SearchQueryResponse, SearchQueryRequest>('/api/search/query', { body })

export const searchService = {
  query,
}

export type SearchService = typeof searchService

