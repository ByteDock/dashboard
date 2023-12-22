<script lang="ts" setup>
import { ref } from 'vue'

interface DropdownItem {
  name: string;
  to?: string;
}

interface Item extends DropdownItem {
  icon: string;
  dropdown?: boolean;
  items?: DropdownItem[];
}

interface Props {
  items: Item[];
}

const props = defineProps<Props>()

const dropdownStates = ref<{ [key: string]: boolean }>({})

props.items.forEach((item) => { dropdownStates.value[item.name] = false })

const toggleDropdown = (itemName: string) => {
  dropdownStates.value[itemName] = !dropdownStates.value[itemName]
}

const arrowIcons = {
  down: 'material-symbols:keyboard-arrow-down-rounded',
  up: 'material-symbols:keyboard-arrow-up-rounded'
}

const getIcon = (itemName: string) => {
  return dropdownStates.value[itemName] ? arrowIcons.up : arrowIcons.down
}
</script>

<template>
  <aside id="navigation-drawer" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <a class="flex items-center ps-2.5 mb-5">
        <img src="../assets/images/logo_circle.svg" class="h-6 me-3 sm:h-8" alt="ByteDock Logo">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">ByteDock</span>
      </a>
      <ul class="space-y-2 font-medium">
        <li
          v-for="item in items"
          :key="item.name"
        >
          <NuxtLink v-if="!item.dropdown" :to="item.to || '#'" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <Icon :name="item.icon" class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" />
            <span class="ms-3">{{ item.name }}</span>
          </NuxtLink>
          <div v-else>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" :aria-controls="`dropdown-${item.name}`" :data-collapse-toggle="`dropdown-${item.name}`" @click="toggleDropdown(item.name)">
              <Icon :name="item.icon" class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" />
              <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{{ item.name }}</span>
              <Icon :name="getIcon(item.name)" class="w-7 h-7" aria-hidden="true" />
            </button>
            <ul :id="`dropdown-${item.name}`" class="hidden py-2 space-y-2">
              <li
                v-for="_item in item.items"
                :key="_item.name"
              >
                <NuxtLink :to="item.to || '#'" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  {{ _item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>