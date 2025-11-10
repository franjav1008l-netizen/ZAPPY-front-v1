<template>
  <section class="relative py-20 bg-gradient-to-br from-background via-background to-muted/20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4 text-foreground">
          Prueba el Asistente de IA en Vivo
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Experimenta cómo Zippy puede responder tus preguntas de negocio instantáneamente
        </p>
      </div>

      <div class="max-w-3xl mx-auto">
        <div class="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
          <!-- Chat Header -->
          <div class="bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-4 flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <ChatIcon class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-white font-semibold">Asistente Zippy</h3>
              <p class="text-white/80 text-sm">Disponible 24/7</p>
            </div>
            <div class="ml-auto flex gap-2">
              <button
                v-for="example in exampleQuestions.slice(0, 3)"
                :key="example"
                @click="askQuestion(example)"
                class="hidden md:block px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-xs text-white transition-colors"
              >
                {{ example.split('?')[0] }}?
              </button>
            </div>
          </div>

          <!-- Chat Messages -->
          <div class="h-[400px] overflow-y-auto p-6 space-y-4 bg-background/50">
            <div
              v-for="(message, index) in messages"
              :key="index"
              :class="[
                'flex gap-3',
                message.role === 'user' ? 'justify-end' : 'justify-start'
              ]"
            >
              <div
                v-if="message.role === 'assistant'"
                class="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0"
              >
                <ChatIcon class="w-4 h-4 text-brand-600 dark:text-brand-400" />
              </div>
              <div
                :class="[
                  'max-w-[80%] rounded-2xl px-4 py-3',
                  message.role === 'user'
                    ? 'bg-brand-500 text-white'
                    : 'bg-muted text-foreground'
                ]"
              >
                <p class="text-sm whitespace-pre-wrap">{{ message.content }}</p>
              </div>
              <div
                v-if="message.role === 'user'"
                class="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0"
              >
                <UserCircleIcon class="w-4 h-4 text-secondary-foreground" />
              </div>
            </div>

            <div v-if="isTyping" class="flex gap-3 justify-start">
              <div class="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                <ChatIcon class="w-4 h-4 text-brand-600 dark:text-brand-400" />
              </div>
              <div class="bg-muted rounded-2xl px-4 py-3">
                <div class="flex gap-1">
                  <span class="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style="animation-delay: 0ms"></span>
                  <span class="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style="animation-delay: 150ms"></span>
                  <span class="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style="animation-delay: 300ms"></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Example Questions -->
          <div class="border-t border-border bg-muted/30 px-6 py-4">
            <p class="text-sm text-muted-foreground mb-3">Prueba estas preguntas:</p>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="example in exampleQuestions"
                :key="example"
                @click="askQuestion(example)"
                :disabled="isTyping"
                class="px-4 py-2 bg-background hover:bg-accent border border-border rounded-lg text-sm text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ example }}
              </button>
            </div>
          </div>

          <!-- Input Area -->
          <div class="border-t border-border bg-background px-6 py-4">
            <div class="flex gap-3">
              <input
                v-model="inputMessage"
                @keypress.enter="sendMessage"
                :disabled="isTyping"
                type="text"
                placeholder="Escribe tu pregunta..."
                class="flex-1 px-4 py-2.5 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:opacity-50"
              />
              <button
                @click="sendMessage"
                :disabled="isTyping || !inputMessage.trim()"
                class="px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <SendIcon class="w-4 h-4" />
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChatIcon from '@/icons/ChatIcon.vue';
import UserCircleIcon from '@/icons/UserCircleIcon.vue';
import SendIcon from '@/icons/SendIcon.vue';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const messages = ref<Message[]>([
  {
    role: 'assistant',
    content: '¡Hola! Soy el asistente de Zippy. Puedo ayudarte con información sobre pedidos, clientes, inventario y más. ¿En qué puedo ayudarte hoy?'
  }
]);

const inputMessage = ref('');
const isTyping = ref(false);

const exampleQuestions = [
  '¿Cuáles son mis ventas de hoy?',
  '¿Qué clientes tienen facturas pendientes?',
  '¿Cuál es mi producto más vendido?',
  '¿Necesito reponer inventario?'
];

const responses: Record<string, string> = {
  'ventas': 'Hoy has registrado $12,450 en ventas, con un total de 28 pedidos. Esto representa un aumento del 15% comparado con el promedio de esta semana. Los productos más vendidos hoy son: Laptop Pro (8 unidades) y Mouse Inalámbrico (15 unidades).',
  'clientes': 'Actualmente tienes 5 clientes con facturas pendientes por un total de $8,900. Los clientes son: TechCorp ($3,200), Digital Solutions ($2,100), StartupXYZ ($1,800), InnovaLabs ($1,000), y SmartBiz ($800). Te recomiendo enviar recordatorios a los que tienen más de 30 días de atraso.',
  'producto': 'Tu producto más vendido este mes es el "Laptop Pro 15"" con 156 unidades vendidas, generando $234,000 en ingresos. Le sigue el "Mouse Inalámbrico Premium" con 342 unidades y el "Teclado Mecánico RGB" con 198 unidades.',
  'inventario': 'Sí, necesitas reponer inventario de 3 productos: Mouse Inalámbrico Premium (quedan 8 unidades, punto de reorden: 20), Teclado Mecánico RGB (quedan 12 unidades, punto de reorden: 25), y Audífonos Bluetooth (quedan 5 unidades, punto de reorden: 15). ¿Quieres que genere las órdenes de compra automáticamente?',
  'default': 'Entiendo tu pregunta. Como asistente de IA, puedo ayudarte con análisis de ventas, gestión de clientes, control de inventario, facturación, y reportes en tiempo real. ¿Hay algo específico sobre tu negocio en lo que pueda ayudarte?'
};

const getResponse = (question: string): string => {
  const lowerQuestion = question.toLowerCase();
  if (lowerQuestion.includes('venta')) return responses.ventas;
  if (lowerQuestion.includes('cliente') || lowerQuestion.includes('factura') || lowerQuestion.includes('pendiente')) return responses.clientes;
  if (lowerQuestion.includes('producto') || lowerQuestion.includes('vendido')) return responses.producto;
  if (lowerQuestion.includes('inventario') || lowerQuestion.includes('reponer')) return responses.inventario;
  return responses.default;
};

const askQuestion = async (question: string) => {
  messages.value.push({ role: 'user', content: question });
  isTyping.value = true;

  setTimeout(() => {
    const response = getResponse(question);
    messages.value.push({ role: 'assistant', content: response });
    isTyping.value = false;
  }, 1500);
};

const sendMessage = () => {
  if (!inputMessage.value.trim() || isTyping.value) return;
  
  const question = inputMessage.value;
  inputMessage.value = '';
  askQuestion(question);
};
</script>
