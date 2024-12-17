<script setup lang="ts">
import { VisXYContainer, VisTooltip, VisCrosshair, VisArea } from '@unovis/vue'
import { Area } from '@unovis/ts'
import type { DataRecord } from '../molecules/dashboard/StatDashboard.vue'

defineProps<{
  title: string
  subtitle: string
  data: DataRecord[]
  value: number
}>()

const x = (_: DataRecord, index: number) => index
const y = (d: DataRecord) => d.prospect
const wm = new WeakMap()

const template = {
  [Area.selectors.area]: (d: DataRecord) => wm.get(d),
}
</script>

<template>
  <div class="bg-white rounded-[20px] flex flex-col relative shadow overflow-hidden">
    <div class="flex justify-between p-[17px]">
      <div class="flex flex-col">
        <h2 class="text-title font-bold text-xl">{{ title }}</h2>
        <p class="text-subtitle">{{ subtitle }}</p>
      </div>
      <div
        class="shadow-2xl border border-sucess h-fit py-1 px-2 rounded flex items-center justify-center"
      >
        <p class="text-sucess">+ {{ value }}</p>
      </div>
    </div>
    <div class="w-full h-56">
      <VisXYContainer :data="data">
        <VisArea color="oklch(65.05% 0.1879 43.58)" :x="x" :y="y" />
        <VisTooltip />
        <VisCrosshair :template="template" />
      </VisXYContainer>
    </div>
  </div>
</template>
