<template>
  <div class="fixed inset-0 z-99999 overflow-y-auto">
    <div
      v-if="fullScreenBackdrop"
      class="fixed inset-0 h-full w-full bg-gray-400/50 backdrop-blur-[32px]"
      aria-hidden="true"
      @click="$emit('close')"
    ></div>
    <div class="flex min-h-full items-start justify-center px-4 py-10 sm:px-6 lg:px-8">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ModalProps {
  fullScreenBackdrop?: boolean
}

defineProps<ModalProps>()
defineEmits(['close'])
</script>
