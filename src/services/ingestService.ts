import { apiClient } from './apiClient'

export type IngestEmailRequest = {
  from?: string
  to?: string
  subject?: string
  body?: string
  company?: string
  generate?: boolean
}

export type IngestSlackRequest = {
  user?: {
    name?: string
    real_name?: string
    email?: string
  }
  channel?: {
    name?: string
  }
  text?: string
  company?: string
  generate?: boolean
}

export type IngestWhatsAppRequest = {
  from?: string
  to?: string
  message?: string
  company?: string
  generate?: boolean
}

export type IngestVideoRequest = {
  bucket?: string
  filePath?: string
  localPath?: string
  process?: boolean
}

export type IngestAudioRequest = {
  bucket?: string
  filePath?: string
  localPath?: string
  process?: boolean
}

export type IngestResponse = {
  ok: boolean
  message: string
  interactionId?: string
  contactId?: string
  companyId?: string
  generated?: boolean
  data?: unknown
  bucket?: string
  path?: string
  url?: string
  willProcess?: boolean
}

const ingestEmail = (body?: IngestEmailRequest) =>
  apiClient.post<IngestResponse, IngestEmailRequest>('/api/ingest/email', { body: body || {} })

const ingestSlack = (body?: IngestSlackRequest) =>
  apiClient.post<IngestResponse, IngestSlackRequest>('/api/ingest/slack', { body: body || {} })

const ingestWhatsApp = (body?: IngestWhatsAppRequest) =>
  apiClient.post<IngestResponse, IngestWhatsAppRequest>('/api/ingest/whatsapp', { body: body || {} })

const ingestVideo = (body?: IngestVideoRequest) =>
  apiClient.post<IngestResponse, IngestVideoRequest>('/api/ingest/video', { body: body || {} })

const ingestAudio = (body?: IngestAudioRequest) =>
  apiClient.post<IngestResponse, IngestAudioRequest>('/api/ingest/audio', { body: body || {} })

export const ingestService = {
  ingestEmail,
  ingestSlack,
  ingestWhatsApp,
  ingestVideo,
  ingestAudio,
}

export type IngestService = typeof ingestService

