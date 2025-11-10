<template>
  <section class="relative py-20 bg-gradient-to-br from-muted/20 via-background to-brand-50/10 dark:to-brand-950/10">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4 text-foreground">
          Calcula tu ROI con Zippy
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Descubre cuánto tiempo y dinero puedes ahorrar automatizando tu negocio
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-8">
          <!-- Calculator Inputs -->
          <div class="bg-card border border-border rounded-2xl p-8 shadow-xl">
            <h3 class="text-2xl font-semibold mb-6 text-foreground">
              Tus Datos de Negocio
            </h3>

            <div class="space-y-6">
              <!-- Number of Users -->
              <div>
                <label class="flex justify-between items-center mb-2">
                  <span class="text-sm font-medium text-foreground">Número de Usuarios</span>
                  <span class="text-2xl font-bold text-brand-600 dark:text-brand-400">{{ numUsers }}</span>
                </label>
                <input
                  v-model.number="numUsers"
                  type="range"
                  min="1"
                  max="50"
                  class="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div class="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 usuario</span>
                  <span>50 usuarios</span>
                </div>
              </div>

              <!-- Hours per Day -->
              <div>
                <label class="flex justify-between items-center mb-2">
                  <span class="text-sm font-medium text-foreground">Horas de Entrada Manual/Día</span>
                  <span class="text-2xl font-bold text-brand-600 dark:text-brand-400">{{ hoursPerDay }}h</span>
                </label>
                <input
                  v-model.number="hoursPerDay"
                  type="range"
                  min="0.5"
                  max="8"
                  step="0.5"
                  class="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div class="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0.5 horas</span>
                  <span>8 horas</span>
                </div>
              </div>

              <!-- Cost per Hour -->
              <div>
                <label class="flex justify-between items-center mb-2">
                  <span class="text-sm font-medium text-foreground">Costo por Hora ($/hr)</span>
                  <span class="text-2xl font-bold text-brand-600 dark:text-brand-400">${{ costPerHour }}</span>
                </label>
                <input
                  v-model.number="costPerHour"
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  class="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div class="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>$10/hr</span>
                  <span>$100/hr</span>
                </div>
              </div>

              <!-- Automation Percentage -->
              <div>
                <label class="flex justify-between items-center mb-2">
                  <span class="text-sm font-medium text-foreground">% de Trabajo Automatizable</span>
                  <span class="text-2xl font-bold text-brand-600 dark:text-brand-400">{{ automationPercent }}%</span>
                </label>
                <input
                  v-model.number="automationPercent"
                  type="range"
                  min="20"
                  max="90"
                  step="5"
                  class="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div class="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>20% automatizado</span>
                  <span>90% automatizado</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Results -->
          <div class="bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 class="text-2xl font-semibold mb-6">
              Tu Ahorro Proyectado
            </h3>

            <div class="space-y-6">
              <!-- Daily Savings -->
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div class="flex items-center gap-3 mb-2">
                  <CalendarIcon class="w-6 h-6" />
                  <span class="text-sm font-medium opacity-90">Ahorro Diario</span>
                </div>
                <div class="text-4xl font-bold">${{ formatNumber(dailySavings) }}</div>
                <div class="text-sm opacity-80 mt-1">{{ formatNumber(dailyHours) }} horas ahorradas</div>
              </div>

              <!-- Monthly Savings -->
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div class="flex items-center gap-3 mb-2">
                  <CalendarIcon class="w-6 h-6" />
                  <span class="text-sm font-medium opacity-90">Ahorro Mensual</span>
                </div>
                <div class="text-4xl font-bold">${{ formatNumber(monthlySavings) }}</div>
                <div class="text-sm opacity-80 mt-1">{{ formatNumber(monthlyHours) }} horas ahorradas</div>
              </div>

              <!-- Annual Savings -->
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div class="flex items-center gap-3 mb-2">
                  <CalendarIcon class="w-6 h-6" />
                  <span class="text-sm font-medium opacity-90">Ahorro Anual</span>
                </div>
                <div class="text-5xl font-bold">${{ formatNumber(annualSavings) }}</div>
                <div class="text-sm opacity-80 mt-1">{{ formatNumber(annualHours) }} horas ahorradas</div>
              </div>

              <!-- ROI Indicator -->
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium opacity-90">ROI en el primer año</span>
                  <span class="text-2xl font-bold">{{ roiPercent }}x</span>
                </div>
                <div class="w-full bg-white/20 rounded-full h-2 mt-3">
                  <div
                    class="bg-white h-2 rounded-full transition-all duration-500"
                    :style="{ width: Math.min(roiPercent * 10, 100) + '%' }"
                  ></div>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div class="mt-8 pt-6 border-t border-white/20">
              <button
                @click="scrollToContact"
                class="w-full bg-white text-brand-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg"
              >
                Comienza a Ahorrar Ahora
              </button>
            </div>
          </div>
        </div>

        <!-- Additional Info -->
        <div class="mt-8 grid md:grid-cols-3 gap-6">
          <div class="bg-card border border-border rounded-xl p-6 text-center">
            <div class="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckIcon class="w-6 h-6 text-brand-600 dark:text-brand-400" />
            </div>
            <h4 class="font-semibold text-foreground mb-2">Reducción de Errores</h4>
            <p class="text-sm text-muted-foreground">Hasta 95% menos errores en entrada de datos</p>
          </div>

          <div class="bg-card border border-border rounded-xl p-6 text-center">
            <div class="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckIcon class="w-6 h-6 text-brand-600 dark:text-brand-400" />
            </div>
            <h4 class="font-semibold text-foreground mb-2">Tiempo Real</h4>
            <p class="text-sm text-muted-foreground">Información actualizada instantáneamente</p>
          </div>

          <div class="bg-card border border-border rounded-xl p-6 text-center">
            <div class="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckIcon class="w-6 h-6 text-brand-600 dark:text-brand-400" />
            </div>
            <h4 class="font-semibold text-foreground mb-2">Escalabilidad</h4>
            <p class="text-sm text-muted-foreground">Crece sin necesidad de más personal</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import CalendarIcon from '@/icons/CalenderIcon.vue';
import CheckIcon from '@/icons/CheckIcon.vue';

const numUsers = ref(5);
const hoursPerDay = ref(3);
const costPerHour = ref(25);
const automationPercent = ref(70);

const dailyHours = computed(() => {
  return numUsers.value * hoursPerDay.value * (automationPercent.value / 100);
});

const dailySavings = computed(() => {
  return dailyHours.value * costPerHour.value;
});

const monthlyHours = computed(() => {
  return dailyHours.value * 22; // Working days per month
});

const monthlySavings = computed(() => {
  return dailySavings.value * 22;
});

const annualHours = computed(() => {
  return dailyHours.value * 260; // Working days per year
});

const annualSavings = computed(() => {
  return dailySavings.value * 260;
});

const roiPercent = computed(() => {
  // Assuming Zippy costs $99/user/month
  const annualCost = numUsers.value * 99 * 12;
  const roi = annualSavings.value / annualCost;
  return Math.round(roi * 10) / 10;
});

const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('es-MX', {
    maximumFractionDigits: 0
  }).format(num);
};

const scrollToContact = () => {
  const footer = document.querySelector('footer');
  footer?.scrollIntoView({ behavior: 'smooth' });
};
</script>
