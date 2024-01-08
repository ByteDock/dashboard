<template>
  <aside
    id="navigation-drawer"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-light-foreground dark:bg-dark-foreground">
      <a class="flex items-center ps-2.5 mb-5">
        <SvgsLogoCircle name="logo_circle" class="h-9 me-2 w-9 sm:w-9 sm:h-9 fill-secondary-content dark:fill-primary-content" />
        <span class="self-center text-xl font-semibold whitespace-nowrap text-secondary-content dark:text-primary-content">ByteDock</span>
      </a>
      <ul class="space-y-2 font-medium">
        <li
          v-for="item in items"
          :key="item.name"
        >
          <NuxtLink v-if="!item.dropdown" :to="item.to || '#'" class="flex items-center p-2 text-secondary-content rounded-lg dark:text-primary-content hover:bg-secondary-light dark:hover:bg-primary-light group">
            <Icon :name="item.icon" class="w-5 h-5 text-secondary-content transition duration-75 dark:text-primary-content group-hover:text-secondary-content dark:group-hover:text-primary-content" aria-hidden="true" fill="currentColor" />
            <span class="ms-3">{{ item.name }}</span>
          </NuxtLink>
          <div v-else>
            <button type="button" class="flex items-center w-full p-2 text-base text-secondary-content transition duration-75 rounded-lg group hover:bg-secondary-light dark:text-primary-content dark:hover:bg-primary-light group" :aria-controls="`dropdown-${item.name}`" :data-collapse-toggle="`dropdown-${item.name}`" @click="toggleDropdown(item.name)">
              <Icon :name="item.icon" class="w-5 h-5 text-secondary-content transition duration-75 dark:text-primary-content group-hover:text-secondary-content dark:group-hover:text-primary-content" aria-hidden="true" fill="currentColor" />
              <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{{ item.name }}</span>
              <Icon :name="getIcon(item.name)" class="w-7 h-7" aria-hidden="true" />
            </button>
            <ul :id="`dropdown-${item.name}`" class="hidden transition-transform py-2 space-y-2">
              <li
                v-for="_item in item.items"
                :key="_item.name"
              >
                <NuxtLink :to="_item.to || '#'" class="flex items-center w-full p-2 text-secondary-content transition duration-75 rounded-lg pl-11 group hover:bg-secondary-light dark:text-primary-content dark:hover:bg-primary-light">
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

<script lang="ts">
import { Vue, Prop, Component, toNative } from 'vue-facing-decorator'

interface DropdownItem {
  name: string;
  to?: string;
}

interface Item extends DropdownItem {
  icon: string;
  dropdown?: boolean;
  items?: DropdownItem[];
}

@Component
class NavigationDrawer extends Vue {
  @Prop({ required: true, type: Array }) readonly items!: Item[]

  dropdownStates: {[key: string]: boolean} = {}

  arrowIcons = {
    down: 'material-symbols:keyboard-arrow-down-rounded',
    up: 'material-symbols:keyboard-arrow-up-rounded'
  }

  setup () {
    this.initializeDropdownStates()
  }

  mounted () {
  }

  initializeDropdownStates () {
    this.items.forEach((item) => {
      this.dropdownStates[item.name] = false
    })
  }

  toggleDropdown (itemName: string) {
    this.dropdownStates[itemName] = !this.dropdownStates[itemName]
  }

  getIcon (itemName: string) {
    return this.dropdownStates[itemName] ? this.arrowIcons.up : this.arrowIcons.down
  }
}

export default toNative(NavigationDrawer)
</script>
