import { apiClient } from './apiClient'

export type ChatTool = 'alerts' | 'risk_contacts' | 'timeline' | 'trends' | 'knowledge'

export type ChatActionType = 'create_work_item' | 'resolve_alert' | 'generate_summary'

export interface ChatAction {
  type: ChatActionType
  payload?: Record<string, unknown>
}

export interface ChatRequest {
  sessionId?: string | null
  question: string
  companyId?: string | null
  contactId?: string | null
  userId?: string | null
  topK?: number
  tools?: ChatTool[]
  action?: ChatAction | null
}

export interface SearchResult {
  id: string
  type?: string
  sourceId?: string
  companyId?: string | null
  contactId?: string | null
  text: string
  similarity?: number
  metadata?: Record<string, unknown>
  createdAt?: string
  updatedAt?: string
}

export interface ChatResponse {
  ok: boolean
  sessionId?: string
  answer?: string
  sources?: SearchResult[]
  tools?: Record<string, unknown> | null
}

const chat = (body: ChatRequest) =>
  apiClient.post<ChatResponse, ChatRequest>('/api/chat', { body })

export const chatService = {
  chat,
}
