import { apiClient } from './apiClient'
import type { Priority } from './crmService'

export type CreateWorkItemRequest = {
  title: string
  description?: string
  companyId?: string
  assigneeContactId?: string
  ownerContactId?: string
  dueDate?: string
  priority?: Priority
}

export type CreateWorkItemResponse = {
  ok: boolean
  id: string
}

const create = (body: CreateWorkItemRequest) =>
  apiClient.post<CreateWorkItemResponse, CreateWorkItemRequest>('/api/work-items/', { body })

export const workItemsService = {
  create,
}

export type WorkItemsService = typeof workItemsService

