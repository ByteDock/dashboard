// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  components: true,
  postcss: {
    plugins: {
      tailwindcss: {
        plugin: []
      },
      autoprefixer: {}
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    'nuxt-icon',
    '@nuxtjs/device',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    'nuxt3-class-component'
  ],
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    storageKey: 'nuxt-color-mode'
  },
  plugins: []
})
