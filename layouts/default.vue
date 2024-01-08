<template>
  <div>
    <NavigationDrawer :items="items" />

    <NavbarBreadcrumb />

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
              name: 'Daemons',
              to: '/infrastructure/daemons'
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
