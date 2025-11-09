<template>
  <div
    class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 py-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:py-6"
  >
    <div class="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Noticias</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Resumen de los anuncios más recientes para las cuentas clave.
        </p>
      </div>
      <div class="flex items-center gap-2">
        <p v-if="isLoading" class="text-xs text-gray-400 dark:text-gray-500">
          Sincronizando noticias…
        </p>
        <p v-else-if="loadError" class="text-xs text-red-500 dark:text-red-300">
          {{ loadError }}
        </p>
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-theme-xs transition hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 disabled:cursor-not-allowed disabled:opacity-60"
          @click="refresh"
          :disabled="isLoading"
        >
          {{ isLoading ? 'Actualizando…' : 'Actualizar' }}
          <svg class="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.333 6.66667C12.79 4.34667 10.6663 2.66667 8.16634 2.66667C5.22634 2.66667 2.83301 5.06 2.83301 8C2.83301 10.94 5.22634 13.3333 8.16634 13.3333C10.513 13.3333 12.493 11.8067 13.1663 9.66667"
              stroke="currentColor"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.3333 3.33333V6.66667H10"
              stroke="currentColor"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="item in latestNews"
        :key="item.id"
        class="flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-gray-50/60 p-5 text-sm shadow-theme-xs transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-theme-md dark:border-gray-800 dark:bg-white/[0.04]"
      >
        <div class="space-y-4">
          <div class="flex flex-wrap items-center gap-2">
            <span
              class="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow-theme-xs dark:bg-gray-900 dark:text-gray-300"
            >
              <svg class="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.66699 2.66667V4.00001M11.3337 2.66667V4.00001M3.33366 6.66667H12.667M5.33366 8.66667H6.00033M8.00033 8.66667H8.66699M5.33366 10.6667H6.00033M8.00033 10.6667H8.66699M4.00033 2.66667H12.0003C12.7367 2.66667 13.3337 3.26363 13.3337 4.00001V12.0000C13.3337 12.7364 12.7367 13.3333 12.0003 13.3333H4.00033C3.26394 13.3333 2.66699 12.7364 2.66699 12.0000V4.00001C2.66699 3.26363 3.26394 2.66667 4.00033 2.66667Z"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ formatDate(item.date) }}
            </span>
            <span
              class="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 dark:bg-brand-500/15 dark:text-brand-200"
            >
              <svg class="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.33301 5.33333L7.99967 8L12.6663 5.33333"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.00033 4H12.0003C12.7367 4 13.3337 4.59696 13.3337 5.33333V10.6667C13.3337 11.403 12.7367 12 12.0003 12H4.00033C3.26394 12 2.66699 11.403 2.66699 10.6667V5.33333C2.66699 4.59696 3.26394 4 4.00033 4Z"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ item.channel }}
            </span>
          </div>

          <div class="space-y-2">
            <h4 class="text-base font-semibold text-gray-900 dark:text-white">
              {{ item.title }}
            </h4>
            <p class="text-gray-600 dark:text-gray-300">
              {{ item.summary }}
            </p>
          </div>
        </div>

        <div class="mt-4 border-t border-dashed border-gray-200 pt-4 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
          <div class="flex flex-col gap-1">
            <p>
              <span class="font-semibold text-gray-600 dark:text-gray-300">Cuenta:</span>
              {{ item.account }}
            </p>
            <p>
              <span class="font-semibold text-gray-600 dark:text-gray-300">Ubicación:</span>
              {{ item.location }}
            </p>
            <p v-if="item.reference">
              <span class="font-semibold text-gray-600 dark:text-gray-300">Referencia:</span>
              {{ item.reference }}
            </p>
          </div>
        </div>
      </article>
    </div>

    <div class="mt-6 flex justify-end">
      <RouterLink
        to="/news"
        class="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-600 transition hover:border-brand-300 hover:bg-brand-100 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-200 dark:hover:border-brand-400"
      >
        Ver todas las noticias
        <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 3L8 6L4 9"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { crmService, mapFreshDataToNewsItem, type FreshDataNewsItem } from '@/services/crmService'
import { ApiError } from '@/services/apiClient'

const isLoading = ref(false)
const loadError = ref<string | null>(null)
const rawNews = ref<FreshDataNewsItem[]>([])

const latestNews = computed(() => rawNews.value.slice(0, 3))

const formatDate = (value: string | null | undefined) => {
  if (!value) return '—'
  const parsed = new Date(value)
  if (Number.isNaN(parsed.valueOf())) {
    return value
  }
  return parsed.toLocaleDateString('es-MX', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

const refresh = async () => {
  isLoading.value = true
  loadError.value = null

  try {
    const response = await crmService.listFreshData({ limit: 12 })
    rawNews.value = response.data.map(mapFreshDataToNewsItem)
  } catch (error) {
    console.error('No fue posible actualizar las noticias del dashboard', error)
    if (error instanceof ApiError) {
      loadError.value = error.message
    } else if (error instanceof Error) {
      loadError.value = error.message
    } else {
      loadError.value = 'Error desconocido al cargar las noticias.'
    }
    rawNews.value = []
  } finally {
    isLoading.value = false
  }
}

onMounted(refresh)
</script>
