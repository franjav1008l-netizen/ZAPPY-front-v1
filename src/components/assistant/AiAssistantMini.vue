<template>
  <button
    v-if="isMinimized"
    type="button"
    @click="open"
    class="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-3 py-2 text-sm font-semibold text-white shadow-theme-sm transition hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-200 dark:bg-brand-400 dark:hover:bg-brand-300 dark:focus:ring-brand-400/50"
    aria-label="Abrir asistente"
    title="Abrir asistente"
  >
    <ChatIcon class="w-4 h-4" />
    <span class="hidden sm:inline">Asistente</span>
  </button>
</template>

<script setup lang="ts">
import { useAiAssistant } from '@/composables/useAiAssistant'
import ChatIcon from '@/icons/ChatIcon.vue'

const { isMinimized, open } = useAiAssistant()
</script>
