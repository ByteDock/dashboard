<template>
  <div class="pl-4 pr-4 sm:ml-64 min-h-screen items-stretch">
    <BannerComponent
      title="Project Playroom"
      text="A playroom for projects to tinker, doodle, and embark on creative adventures. Bring your project toys for some coding fun!"
      svg="UndrawChildren"
      :btn="{
        text: 'Create a new project'
      }"
    />
  </div>
</template>

<script>
definePageMeta({
  name: 'InfrastructureProjects'
})
</script>
