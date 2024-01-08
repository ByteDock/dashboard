<template>
  <div class="pl-4 pr-4">
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-40 rounded bg-light-foreground dark:bg-dark-foreground">
      <div class="grid grid-cols-1 p-3 h-fit md:w-7/12 text-center md:text-left">
        <h1 v-if="props.title" class="text-xl font-extrabold leading-none tracking-tight text-secondary-content dark:text-primary-content">
          {{ props.title }}
        </h1>
        <p v-if="props.text" class="font-normal text-secondary-content dark:text-primary-content">
          {{ props.text }}
        </p>
      </div>
      <component :is="props.svg" v-if="props.svg" class="w-11/12 md:w-52 h-fit m-auto md:mr-2 mb-2 p-2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

const props = defineProps<{
  title?: string
  text?: string,
  svg?: string | Function | Object | Component
}>()
</script>
