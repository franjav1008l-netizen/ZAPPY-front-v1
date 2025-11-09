import { apiClient, type QueryParams } from './apiClient'

export type Sentiment = 'positive' | 'neutral' | 'negative'

export type FreshDataItem = {
  id: string
  topic: string | null
  source: string | null
  title: string
  summary: string | null
  tags: string[] | null
  published_at: string | null
  detected_at: string | null
  company: {
    id: string
    name: string
    industry?: string | null
  } | null
}

export type FreshDataListResponse = {
  ok: boolean
  data: FreshDataItem[]
  pagination?: {
    limit: number
    offset: number
    total: number
  }
  count?: number
  limit?: number
  offset?: number
}

export type FreshDataQuery = {
  companyId?: string
  topic?: string
  source?: string
  tag?: string
  search?: string
  limit?: number
  offset?: number
}

const normalizeDate = (value?: string | null) => {
  if (!value) return null
  const parsed = new Date(value)
  if (Number.isNaN(parsed.valueOf())) return null
  return parsed.toISOString()
}

export type FreshDataNewsItem = {
  id: string
  title: string
  summary: string
  body: string
  date: string | null
  channel: string
  account: string
  location: string
  reference: string | null
  tags: string[]
}

export const mapFreshDataToNewsItem = (item: FreshDataItem): FreshDataNewsItem => {
  const date = normalizeDate(item.published_at) ?? normalizeDate(item.detected_at)

  return {
    id: item.id,
    title: item.title || 'Sin título',
    summary: item.summary || 'Sin resumen disponible',
    body: item.summary || 'Sin descripción disponible',
    date,
    channel: item.source || 'Fresh Data',
    account: item.company?.name || 'Sin compañía',
    location: item.topic || '—',
    reference: item.company?.industry ?? null,
    tags: item.tags ?? [],
  }
}

export type ContactCompany = {
  id: string
  name: string
  industry?: string | null
  website?: string | null
  domain?: string | null
}

export type Contact = {
  id: string
  name: string
  role?: string | null
  email?: string | null
  phone?: string | null
  sentiment?: Sentiment | null
  person_kind?: string | null
  is_client?: boolean
  updated_at?: string | null
  company?: ContactCompany | null
}

export type ContactsListResponse = {
  ok: boolean
  data: Contact[]
  pagination?: {
    limit: number
    offset: number
    total: number
  }
  count?: number
  limit?: number
  offset?: number
}

export type ContactsQuery = {
  companyId?: string
  search?: string
  sentiment?: Sentiment
  type?: 'employee' | 'client' | 'supplier' | 'partner' | 'other'
  personKind?: 'employee' | 'client' | 'supplier' | 'partner' | 'other'
  isClient?: boolean
  updatedAfter?: string
  updatedBefore?: string
  limit?: number
  offset?: number
}

export type WorkItemStatus = 'pending' | 'in_progress' | 'blocked' | 'completed'
export type Priority = 'low' | 'medium' | 'high' | 'critical'

export type WorkItem = {
  id: string
  title: string
  description?: string | null
  status: WorkItemStatus
  priority: Priority
  due_date?: string | null
}

export type WorkItemsListResponse = {
  ok: boolean
  data: WorkItem[]
  pagination?: {
    limit: number
    offset: number
    total: number
  }
  count?: number
  limit?: number
  offset?: number
}

export type Interaction = {
  id: string
  channel: string
  occurred_at: string
  budget?: number | null
  requirements?: string[]
  kpis?: string[]
  company?: {
    id: string
    name: string
  } | null
  contact?: {
    id: string
    name: string
    email?: string | null
    role?: string | null
  } | null
}

export type InteractionsListResponse = {
  ok: boolean
  data: Interaction[]
  pagination?: {
    limit: number
    offset: number
    total: number
  }
  count?: number
  limit?: number
  offset?: number
}

export type Company = {
  id: string
  name: string
  industry?: string | null
  website?: string | null
  domain?: string | null
}

export type CompaniesListResponse = {
  ok: boolean
  data: Company[]
  pagination?: {
    limit: number
    offset: number
    total: number
  }
}

export type CompaniesQuery = {
  search?: string
  industry?: string
  limit?: number
  offset?: number
}

export type CompanyOverview = {
  ok: boolean
  company: Company
  contacts: Contact[]
  interactions: Interaction[]
  workItems: WorkItem[]
  freshData: FreshDataItem[]
  summary?: Record<string, unknown>
}

export type ContactOverview = {
  ok: boolean
  contact: Contact
  interactions: Interaction[]
  workItems: WorkItem[]
  summary?: Record<string, unknown>
}

export type TimelineItem = {
  id: string
  type: 'interaction' | 'work_item' | 'fresh_data' | 'alert'
  occurred_at: string
  title: string
  description?: string | null
  metadata?: Record<string, unknown>
}

export type TimelineResponse = {
  ok: boolean
  data: TimelineItem[]
  pagination?: {
    limit: number
    offset: number
    total: number
  }
}

export type TimelineQuery = {
  companyId?: string
  contactId?: string
  limit?: number
  offset?: number
}

export type WorkItemsQuery = {
  status?: WorkItemStatus
  companyId?: string
  assigneeId?: string
  search?: string
  priority?: Priority
  dueBefore?: string
  dueAfter?: string
  onlyOverdue?: boolean
  limit?: number
  offset?: number
}

