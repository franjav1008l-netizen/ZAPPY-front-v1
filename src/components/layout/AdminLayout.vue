<template>
  <div class="min-h-screen xl:flex">
    <app-sidebar />
    <Backdrop />
    <div class="flex-1 transition-all duration-300 ease-in-out lg:ml-[240px]">
      <div class="flex min-h-screen flex-col gap-4 lg:flex-row lg:gap-0 lg:items-start">
        <ai-assistant-panel class="lg:ml-2" />
        <div class="flex-1 flex flex-col">
          <app-header />
          <div class="flex-1 flex flex-col">
            <div class="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6 flex-1 w-full">
              <slot></slot>
            </div>
            <!-- Footer -->
            <footer class="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6 pt-0 w-full">
              <p class="text-sm text-center text-gray-500 dark:text-gray-400">
                Designed and Developed by 
                <a 
                  href="https://tailadmin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-brand-500 hover:text-brand-600 transition-colors duration-200 font-medium"
                >
                  Zippy
                </a>
                ~ Distributed by 
                <a 
                  href="https://themewagon.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-brand-500 hover:text-brand-600 transition-colors duration-200 font-medium"
                >
                  ThemeWagon
                </a>
                .
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSidebar } from '@/composables/useSidebar'
import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'
import Backdrop from './Backdrop.vue'
import { useAiAssistantProvider } from '@/composables/useAiAssistant'
import AiAssistantPanel from '@/components/assistant/AiAssistantPanel.vue'
useSidebar()
useAiAssistantProvider()
</script>
