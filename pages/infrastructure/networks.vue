<template>
  <div class="pl-4 pr-4 sm:ml-64 min-h-screen items-stretch">
    <BannerComponent
      title="Network Nook"
      text="A cozy corner for networks to gossip about packets, share memes, and connect with each other. Don't interrupt their digital chit-chat!"
      svg="UndrawContainerShip"
      :btn="{
        text: 'Create a new network'
      }"
    />
  </div>
</template>

<script>
definePageMeta({
  name: 'InfrastructureNetworks'
})
</script>
