<template>
  <div
    class="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]"
  >
    <div class="border-b border-gray-100 px-5 py-4 dark:border-gray-800 sm:px-6">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 class="text-base font-semibold text-gray-800 dark:text-white/90">Directorio de usuarios</h4>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ resultsLabel }}
          </p>
        </div>
        <div class="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <div class="relative w-full sm:max-w-xs">
            <span class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
              <svg class="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.333 11.333L14 14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="7.333"
                  cy="7.333"
                  r="4.667"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <input
              v-model="searchTerm"
              type="search"
              class="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
              placeholder="Buscar por nombre, empresa o tags"
            />
          </div>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-600 transition hover:border-brand-200 hover:text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:border-gray-700 dark:text-gray-300 dark:hover:border-brand-400 dark:hover:text-brand-200 disabled:cursor-not-allowed disabled:opacity-50"
            @click="fetchContacts"
            :disabled="isLoading"
          >
            <svg class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.051 10.7a6 6 0 0 1 10.992-2.211M15.949 9.3A6 6 0 0 1 4.957 11.511"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 6.5v-3h3M16.5 13.5v3h-3"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ isLoading ? 'Actualizando…' : 'Recargar' }}
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-full overflow-x-auto custom-scrollbar">
      <table class="min-w-full">
        <thead>
          <tr class="border-b border-gray-200 text-left dark:border-gray-700">
            <th class="w-[30%] px-5 py-3 sm:px-6">
              <p class="font-medium uppercase tracking-wide text-gray-500 text-theme-xs dark:text-gray-400">
                User
              </p>
            </th>
            <th class="w-[25%] px-5 py-3 sm:px-6">
              <p class="font-medium uppercase tracking-wide text-gray-500 text-theme-xs dark:text-gray-400">
                Company
              </p>
            </th>
            <th class="w-[20%] px-5 py-3 sm:px-6">
              <p class="font-medium uppercase tracking-wide text-gray-500 text-theme-xs dark:text-gray-400">
                Team
              </p>
            </th>
            <th class="w-[10%] px-5 py-3 text-right sm:px-6">
              <span class="sr-only">Más</span>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
          <tr
            v-for="user in filteredUsers"
            :key="user.id"
            class="border-t border-gray-100 transition hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-white/[0.04]"
          >
            <td class="px-5 py-4 sm:px-6">
              <div class="flex items-center gap-3">
                <div class="h-11 w-11 overflow-hidden rounded-full">
                  <img :src="user.avatar" :alt="user.name" class="h-full w-full object-cover" />
                </div>
                <div>
                  <p class="font-medium text-gray-800 text-theme-sm dark:text-white/90">{{ user.name }}</p>
                  <p class="text-gray-500 text-theme-xs dark:text-gray-400">{{ user.role }}</p>
                </div>
              </div>
            </td>
            <td class="px-5 py-4 sm:px-6">
              <p class="font-medium text-gray-800 text-theme-sm dark:text-white/90">{{ user.company }}</p>
              <p class="text-gray-500 text-theme-xs dark:text-gray-400">{{ user.type }}</p>
            </td>
            <td class="px-5 py-4 sm:px-6">
              <div class="flex -space-x-2">
                <div
                  v-for="(member, memberIndex) in user.team"
                  :key="memberIndex"
                  class="h-7 w-7 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
                >
                  <img :src="member" alt="team member" class="h-full w-full object-cover" />
                </div>
              </div>
            </td>
            <td class="px-5 py-4 text-right sm:px-6">
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-3 py-2 text-xs font-semibold text-white shadow-theme-xs transition hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                @click="openUser(user)"
              >
                Más
                <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 6H9M6 3V9"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr v-if="filteredUsers.length === 0">
            <td colspan="4" class="px-5 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
              No se encontraron usuarios con la búsqueda "{{ searchTerm }}".
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <Modal v-if="isModalOpen && selectedUser" fullScreenBackdrop @close="closeModal">
      <template #body>
        <div class="relative mx-auto w-full max-w-5xl p-6 sm:p-8">
          <div
            class="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-theme-lg dark:border-gray-800 dark:bg-gray-900"
          >
            <button
              type="button"
              class="absolute right-5 top-5 rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:hover:bg-white/10 dark:hover:text-gray-200"
              @click="closeModal"
            >
              <span class="sr-only">Cerrar</span>
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

            <div class="flex flex-col gap-6 p-6 sm:p-10">
              <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
                <div class="h-24 w-24 overflow-hidden rounded-2xl shadow-theme-sm">
                  <img
                    :src="selectedUser.avatar"
                    :alt="selectedUser.name"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="flex-1 space-y-3">
                  <div class="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
                        {{ selectedUser.name }}
                      </h2>
                      <p class="text-gray-500 text-sm dark:text-gray-400">
                        {{ selectedUser.role }} • {{ selectedUser.company }}
                      </p>
                    </div>
                  </div>

                  <div class="grid gap-4 text-sm text-gray-600 dark:text-gray-300 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <p class="font-medium text-gray-500 text-xs uppercase tracking-wide dark:text-gray-400">
                        Empresa
                      </p>
                      <p class="mt-1 text-gray-800 dark:text-white/90">{{ selectedUser.company }}</p>
                    </div>
                    <div>
                      <p class="font-medium text-gray-500 text-xs uppercase tracking-wide dark:text-gray-400">
                        Email
                      </p>
                      <p class="mt-1 text-gray-800 dark:text-white/90">
                        <a :href="`mailto:${selectedUser.email}`" class="hover:underline">
                          {{ selectedUser.email }}
                        </a>
                      </p>
                    </div>
                    <div>
                      <p class="font-medium text-gray-500 text-xs uppercase tracking-wide dark:text-gray-400">
                        Teléfono
                      </p>
                      <p class="mt-1 text-gray-800 dark:text-white/90">
                        <a :href="`tel:${selectedUser.phone}`" class="hover:underline">
                          {{ selectedUser.phone }}
                        </a>
                      </p>
                    </div>
                    <div>
                      <p class="font-medium text-gray-500 text-xs uppercase tracking-wide dark:text-gray-400">
                        Relación
                      </p>
                      <p class="mt-1 text-gray-800 dark:text-white/90">{{ selectedUser.type }}</p>
                    </div>
                    <div v-if="selectedUser.location">
                      <p class="font-medium text-gray-500 text-xs uppercase tracking-wide dark:text-gray-400">
                        Ubicación
                      </p>
                      <p class="mt-1 text-gray-800 dark:text-white/90">{{ selectedUser.location }}</p>
                    </div>
                    <div v-if="selectedUser.accountOwner">
                      <p class="font-medium text-gray-500 text-xs uppercase tracking-wide dark:text-gray-400">
                        Ejecutivo responsable
                      </p>
                      <p class="mt-1 text-gray-800 dark:text-white/90">{{ selectedUser.accountOwner }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-if="selectedUser.commercialProfile"
                class="space-y-5 rounded-2xl border border-brand-100 bg-brand-50/50 p-6 text-sm text-gray-700 shadow-theme-xs dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-gray-200"
              >
                <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">Relación comercial</h3>
                    <p
                      v-if="selectedUser.commercialProfile.summary"
                      class="mt-1 text-sm text-gray-600 dark:text-gray-300"
                    >
                      {{ selectedUser.commercialProfile.summary }}
                    </p>
                  </div>
                  <span
                    v-if="selectedUser.type"
                    class="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-600 shadow-theme-xs dark:bg-brand-500/20 dark:text-brand-100"
                  >
                    {{ selectedUser.type }}
                  </span>
                </div>

                <div v-if="selectedUser.commercialProfile.currentEngagements?.length" class="space-y-3">
                  <h4 class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Proyectos y servicios activos
                  </h4>
                  <article
                    v-for="current in selectedUser.commercialProfile.currentEngagements"
                    :key="`current-${current.name}`"
                    class="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-theme-xs backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <header class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h5 class="text-sm font-semibold text-gray-900 dark:text-white">
                          {{ current.name }}
                        </h5>
                        <p v-if="current.description" class="mt-1 text-sm text-gray-600 dark:text-gray-300">
                          {{ current.description }}
                        </p>
                      </div>
                      <div class="text-right text-xs text-gray-500 dark:text-gray-400">
                        <p v-if="current.period">{{ current.period }}</p>
                        <p v-if="current.financialSummary" class="mt-1 font-semibold text-brand-600 dark:text-brand-200">
                          {{ current.financialSummary }}
                        </p>
                      </div>
                    </header>
                    <div v-if="current.services?.length" class="mt-3 flex flex-wrap gap-2 text-xs">
                      <span
                        v-for="service in current.services"
                        :key="service"
                        class="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-brand-600 ring-1 ring-brand-100 dark:bg-brand-500/15 dark:text-brand-100 dark:ring-brand-400/30"
                      >
                        {{ service }}
                      </span>
                    </div>
                  </article>
                </div>

                <div v-if="selectedUser.commercialProfile.previousEngagements?.length" class="space-y-3">
                  <h4 class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Historico de colaboraciones
                  </h4>
                  <article
                    v-for="previous in selectedUser.commercialProfile.previousEngagements"
                    :key="`previous-${previous.name}`"
                    class="rounded-2xl border border-white/60 bg-white/40 p-4 shadow-theme-xs backdrop-blur-sm dark:border-white/5 dark:bg-white/5"
                  >
                    <header class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h5 class="text-sm font-semibold text-gray-900 dark:text-white">
                          {{ previous.name }}
                        </h5>
                        <p v-if="previous.description" class="mt-1 text-sm text-gray-600 dark:text-gray-300">
                          {{ previous.description }}
                        </p>
                      </div>
                      <div class="text-right text-xs text-gray-500 dark:text-gray-400">
                        <p v-if="previous.period">{{ previous.period }}</p>
                        <p v-if="previous.financialSummary" class="mt-1 font-semibold text-brand-600 dark:text-brand-200">
                          {{ previous.financialSummary }}
                        </p>
                      </div>
                    </header>
                    <div v-if="previous.services?.length" class="mt-3 flex flex-wrap gap-2 text-xs">
                      <span
                        v-for="service in previous.services"
                        :key="service"
                        class="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-gray-600 ring-1 ring-gray-200 dark:bg-white/5 dark:text-gray-200 dark:ring-white/10"
                      >
                        {{ service }}
                      </span>
                    </div>
                  </article>
                </div>
              </div>

              <div v-if="selectedUser.notes?.length" class="rounded-2xl border border-gray-100 bg-gray-50/60 p-5 dark:border-gray-800 dark:bg-white/[0.03]">
                <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">Notas clave</h3>
                <ul class="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li v-for="(note, index) in selectedUser.notes" :key="index" class="flex gap-2">
                    <span class="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500"></span>
                    <span>{{ note }}</span>
                  </li>
                </ul>
              </div>

              <div v-if="selectedUser.interactions?.length" class="space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">Últimas interacciones</h3>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Ordenadas de la más reciente a la más antigua
                  </p>
                </div>
                <div class="overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800">
                  <table class="min-w-full divide-y divide-gray-100 dark:divide-gray-800">
                    <thead class="bg-gray-50 dark:bg-white/[0.02]">
                      <tr class="text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        <th class="px-4 py-3">Fecha</th>
                        <th class="px-4 py-3">Canal</th>
                        <th class="px-4 py-3">Participantes</th>
                        <th class="px-4 py-3">Resumen</th>
                        <th class="px-4 py-3">Datos clave</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 text-sm text-gray-600 dark:divide-gray-800 dark:text-gray-300">
                      <tr v-for="interaction in selectedUser.interactions" :key="interaction.id">
                        <td class="px-4 py-3 align-top text-gray-700 dark:text-gray-200">
                          {{ formatDate(interaction.date) }}
                          <span class="mt-1 block text-xs text-gray-400">
                            {{ interaction.source }}
                          </span>
                        </td>
                        <td class="px-4 py-3 align-top">
                          <div class="font-medium text-gray-700 dark:text-gray-200">{{ interaction.channel }}</div>
                          <div class="text-xs text-gray-400">{{ interaction.subject }}</div>
                        </td>
                        <td class="px-4 py-3 align-top">
                          <div class="space-y-1">
                            <p v-if="interaction.externalParticipants?.length">
                              <span class="font-medium text-gray-500 dark:text-gray-400">Contacto:&nbsp;</span>
                              <span>{{ interaction.externalParticipants.join(', ') }}</span>
                            </p>
                            <p v-if="interaction.internalParticipants?.length">
                              <span class="font-medium text-gray-500 dark:text-gray-400">Equipo interno:&nbsp;</span>
                              <span>{{ interaction.internalParticipants.join(', ') }}</span>
                            </p>
                          </div>
                        </td>
                        <td class="px-4 py-3 align-top">
                          <p>{{ interaction.summary }}</p>
                        </td>
                        <td class="px-4 py-3 align-top">
                          <ul class="space-y-1">
                            <li v-for="(dataPoint, idx) in interaction.dataPoints" :key="idx">
                              <span class="font-medium text-gray-500 dark:text-gray-400">{{ dataPoint.label }}:</span>
                              <span>{{ dataPoint.value }}</span>
                            </li>
                          </ul>
                          <p v-if="interaction.nextSteps" class="mt-2 text-xs text-gray-500 dark:text-gray-400">
                            Próximos pasos: {{ interaction.nextSteps }}
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div v-if="selectedUser.dataFreshness" class="space-y-4">
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">
                      Data Freshness Engine
                    </h3>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      Última sincronización: {{ formatDate(selectedUser.dataFreshness.updatedAt) }}
                    </p>
                  </div>
                  <span
                    class="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-500/15 dark:text-blue-200"
                  >
                    {{ selectedUser.dataFreshness.summary }}
                  </span>
                </div>

                <div class="space-y-3">
                  <article
                    v-for="(highlight, index) in selectedUser.dataFreshness.highlights"
                    :key="index"
                    class="rounded-2xl border border-gray-100 p-4 text-sm dark:border-gray-800"
                  >
                    <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        <span class="inline-flex h-2.5 w-2.5 rounded-full bg-brand-500"></span>
                        {{ highlight.channel }} · {{ highlight.source }}
                      </div>
                      <span class="text-xs text-gray-400">{{ formatDate(highlight.occurredAt) }}</span>
                    </div>
                    <p class="mt-3 text-gray-700 dark:text-gray-200">{{ highlight.summary }}</p>
                    <p v-if="highlight.stakeholders?.length" class="mt-2 text-xs text-gray-500 dark:text-gray-400">
                      Stakeholders: {{ highlight.stakeholders.join(', ') }}
                    </p>
                    <p v-if="highlight.impact" class="mt-2 text-xs text-gray-500 dark:text-gray-400">
                      Impacto estimado: {{ highlight.impact }}
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import Modal from '@/components/ui/Modal.vue'
import { crmService, type Contact } from '@/services/crmService'
import { ApiError } from '@/services/apiClient'

type UiDataPoint = {
  label: string
  value: string
}

type UiInteraction = {
  id: string
  date: string | null
  source?: string | null
  channel?: string | null
  subject?: string | null
  summary?: string | null
  externalParticipants?: string[]
  internalParticipants?: string[]
  dataPoints?: UiDataPoint[]
  nextSteps?: string | null
}

type UiCommercialEngagement = {
  name: string
  description?: string | null
  period?: string | null
  services?: string[]
  financialSummary?: string | null
}

type UiCommercialProfile = {
  summary?: string | null
  currentEngagements?: UiCommercialEngagement[]
  previousEngagements?: UiCommercialEngagement[]
}

type UiDataHighlight = {
  channel?: string | null
  source?: string | null
  occurredAt: string | null
  summary?: string | null
  stakeholders?: string[]
  impact?: string | null
}

type UiDataFreshness = {
  updatedAt: string | null
  summary?: string | null
  highlights: UiDataHighlight[]
}

type UiContact = {
  id: string
  name: string
  role: string
  avatar: string
  company: string
  type: string
  email: string | null
  phone: string | null
  location: string | null
  accountOwner: string | null
  team: string[]
  commercialProfile: UiCommercialProfile | null
  notes: string[]
  interactions: UiInteraction[]
  dataFreshness: UiDataFreshness | null
  sentiment: string | null
  updatedAt: string | null
}

const personKindLabels: Record<string, string> = {
  employee: 'Empleado',
  client: 'Cliente',
  supplier: 'Proveedor',
  partner: 'Partner',
  other: 'Otro',
}

const createAvatarUrl = (name: string) => {
  const safeName = name || 'CRM Contact'
  return `https://ui-avatars.com/api/?background=4338CA&color=FFFFFF&name=${encodeURIComponent(safeName)}`
}

const mapContactToUi = (contact: Contact): UiContact => {
  const name = contact.name || 'Contacto sin nombre'
  const kindLabel = contact.person_kind ? personKindLabels[contact.person_kind] : undefined

  return {
    id: contact.id,
    name,
    role: contact.role ?? '—',
    avatar: createAvatarUrl(name),
    company: contact.company?.name ?? '—',
    type: kindLabel ?? (contact.is_client ? 'Cliente' : 'Contacto'),
    email: contact.email ?? null,
    phone: contact.phone ?? null,
    location: contact.company?.industry ?? null,
    accountOwner: contact.company?.website ?? null,
    team: [],
    commercialProfile: null,
    notes: [],
    interactions: [],
    dataFreshness: null,
    sentiment: contact.sentiment ?? null,
    updatedAt: contact.updated_at ?? null,
  }
}

const users = ref<UiContact[]>([])
const totalCount = ref(0)
const searchTerm = ref('')
const isModalOpen = ref(false)
const selectedUser = ref<UiContact | null>(null)
const isLoading = ref(false)
const loadError = ref<string | null>(null)

const hasSearchTerm = computed(() => searchTerm.value.trim().length > 0)

const matchTerm = (value: string | null | undefined, term: string) => {
  if (!value) return false
  return value.toLowerCase().includes(term)
}

const filteredUsers = computed(() => {
  const term = searchTerm.value.trim().toLowerCase()
  if (!term) return users.value

  return users.value.filter((user) => {
    const baseMatch =
      matchTerm(user.name, term) ||
      matchTerm(user.company, term) ||
      matchTerm(user.type, term) ||
      matchTerm(user.role, term) ||
      matchTerm(user.email, term) ||
      matchTerm(user.phone, term)

    const notesMatch = user.notes.some((note) => matchTerm(note, term))

    const interactionsMatch = user.interactions.some((interaction) => {
      const segments = [
        interaction.summary,
        interaction.subject,
        interaction.channel,
        ...(interaction.dataPoints?.map((dataPoint) => `${dataPoint.label} ${dataPoint.value}`) ?? []),
      ]
      return segments.some((segment) => matchTerm(segment, term))
    })

    return baseMatch || notesMatch || interactionsMatch
  })
})

const resultsLabel = computed(() => {
  if (isLoading.value) return 'Sincronizando contactos…'
  if (loadError.value) return 'Error al cargar contactos'

  const filtered = filteredUsers.value.length
  if (!totalCount.value) {
    return `${filtered} contacto${filtered === 1 ? '' : 's'}`
  }
  return `${filtered} de ${totalCount.value} contacto${totalCount.value === 1 ? '' : 's'}`
})

const fetchContacts = async () => {
  isLoading.value = true
  loadError.value = null

  try {
    const response = await crmService.listContacts({ limit: 100 })
    users.value = response.data
      .map(mapContactToUi)
      .sort((a, b) => a.name.localeCompare(b.name, 'es'))
    totalCount.value = response.count ?? users.value.length
  } catch (error) {
    console.error('No fue posible cargar el directorio de contactos', error)
    if (error instanceof ApiError) {
      loadError.value = error.message
    } else if (error instanceof Error) {
      loadError.value = error.message
    } else {
      loadError.value = 'Error desconocido al cargar los contactos.'
    }
    users.value = []
    totalCount.value = 0
  } finally {
    isLoading.value = false
  }
}

const openUser = (user: UiContact) => {
  selectedUser.value = user
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedUser.value = null
}

const formatDate = (value: string | null | undefined) => {
  if (!value) return '—'
  const parsed = new Date(value)
  if (Number.isNaN(parsed.valueOf())) {
    return value
  }
  return parsed.toLocaleString('es-MX', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

onMounted(fetchContacts)
</script>

<style scoped>
/* Estilos adicionales opcionales */
</style>
