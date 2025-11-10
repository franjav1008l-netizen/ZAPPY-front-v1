<template>
  <div>
    <div v-if="isAuthenticated" class="relative" ref="dropdownRef">
      <button class="flex items-center text-gray-700 dark:text-gray-400" @click.prevent="toggleDropdown">
        <span class="mr-3 overflow-hidden rounded-full h-11 w-11">
          <img :src="avatarUrl" :alt="displayName" />
        </span>

        <span class="block mr-1 font-medium text-theme-sm">{{ displayName }}</span>

        <ChevronDownIcon :class="{ 'rotate-180': dropdownOpen }" />
      </button>

      <!-- Dropdown Start -->
      <div
        v-if="dropdownOpen"
        class="absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
      >
        <div>
          <span class="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
            {{ displayName }}
          </span>
          <span class="mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400">
            {{ displayEmail }}
          </span>
        </div>

        <ul class="flex flex-col gap-1 pt-4 pb-3 border-b border-gray-200 dark:border-gray-800">
          <li v-for="item in menuItems" :key="item.href">
            <router-link
              :to="item.href"
              class="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <component
                :is="item.icon"
                class="text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300"
              />
              {{ item.text }}
            </router-link>
          </li>
        </ul>
        <button
          type="button"
          @click="handleLogout"
          class="mt-3 flex items-center gap-3 rounded-lg px-3 py-2 text-theme-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
        >
          <LogoutIcon class="text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
          Cerrar sesión
        </button>
      </div>
      <!-- Dropdown End -->
    </div>
    <router-link
      v-else
      to="/signin"
      class="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-theme-sm transition hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:bg-brand-400 dark:hover:bg-brand-300"
    >
      Iniciar sesión
    </router-link>
  </div>
</template>

<script setup lang="ts">
import ChevronDownIcon from '@/icons/ChevronDownIcon.vue'
import InfoCircleIcon from '@/icons/InfoCircleIcon.vue'
import LogoutIcon from '@/icons/LogoutIcon.vue'
import SettingsIcon from '@/icons/SettingsIcon.vue'
import UserCircleIcon from '@/icons/UserCircleIcon.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { isAuthenticated, currentUser, assignedProfile, logout } = useAuth()

const dropdownOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const menuItems = [
  { href: '/profile', icon: UserCircleIcon, text: 'Editar perfil' },
  { href: '/profile', icon: SettingsIcon, text: 'Configuración de cuenta' },
  { href: '/profile', icon: InfoCircleIcon, text: 'Soporte' },
]

const displayName = computed(() => currentUser.value?.fullName || assignedProfile.value?.name || 'Usuario')
const displayEmail = computed(() => currentUser.value?.email || assignedProfile.value?.email || 'Sin correo')
const avatarUrl = computed(() => assignedProfile.value?.avatar || '/images/user/owner.jpg')

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const closeDropdown = () => {
  dropdownOpen.value = false
}

const handleLogout = async () => {
  await logout()
  closeDropdown()
  router.push({ path: '/signin' })
}

const handleClickOutside = (event: Event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    closeDropdown()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
