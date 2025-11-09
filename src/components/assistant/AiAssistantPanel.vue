<template>
  <transition
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="opacity-0 translate-x-full lg:translate-x-4"
    enter-to-class="opacity-100 translate-x-0"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 translate-x-full lg:translate-x-4"
  >
    <aside
      v-if="isOpen"
      class="assistant-panel flex-shrink-0 pl-4 pr-4 py-4 lg:pl-6 lg:w-[360px] lg:pr-0 lg:sticky lg:top-4"
    >
      <div
        class="flex h-full flex-col rounded-3xl border border-brand-100 bg-white/95 shadow-theme-lg backdrop-blur-sm transition dark:border-white/10 dark:bg-white/[0.08]"
      >
        <header
          class="flex items-start justify-between gap-3 rounded-t-3xl border-b border-brand-100 bg-brand-50/80 px-5 py-4 dark:border-brand-500/30 dark:bg-brand-500/15"
        >
          <div>
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Asistente IA</h2>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              Consulta noticias, cuentas y próximos pasos en segundos.
            </p>
          </div>
          <button
            type="button"
            @click="close"
            class="rounded-full border border-transparent p-1.5 text-brand-500 transition hover:bg-brand-100 hover:text-brand-600 dark:text-brand-200 dark:hover:bg-brand-500/20 dark:hover:text-brand-100"
            aria-label="Cerrar asistente"
          >
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </header>

        <section class="flex-1 px-5 py-4">
          <div class="space-y-4">
            <div v-for="message in messages" :key="message.id" class="flex" :class="message.role === 'assistant' ? 'justify-start' : 'justify-end'">
              <div
                :class="[
                  'max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-theme-sm',
                  message.role === 'assistant'
                    ? 'bg-brand-50 text-brand-700 ring-1 ring-brand-100 dark:bg-brand-500/15 dark:text-brand-100 dark:ring-brand-500/30'
                    : 'bg-brand-500 text-white ring-1 ring-brand-500/40 dark:bg-brand-400'
                ]"
              >
                <p class="font-medium" v-if="message.title">{{ message.title }}</p>
                <p>{{ message.content }}</p>
              </div>
            </div>
          </div>
        </section>

        <form
          class="rounded-b-3xl border-t border-brand-100 bg-white/60 px-5 py-4 dark:border-white/10 dark:bg-white/5"
          @submit.prevent="handleSubmit"
        >
          <label class="sr-only" for="ai-assistant-input">Mensaje para el asistente</label>
          <div class="rounded-2xl border border-brand-100 bg-brand-50/60 p-3 transition focus-within:border-brand-200 focus-within:bg-white dark:border-brand-500/30 dark:bg-brand-500/10 dark:focus-within:bg-brand-500/15">
            <textarea
              id="ai-assistant-input"
              v-model="draft"
              rows="3"
              placeholder="Pregúntame sobre noticias, clientes o próximos pasos..."
              class="w-full resize-none bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400 dark:text-gray-100 dark:placeholder:text-brand-200/70"
            ></textarea>
            <div class="mt-3 flex items-center justify-between">
              <div class="flex flex-wrap gap-2 text-xs text-brand-500 dark:text-brand-200">
                <span class="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 shadow-theme-xs ring-1 ring-brand-100 dark:bg-brand-500/20 dark:ring-brand-400/40">
                  <svg class="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 1.16667V12.8333M1.16667 7H12.8333"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Adjuntar contexto
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 shadow-theme-xs ring-1 ring-brand-100 dark:bg-brand-500/20 dark:ring-brand-400/40">
                  <svg class="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.99967 5.83325C7.644 5.83325 8.16634 5.31092 8.16634 4.66659C8.16634 4.02226 7.644 3.49992 6.99967 3.49992C6.35534 3.49992 5.83301 4.02226 5.83301 4.66659C5.83301 5.31092 6.35534 5.83325 6.99967 5.83325Z"
                      stroke="currentColor"
                      stroke-width="1.1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.99967 12.25V5.83333"
                      stroke="currentColor"
                      stroke-width="1.1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.33301 12.25H4.66634"
                      stroke="currentColor"
                      stroke-width="1.1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Insertar resumen
                </span>
              </div>
              <button
                type="submit"
                :disabled="loading || !draft.trim()"
                class="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-theme-sm transition hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-200 disabled:opacity-60 disabled:hover:bg-brand-500 dark:bg-brand-400 dark:hover:bg-brand-300 dark:focus:ring-brand-400/50"
              >
                <span v-if="!loading">Enviar</span>
                <span v-else>Enviando…</span>
                <svg class="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 8H14"
                    stroke="currentColor"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.33301 3.33337L14 8.00004L9.33301 12.6667"
                    stroke="currentColor"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </aside>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAiAssistant } from '@/composables/useAiAssistant'
import { chatService } from '@/services/chatService'

const { isOpen, close } = useAiAssistant()

type ChatMessage = { id: string; role: 'assistant' | 'user'; content: string; title?: string }
const messages = ref<ChatMessage[]>([])
const draft = ref('')
const sessionId = ref<string | null>(null)
const loading = ref<boolean>(false)

const handleSubmit = async () => {
  const text = draft.value.trim()
  if (!text || loading.value) return

  const userMessage: ChatMessage = {
    id: `msg-${crypto.randomUUID()}`,
    role: 'user',
    content: text,
  }
  messages.value.push(userMessage)
  draft.value = ''
  loading.value = true

  try {
    const res = await chatService.chat({ sessionId: sessionId.value ?? undefined, question: text })
    if (res && typeof res.sessionId === 'string') sessionId.value = res.sessionId
    const answer = res && res.answer ? res.answer : 'No hubo respuesta.'
    const assistantMessage: ChatMessage = { id: `msg-${crypto.randomUUID()}`, role: 'assistant', content: answer }
    messages.value.push(assistantMessage)
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Error al obtener respuesta.'
    const assistantMessage: ChatMessage = { id: `msg-${crypto.randomUUID()}`, role: 'assistant', content: msg }
    messages.value.push(assistantMessage)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.assistant-panel {
  width: 100%;
}

@media (min-width: 1024px) {
  .assistant-panel {
    width: 360px;
  }
}
</style>
