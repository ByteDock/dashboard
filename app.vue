<script lang="ts" setup>
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue'

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout class="bg-light-background dark:bg-dark-background">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
