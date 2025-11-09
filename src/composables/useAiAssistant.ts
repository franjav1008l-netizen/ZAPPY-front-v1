import { inject, provide, ref, computed, watch, type ComputedRef } from 'vue'

const AiAssistantSymbol = Symbol('AiAssistantContext')

type AiAssistantContext = {
  isOpen: ComputedRef<boolean>
  isMinimized: ComputedRef<boolean>
  toggle: () => void
  open: () => void
  close: () => void
  minimize: () => void
}

const STORAGE_KEY = 'tailadmin-ai-assistant-open'
const STORAGE_MIN_KEY = 'tailadmin-ai-assistant-minimized'

const getInitialState = () => {
  if (typeof window === 'undefined') return false
  const cached = window.localStorage.getItem(STORAGE_KEY)
  return cached === 'true'
}

const getInitialMinState = () => {
  if (typeof window === 'undefined') return false
  const cached = window.localStorage.getItem(STORAGE_MIN_KEY)
  return cached === 'true'
}

export function useAiAssistantProvider(): AiAssistantContext {
  const openState = ref(getInitialState())
  const minimizedState = ref(getInitialMinState())

  // Si no hay preferencia previa guardada y no está abierto, mostrar minimizado por defecto
  if (typeof window !== 'undefined') {
    if (!openState.value && window.localStorage.getItem(STORAGE_MIN_KEY) === null) {
      minimizedState.value = true
    }
  }

  const toggle = () => {
    // Si está minimizado, expandir; si está expandido, minimizar
    if (minimizedState.value) {
      openState.value = true
      minimizedState.value = false
    } else if (openState.value) {
      openState.value = false
      minimizedState.value = true
    } else {
      openState.value = true
      minimizedState.value = false
    }
  }

  const open = () => {
    openState.value = true
    minimizedState.value = false
  }

  const close = () => {
    // Cerrar equivale a minimizar según nueva UX
    openState.value = false
    minimizedState.value = true
  }

  const minimize = () => {
    openState.value = false
    minimizedState.value = true
  }

  const context: AiAssistantContext = {
    isOpen: computed(() => openState.value),
    isMinimized: computed(() => minimizedState.value),
    toggle,
    open,
    close,
    minimize,
  }

  if (typeof window !== 'undefined') {
    watch(
      openState,
      (value) => {
        window.localStorage.setItem(STORAGE_KEY, value ? 'true' : 'false')
      },
      { immediate: false },
    )

    watch(
      minimizedState,
      (value) => {
        window.localStorage.setItem(STORAGE_MIN_KEY, value ? 'true' : 'false')
      },
      { immediate: false },
    )
  }

  provide(AiAssistantSymbol, context)

  return context
}

export function useAiAssistant(): AiAssistantContext {
  const context = inject<AiAssistantContext>(AiAssistantSymbol)

  if (!context) {
    throw new Error('useAiAssistant must be used within AiAssistantProvider')
  }

  return context
}
