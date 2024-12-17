<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <template v-if="Component">
      <KeepAlive>
        <Suspense>
          <component :is="Component" :key="route.path"></component>
        </Suspense>
      </KeepAlive>
    </template>
  </RouterView>
</template>
