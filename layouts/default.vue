<template>
  <div>
    <NavigationDrawer :items="items" />

    <NavbarBreadcrumb />

    <slot />
  </div>
</template>

<script setup lang="ts">
const items = [
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
        name: 'Daemons',
        to: '/infrastructure/daemons'
      },
      {
        name: 'Services',
        to: '/infrastructure/services'
      },
      {
        name: 'Projects',
        to: '/infrastructure/projects'
      },
      {
        name: 'Networks',
        to: '/infrastructure/networks'
      }
    ]
  },
  {
    name: 'CRUD',
    icon: 'material-symbols:unknown-document',
    dropdown: true,
    items: [
      {
        name: 'Roles',
        to: '/crud/roles'
      },
      {
        name: 'Users',
        to: '/crud/users'
      }
    ]
  },
  {
    name: 'Security',
    icon: 'material-symbols:visibility-lock',
    dropdown: true,
    items: [
      {
        name: 'Audit Logs',
        to: '/security/audit-logs'
      },
      {
        name: 'Settings',
        to: '/security/settings'
      }
    ]
  }
]

definePageMeta({
  name: 'DefaultLayout'
})
</script>
