<template>
  <div>
    <button
      data-drawer-target="navigation-drawer"
      data-drawer-toggle="navigation-drawer"
      aria-controls="navigation-drawer"
      type="button"
      class="inline-flex items-center p-1 mt-1 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span class="sr-only">Open sidebar</span>
      <Icon class="w-5 h-5" aria-hidden="true" fill="currentColor" name="material-symbols:dehaze-rounded" />
    </button>
  </div>
</template>

<script lang="ts">
import { initDrawers } from 'flowbite'
import { Vue, Component, toNative } from 'vue-facing-decorator'

@Component
class NavigationComponent extends Vue {
  mounted () {
    initDrawers()
  }
}

export default toNative(NavigationComponent)
</script>