export type InteractionsQuery = {
  contactId?: string
  companyId?: string
  channel?: string
  search?: string
  startDate?: string
  endDate?: string
  minBudget?: number
  maxBudget?: number
  limit?: number
  offset?: number
}

const buildFreshDataQuery = (params: FreshDataQuery = {}): QueryParams => {
  const query: QueryParams = {}

  if (params.companyId) query.companyId = params.companyId
  if (params.topic) query.topic = params.topic
  if (params.source) query.source = params.source
  if (params.tag) query.tag = params.tag
  if (params.search) query.search = params.search
  if (typeof params.limit === 'number') query.limit = params.limit
  if (typeof params.offset === 'number') query.offset = params.offset

  return query
}

const buildContactsQuery = (params: ContactsQuery = {}): QueryParams => {
  const query: QueryParams = {}

  if (params.companyId) query.companyId = params.companyId
  if (params.search) query.search = params.search
  if (params.sentiment) query.sentiment = params.sentiment
  // La documentación usa 'type', pero mantenemos compatibilidad con personKind
  if (params.type) query.type = params.type
  if (params.personKind) query.type = params.personKind
  if (typeof params.isClient === 'boolean') query.isClient = params.isClient
  if (params.updatedAfter) query.updatedAfter = params.updatedAfter
  if (params.updatedBefore) query.updatedBefore = params.updatedBefore
  if (typeof params.limit === 'number') query.limit = params.limit
  if (typeof params.offset === 'number') query.offset = params.offset

  return query
}

const buildWorkItemsQuery = (params: WorkItemsQuery = {}): QueryParams => {
  const query: QueryParams = {}

  if (params.status) query.status = params.status
  if (params.companyId) query.companyId = params.companyId
  if (params.assigneeId) query.assigneeId = params.assigneeId
  if (params.search) query.search = params.search
  if (params.priority) query.priority = params.priority
  if (params.dueBefore) query.dueBefore = params.dueBefore
  if (params.dueAfter) query.dueAfter = params.dueAfter
  if (typeof params.onlyOverdue === 'boolean') query.onlyOverdue = params.onlyOverdue
  if (typeof params.limit === 'number') query.limit = params.limit
  if (typeof params.offset === 'number') query.offset = params.offset

  return query
}

const buildInteractionsQuery = (params: InteractionsQuery = {}): QueryParams => {
  const query: QueryParams = {}

  if (params.contactId) query.contactId = params.contactId
  if (params.companyId) query.companyId = params.companyId
  if (params.channel) query.channel = params.channel
  if (params.search) query.search = params.search
  if (params.startDate) query.from = params.startDate
  if (params.endDate) query.to = params.endDate
  if (typeof params.minBudget === 'number') query.minBudget = params.minBudget
  if (typeof params.maxBudget === 'number') query.maxBudget = params.maxBudget
  if (typeof params.limit === 'number') query.limit = params.limit
  if (typeof params.offset === 'number') query.offset = params.offset

  return query
}

const buildCompaniesQuery = (params: CompaniesQuery = {}): QueryParams => {
  const query: QueryParams = {}

  if (params.search) query.search = params.search
  if (params.industry) query.industry = params.industry
  if (typeof params.limit === 'number') query.limit = params.limit
  if (typeof params.offset === 'number') query.offset = params.offset

  return query
}

const buildTimelineQuery = (params: TimelineQuery = {}): QueryParams => {
  const query: QueryParams = {}

  if (params.companyId) query.companyId = params.companyId
  if (params.contactId) query.contactId = params.contactId
  if (typeof params.limit === 'number') query.limit = params.limit
  if (typeof params.offset === 'number') query.offset = params.offset

  return query
}

const listFreshData = (params: FreshDataQuery = {}) =>
  apiClient.get<FreshDataListResponse>('/api/crm/fresh-data', {
    query: buildFreshDataQuery(params),
  })

const listContacts = (params: ContactsQuery = {}) =>
  apiClient.get<ContactsListResponse>('/api/crm/contacts', {
    query: buildContactsQuery(params),
  })

const listWorkItems = (params: WorkItemsQuery = {}) =>
  apiClient.get<WorkItemsListResponse>('/api/crm/work-items', {
    query: buildWorkItemsQuery(params),
  })

const listInteractions = (params: InteractionsQuery = {}) =>
  apiClient.get<InteractionsListResponse>('/api/crm/interactions', {
    query: buildInteractionsQuery(params),
  })

const listCompanies = (params: CompaniesQuery = {}) =>
  apiClient.get<CompaniesListResponse>('/api/crm/companies', {
    query: buildCompaniesQuery(params),
  })

const getCompanyOverview = (id: string) =>
  apiClient.get<CompanyOverview>(`/api/crm/companies/${id}/overview`)

const getContactOverview = (id: string) =>
  apiClient.get<ContactOverview>(`/api/crm/contacts/${id}/overview`)

const getTimeline = (params: TimelineQuery = {}) =>
  apiClient.get<TimelineResponse>('/api/crm/timeline', {
    query: buildTimelineQuery(params),
  })

export const crmService = {
  listFreshData,
  listContacts,
  listWorkItems,
  listInteractions,
  listCompanies,
  getCompanyOverview,
  getContactOverview,
  getTimeline,
}

export type CrmService = typeof crmService

