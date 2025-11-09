import { apiClient } from './apiClient'

export type JobAudioRequest = {
  audio: {
    base64: string
    mimeType: string
  }
  metadata?: {
    company?: string
    [key: string]: unknown
  }
}

export type JobVideoRequest = {
  video: {
    base64?: string
    url?: string
    mimeType?: string
  }
  metadata?: {
    company?: string
    [key: string]: unknown
  }
}

export type JobResponse = {
  ok: boolean
  jobId: string
  interactionId: string
}

const processAudio = (body: JobAudioRequest) =>
  apiClient.post<JobResponse, JobAudioRequest>('/api/jobs/audio', { body })

const processVideo = (body: JobVideoRequest) =>
  apiClient.post<JobResponse, JobVideoRequest>('/api/jobs/video', { body })

export const jobsService = {
  processAudio,
  processVideo,
}

export type JobsService = typeof jobsService

