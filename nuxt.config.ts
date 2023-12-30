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
    'nuxt3-class-component',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  },
  plugins: []
})
