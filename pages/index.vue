<template>
  <div class="pl-4 pr-4 sm:ml-64 min-h-screen items-stretch">
    <BannerComponent
      title="Mission Control"
      text="Your dashboard of destiny. Flip switches, press buttons, and watch the magic happen!"
      :svg="SvgsServerStatus"
    />
  </div>
</template>

<script setup lang="ts">
import { SvgsServerStatus } from '#build/components'

definePageMeta({
  name: 'index'
})
</script>
