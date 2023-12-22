<template>
  <div>
    <button data-drawer-target="navigation-drawer" data-drawer-toggle="navigation-drawer" aria-controls="navigation-drawer" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
      <span class="sr-only">Open sidebar</span>
      <Icon class="w-6 h-6" aria-hidden="true" fill="currentColor" name="material-symbols:dehaze-rounded" />
    </button>

    <NavigationDrawer :items="items" />

    <slot />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      items: [
        {
          name: 'Dashboard',
          icon: 'material-symbols:space-dashboard',
          to: '/'
        },
        {
          name: 'Infrastructure',
          icon: 'ph:computer-tower-fill',
          dropdown: true,
          items: [
            {
              name: 'Daemons'
            },
            {
              name: 'Services'
            },
            {
              name: 'Projects'
            },
            {
              name: 'Networks'
            }
          ]
        },
        {
          name: 'CRUD',
          icon: 'material-symbols:unknown-document',
          dropdown: true,
          items: [
            {
              name: 'Roles'
            },
            {
              name: 'Users'
            }
          ]
        },
        {
          name: 'Security',
          icon: 'material-symbols:visibility-lock',
          dropdown: true,
          items: [
            {
              name: 'Audit Logs'
            },
            {
              name: 'Settings'
            }
          ]
        }
      ]
    }
  }
}
</script>
