<template>
  <div class="pl-4 pr-4 sm:ml-64 min-h-screen items-stretch">
    <BannerComponent
      title="Daemons Playground"
      text="Where mischievous daemons gather to discuss their next digital escapades. Keep an eye on these mischievous codes!"
      svg="UndrawRobotics"
      :btn="{
        text: 'Create a new daemon'
      }"
    />
  </div>
</template>

<script>
definePageMeta({
  name: 'InfrastructureDaemons'
})
</script>
