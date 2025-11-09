<template>
  <div class="min-h-screen xl:flex">
    <app-sidebar />
    <Backdrop />
    <div class="flex-1 transition-all duration-300 ease-in-out lg:ml-[240px]">
      <div class="flex min-h-screen flex-col gap-4 lg:flex-row lg:gap-0 lg:items-stretch">
        <ai-assistant-panel class="lg:ml-2 lg:h-[calc(100vh_-_2rem)]" />
        <div class="flex-1 flex flex-col">
          <app-header />
          <div class="flex-1 flex flex-col">
            <div class="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6 flex-1 w-full">
              <slot></slot>
            </div>
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
