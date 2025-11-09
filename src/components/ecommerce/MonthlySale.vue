<template>
  <div
    class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6"
  >
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Monthly Sales</h3>

      <div class="relative h-fit">
        <DropdownMenu :menu-items="menuItems" />
      </div>
    </div>

    <div class="max-w-full overflow-x-auto custom-scrollbar">
      <div id="chartOne" class="-ml-5 min-w-[650px] xl:min-w-full pl-2">
        <VueApexCharts type="bar" height="180" :options="chartOptions" :series="series" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DropdownMenu from '../common/DropdownMenu.vue'
const menuItems = [
  { label: 'View More', onClick: () => console.log('View More clicked') },
  { label: 'Delete', onClick: () => console.log('Delete clicked') },
]

import VueApexCharts from 'vue3-apexcharts'
import { insightsService } from '@/services/insightsService'

const defaultData = [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112]
const series = ref([
  {
    name: 'Sales',
    data: [...defaultData],
  },
])

const yFormatter = (val: number) => val.toString()

const chartOptions = ref({
  colors: ['#3a506b'],
  chart: {
    fontFamily: 'Outfit, sans-serif',
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '39%',
      borderRadius: 5,
      borderRadiusApplication: 'end',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 4,
    colors: ['transparent'],
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'left',
    fontFamily: 'Outfit',
    markers: {
      radius: 99,
    },
  },
  yaxis: {
    title: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {
      formatter: yFormatter,
    },
  },
})

onMounted(() => {
  fetchTrends()
})

const fetchTrends = async () => {
  try {
    const res = await insightsService.getTrends({ days: 90 })
    const items = Array.isArray(res && res.interactions) ? res.interactions : []
    const byMonth = new Array(12).fill(0)
    for (const it of items) {
      const d = it && (it.date || it.day || it.occurredAt || it.occurred_at)
      const countRaw = it && (it.count ?? it.value ?? it.total ?? 1)
      const c = Number(countRaw)
      if (typeof d === 'string' || typeof d === 'number' || d instanceof Date) {
        const dt = new Date(d)
        if (!Number.isNaN(dt.valueOf())) {
          byMonth[dt.getMonth()] += Number.isFinite(c) ? c : 1
          continue
        }
      }
      byMonth[11] += Number.isFinite(c) ? c : 1
    }
    const normalized = byMonth.map((n, i) => (n === 0 ? defaultData[i] : n))
    series.value = [{ name: 'Sales', data: normalized }]
  } catch {
    series.value = [{ name: 'Sales', data: [...defaultData] }]
  }
}
</script>
