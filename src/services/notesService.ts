import { apiClient } from './apiClient'

export type CreateNoteRequest = {
  text: string
  companyId?: string
  contactId?: string
  metadata?: Record<string, unknown>
}

export type CreateNoteResponse = {
  ok: boolean
  interactionId: string
}

const createNote = (body: CreateNoteRequest) =>
  apiClient.post<CreateNoteResponse, CreateNoteRequest>('/api/notes/', { body })

export const notesService = {
  createNote,
}

export type NotesService = typeof notesService

