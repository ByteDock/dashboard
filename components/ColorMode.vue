<script setup lang="ts">
const colorMode = useColorMode()

const toggleMode = () => {
  if (colorMode.value === 'light') {
    colorMode.preference = 'dark'
  } else if (colorMode.value === 'dark') {
    colorMode.preference = 'light'
  }
}

const icon = ref('material-symbols:clear-day-rounded')

const fnc = (newValue: string) => {
  icon.value = newValue === 'light'
    ? 'material-symbols:clear-day-rounded'
    : 'material-symbols:dark-mode'
}

watch(() => colorMode.value, fnc)

setTimeout(() => {
  fnc(colorMode.value)
}, 100)

</script>

<template>
  <button
    type="button"
    class="items-center p-1 mr-3 ms-3 text-sm text-secondary-content rounded-lg hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-secondary-dark dark:text-primary-content dark:hover:bg-primary-light dark:focus:ring-primary-dark"
    @click="toggleMode"
  >
    <span class="sr-only">Toggle color mode</span>
    <Icon class="w-5 h-5" aria-hidden="true" fill="currentColor" :name="icon" />
  </button>
</template>
