<template>
  <div class="pl-4 pr-4 sm:ml-64 min-h-screen items-stretch">
    <BannerComponent
      title="Mission Control"
      text="Your dashboard of destiny. Flip switches, press buttons, and watch the magic happen!"
      svg="ServerStatus"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'index'
})
</script>
