<template>
  <header class="sticky top-4 z-99999 w-full px-4 sm:px-6">
    <div
      class="mx-auto flex w-full max-w-(--breakpoint-2xl) flex-col gap-4 rounded-3xl border border-gray-200 bg-white/90 p-4 shadow-theme-lg backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-white/10 dark:bg-gray-900/80"
    >
      <div class="flex w-full items-center gap-2 sm:gap-4">
        <button
          @click="toggleApplicationMenu"
          class="order-1 flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.99902 10.4951C6.82745 10.4951 7.49902 11.1667 7.49902 11.9951V12.0051C7.49902 12.8335 6.82745 13.5051 5.99902 13.5051C5.1706 13.5051 4.49902 12.8335 4.49902 12.0051V11.9951C4.49902 11.1667 5.1706 10.4951 5.99902 10.4951ZM17.999 10.4951C18.8275 10.4951 19.499 11.1667 19.499 11.9951V12.0051C19.499 12.8335 18.8275 13.5051 17.999 13.5051C17.1706 13.5051 16.499 12.8335 16.499 12.0051V11.9951C16.499 11.1667 17.1706 10.4951 17.999 10.4951ZM13.499 11.9951C13.499 11.1667 12.8275 10.4951 11.999 10.4951C11.1706 10.4951 10.499 11.1667 10.499 11.9951V12.0051C10.499 12.8335 11.1706 13.5051 11.999 13.5051C12.8275 13.5051 13.499 12.8335 13.499 12.0051V11.9951Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <HeaderLogo class="order-2" />
        <AiAssistantMini class="order-3 lg:order-2" />

        <SearchBar class="order-4 flex-1 min-w-0" />

        <div class="order-5 hidden items-center gap-2 2xsm:gap-3 lg:flex">
          <ThemeToggler />
          <NotificationMenu />
          <UserMenu />
        </div>
      </div>

      <div
        :class="[isApplicationMenuOpen ? 'flex' : 'hidden']"
        class="w-full flex-col items-stretch gap-3 rounded-2xl border border-gray-100 bg-white/80 px-4 py-3 shadow-theme-xs transition dark:border-white/10 dark:bg-white/[0.04] lg:hidden"
      >
        <div class="flex items-center gap-2 2xsm:gap-3">
          <ThemeToggler />
          <NotificationMenu />
        </div>
        <UserMenu />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ThemeToggler from '../common/ThemeToggler.vue'
import SearchBar from './header/SearchBar.vue'
import HeaderLogo from './header/HeaderLogo.vue'
import NotificationMenu from './header/NotificationMenu.vue'
import UserMenu from './header/UserMenu.vue'
import AiAssistantMini from '@/components/assistant/AiAssistantMini.vue'

const isApplicationMenuOpen = ref(false)
const toggleApplicationMenu = () => {
  isApplicationMenuOpen.value = !isApplicationMenuOpen.value
}
</script>
