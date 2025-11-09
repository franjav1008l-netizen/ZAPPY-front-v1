<template>
  <admin-layout>
    <div class="space-y-6">
      <header class="rounded-2xl border border-gray-200 bg-white px-6 py-7 dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Noticias</h1>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Repositorio de anuncios, eventos y actualizaciones estratégicas para cuentas clave.
            </p>
          </div>
          <p class="text-sm text-gray-400 dark:text-gray-500">
            Actualizado {{ formatDate(latestUpdate) }}
          </p>
        </div>
      </header>

      <section class="grid gap-5 lg:grid-cols-3">
        <aside class="space-y-5 lg:col-span-1">
          <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
            <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Filtros rápidos
            </h2>
            <div class="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <button
                class="w-full rounded-lg border border-gray-300 px-3 py-2 text-left font-medium transition hover:border-brand-200 hover:bg-brand-50/50 dark:border-gray-700 dark:hover:border-brand-500/40 dark:hover:bg-brand-500/10"
                @click="filterByTag('Eventos')"
              >
                Eventos y demos
              </button>
              <button
                class="w-full rounded-lg border border-gray-300 px-3 py-2 text-left font-medium transition hover:border-brand-200 hover:bg-brand-50/50 dark:border-gray-700 dark:hover:border-brand-500/40 dark:hover:bg-brand-500/10"
                @click="filterByTag('Clientes')"
              >
                Clientes enterprise
              </button>
              <button
                class="w-full rounded-lg border border-gray-300 px-3 py-2 text-left font-medium transition hover:border-brand-200 hover:bg-brand-50/50 dark:border-gray-700 dark:hover:border-brand-500/40 dark:hover:bg-brand-500/10"
                @click="filterByTag('Cumplimiento')"
              >
                Cumplimiento y data
              </button>
            </div>
          </div>

          <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
            <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Próximos hitos
            </h2>
            <ul class="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li v-for="item in upcoming" :key="item.id" class="flex items-start gap-3">
                <span class="mt-1 inline-flex h-2 w-2 rounded-full bg-brand-500"></span>
                <div>
                  <p class="font-medium text-gray-800 dark:text-white/90">{{ item.title }}</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ formatDate(item.date) }} · {{ item.channel }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </aside>

        <main class="lg:col-span-2">
          <div
            v-if="isLoading"
            class="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-10 text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400"
          >
            Cargando noticias en tiempo real…
          </div>
          <div
            v-else-if="loadError"
            class="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-700 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-200"
          >
            {{ loadError }}
          </div>
          <div
            v-else-if="!filteredNews.length"
            class="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-gray-300 p-10 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400"
          >
            <span class="font-medium text-gray-600 dark:text-gray-200">Sin noticias disponibles</span>
            <span>Intenta ajustar los filtros o vuelve a consultar más tarde.</span>
          </div>
          <template v-else>
            <article
              v-for="news in filteredNews"
              :key="news.id"
              class="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-theme-md dark:border-gray-800 dark:bg-white/[0.04]"
            >
              <header class="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                <span class="inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 font-semibold uppercase tracking-wide text-gray-600 dark:bg-gray-900 dark:text-gray-300">
                  {{ formatDate(news.date) }}
                </span>
                <span class="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-600 dark:bg-brand-500/15 dark:text-brand-200">
                  {{ news.channel }}
                </span>
                <span class="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                  {{ news.account }}
                </span>
              </header>

              <h2 class="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                {{ news.title }}
              </h2>
              <p class="mt-2 text-sm text-brand-600 dark:text-brand-300">
                {{ news.summary }}
              </p>

              <div class="mt-4 whitespace-pre-line text-sm leading-6 text-gray-700 dark:text-gray-200">
                {{ news.body }}
              </div>

              <footer class="mt-6 flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                <span class="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">
                  {{ news.location }}
                </span>
                <span v-if="news.reference" class="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">
                  {{ news.reference }}
                </span>
                <span
                  v-for="tag in news.tags"
                  :key="`${news.id}-${tag}`"
                  class="rounded-full bg-brand-50 px-3 py-1 text-brand-600 dark:bg-brand-500/15 dark:text-brand-200"
                >
                  #{{ tag }}
                </span>
              </footer>
            </article>
          </template>
        </main>
      </section>
    </div>
  </admin-layout>
</template>

<script setup lang="ts">
import AdminLayout from '@/components/layout/AdminLayout.vue'
import { computed, onMounted, ref } from 'vue'
import { crmService, type FreshDataItem } from '@/services/crmService'
import { ApiError } from '@/services/apiClient'

type UiNewsItem = {
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

const tagFilter = ref<string | null>(null)
const isLoading = ref(false)
const loadError = ref<string | null>(null)
const rawNews = ref<FreshDataItem[]>([])

const safeDate = (value: string | null | undefined) => {
  if (!value) return null
  const parsed = new Date(value)
  if (Number.isNaN(parsed.valueOf())) return null
  return parsed.toISOString()
}

const mapFreshDataToUi = (item: FreshDataItem): UiNewsItem => {
  const date = safeDate(item.published_at) ?? safeDate(item.detected_at)

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

const newsItems = computed<UiNewsItem[]>(() => rawNews.value.map(mapFreshDataToUi))

const sortedNews = computed<UiNewsItem[]>(() =>
  [...newsItems.value].sort((a, b) => {
    const aTime = a.date ? new Date(a.date).getTime() : 0
    const bTime = b.date ? new Date(b.date).getTime() : 0
    return bTime - aTime
  }),
)

const filteredNews = computed(() => {
  if (!tagFilter.value) return sortedNews.value
  return sortedNews.value.filter((post) => post.tags.includes(tagFilter.value as string))
})

const upcoming = computed(() => sortedNews.value.slice(0, 3))
const latestUpdate = computed(
  () => sortedNews.value[0]?.date ?? new Date().toISOString(),
)

const filterByTag = (tag: string) => {
  tagFilter.value = tag
}

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

const fetchNews = async () => {
  isLoading.value = true
  loadError.value = null

  try {
    const response = await crmService.listFreshData({ limit: 50 })
    rawNews.value = response.data
  } catch (error) {
    console.error('No fue posible cargar las noticias desde el backend', error)
    if (error instanceof ApiError) {
      loadError.value = error.message
    } else if (error instanceof Error) {
      loadError.value = error.message
    } else {
      loadError.value = 'Error desconocido al cargar las noticias.'
    }
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchNews)
</script>
