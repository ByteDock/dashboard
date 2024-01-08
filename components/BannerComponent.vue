<template>
  <div class="pl-4 pr-4">
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-20 rounded bg-light-foreground dark:bg-dark-foreground">
      <div class="grid grid-cols-1 p-3 h-fit text-center md:text-left">
        <h1 v-if="props.title" class="text-xl font-extrabold leading-none tracking-tight text-secondary-content dark:text-primary-content">
          {{ props.title }}
        </h1>
        <p v-if="props.text" class="font-normal mt-2 text-secondary-content dark:text-primary-content">
          {{ props.text }}
        </p>
        <ByteButton
          v-if="props.btn"
          class="hidden md:block mt-2 px-5 py-2.5"
          type="button"
          :data="props.btn"
        >
          {{ props.btn.text }}
        </ByteButton>
      </div>
      <component :is="props.svg" v-if="props.svg" class="w-11/12 md:w-52 h-fit m-auto md:mr-2 md:mb-2 p-2" />
      <ByteButton
        v-if="props.btn"
        class="block md:hidden w-11/12 m-auto mb-2 mt-2 px-5 py-2.5"
        type="button"
        :data="props.btn"
      >
        {{ props.btn.text }}
      </ByteButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string
  text?: string,
  svg?: string,
  btn?: {
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
