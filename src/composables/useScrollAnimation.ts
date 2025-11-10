import { onMounted, onUnmounted } from 'vue'

/**
 * Composable para animaciones de scroll con Intersection Observer
 * Implementa fade-in y slide-up al hacer scroll según especificaciones Optiflow
 */
export function useScrollAnimation() {
  let observer: IntersectionObserver | null = null

  const initScrollAnimations = () => {
    // Limpiar observer anterior si existe
    if (observer) {
      observer.disconnect()
    }

    // Configuración del Intersection Observer
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Se activa cuando el 10% del elemento es visible
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          // Opcional: dejar de observar después de la animación para mejor rendimiento
          observer?.unobserve(entry.target)
        }
      })
    }, options)

    // Observar todos los elementos con clases de animación
    const fadeInElements = document.querySelectorAll('.fade-in-on-scroll')
    const slideUpElements = document.querySelectorAll('.slide-up-on-scroll')
    const staggerElements = document.querySelectorAll('.stagger-item')

    fadeInElements.forEach((el) => observer?.observe(el))
    slideUpElements.forEach((el) => observer?.observe(el))
    staggerElements.forEach((el) => observer?.observe(el))
  }

  onMounted(() => {
    // Pequeño delay para asegurar que el DOM esté completamente renderizado
    setTimeout(() => {
      initScrollAnimations()
    }, 100)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    initScrollAnimations,
  }
}

