/** @type {import('tailwindcss').Config} */
export const content = [
  './components/**/*.{js,vue,ts}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './plugins/**/*.{js,ts}',
  './app.vue',
  './error.vue',
  './node_modules/flowbite/**/*.{js,ts}'
]
export const theme = {
  extend: {}
}
export const plugins = [require('flowbite/plugin')]
export const darkMode = 'class'
