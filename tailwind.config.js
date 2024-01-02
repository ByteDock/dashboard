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
  extend: {
    colors: {
      primary: '#011d35',
      'primary-content': '#3aa2fb',
      'primary-light': '#023867',
      'primary-dark': '#000203',

      secondary: '#190135',
      'secondary-content': '#933afb',
      'secondary-light': '#310267',
      'secondary-dark': '#010003',

      dark: {
        foreground: '#192734',
        background: '#111a22',
        border: '#294156',
        copy: '#fafbfd',
        'copy-light': '#cbdae6',
        'copy-lighter': '#87a8c5'
      },

      light: {
        foreground: '#fafbfd',
        background: '#eaf0f5',
        border: '#d4e0ea',
        copy: '#192734',
        'copy-light': '#42698a',
        'copy-lighter': '#648fb4'
      },

      success: '#013501',
      warning: '#353501',
      error: '#350101',
      'success-content': '#3afb3a',
      'warning-content': '#fbfb3a',
      'error-content': '#fb3a3a'
    }
  }
}
export const plugins = [require('flowbite/plugin')]
export const darkMode = 'class'
