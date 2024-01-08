<template>
  <button
    class="block text-secondary-content bg-secondary hover:bg-secondary-light focus:ring-4 focus:outline-none focus:ring-secondary-dark font-medium rounded-lg text-sm text-center dark:text-primary-content dark:bg-primary dark:hover:bg-primary-light dark:focus:ring-primary-dark"
    type="button"
    :data-drawer-target="props.data.drawerTarget ? props.data.id : undefined"
    :data-drawer-toggle="props.data.drawerToggle ? props.data.id : undefined"
    :aria-controls="props.data.ariaControls ? props.data.id : undefined"
    :data-modal-target="props.data.modalTarget ? props.data.id : undefined"
    :data-modal-toggle="props.data.modalToggle ? props.data.id : undefined"
    @click="props.data.fnc"
  >
    {{ props.data.text }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: {
    text: string,
    fnc?: Function,
    id?: string,
    drawerTarget?: boolean,
    drawerToggle?: boolean,
    ariaControls?: boolean,
    modalTarget?: boolean,
    modalToggle?: boolean
  }
}>()
</script>
