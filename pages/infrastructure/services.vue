<template>
  <div class="pl-4 pr-4 sm:ml-64 min-h-screen items-stretch">
    <BannerComponent
      title="Service Circus"
      text="Step right up to the service circus! Watch them juggle tasks, perform acrobatics, and occasionally pull a digital rabbit out of a hat!"
      svg="UndrawContainerShip"
      :btn="{
        text: 'Create a new service'
      }"
    />
  </div>
</template>

<script>
definePageMeta({
  name: 'InfrastructureServices'
})
</script>
