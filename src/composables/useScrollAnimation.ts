import { onMounted, onUnmounted, ref } from 'vue';

export const useScrollAnimation = () => {
  const observer = ref<IntersectionObserver | null>(null);

  const initScrollAnimation = () => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    observer.value = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.value?.observe(el));
  };

  onMounted(() => {
    initScrollAnimation();
  });

  onUnmounted(() => {
    observer.value?.disconnect();
  });

  return {
    initScrollAnimation
  };
};
