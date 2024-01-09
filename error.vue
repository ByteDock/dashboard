<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout class="bg-light-background dark:bg-dark-background">
    <div class="pl-4 pr-4 sm:ml-64 min-h-screen items-stretch">
      <div v-if="error" class="text-center md:mt-20">
        <UndrawUnderConstruction class="w-60 h-fit m-auto" />
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-secondary-content dark:text-primary-content sm:text-5xl">
          {{ error.statusCode === 404 ? '[404] Page not found' : `[${error.statusCode}] ${error.statusMessage}` }}
        </h1>
        <p class="mt-4 text-base leading-7 text-secondary-content dark:text-primary-content">
          {{ error.statusCode === 404 ? `Sorry, we couldn't find the page you're looking for.` : error.description }}
        </p>
        <div class="mt-4 flex items-center justify-center gap-x-6">
          <ByteButton
            class="px-3.5 py-2.5"
            :data="{
              text: 'Go back',
              fnc: handleError
            }"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
