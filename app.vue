<script lang="ts" setup>
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue'

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
