<script setup lang="ts">
export type DataRecord = {
  name: string
  prospect: number
}

const data1: DataRecord[] = [
  { name: '1 Jan', prospect: 1 },
  { name: '4 Jan', prospect: 3 },
  { name: '7 Jan', prospect: 2 },
  { name: '10 Jan', prospect: 5 },
  { name: '13 Jan', prospect: 12 },
]

const data2: DataRecord[] = [
  { name: '1 Jan', prospect: 150 },
  { name: '4 Jan', prospect: 200 },
  { name: '7 Jan', prospect: 300 },
  { name: '10 Jan', prospect: 400 },
  { name: '13 Jan', prospect: 500 },
]

const data3: DataRecord[] = [
  { name: '1 Jan', prospect: 100 },
  { name: '4 Jan', prospect: 120 },
  { name: '7 Jan', prospect: 140 },
  { name: '10 Jan', prospect: 160 },
  { name: '13 Jan', prospect: 180 },
]

// Debug des données dans le parent
console.log(' data1:', data1)
console.log('Données pour data2:', data2)
console.log('Données pour data3:', data3)
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <!-- GraphCard avec les données -->
    <graph-card title="Phase de découverte" subtitle="Prospect" :value="2056" :data="data1" />
    <graph-card
      title="Phase d'évaluation"
      subtitle="Leads qualifiés pour le marketing (MQL)"
      :value="1075"
      :data="data2"
    />
    <graph-card
      title="Phase d'achat"
      subtitle="Leads qualifiés pour la vente (SQL)"
      :value="2728"
      :data="data3"
    />
  </div>
</template>
