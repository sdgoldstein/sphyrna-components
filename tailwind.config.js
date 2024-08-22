/** @type {import('tailwindcss').Config} */
export default {
  content:
  [
    './src/**/*.{html,js,svelte,ts}'
  ],

theme: {
fontFamily: {
  sans: ['var( --theme-font-family)'],
},
colors: {
  'primary': 'rgb(var(--color-primary) / <alpha-value>)',
  'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
  'tertiary':'rgb(var(--color-tertiary) / <alpha-value>)',
  'success': 'rgb(var(--color-success) / <alpha-value>)',
  'warning': 'rgb(var(--color-warning) / <alpha-value>)',
  'error': 'rgb(var(--color-error) / <alpha-value>)',
  'surface': 'rgb(var(--color-surface) / <alpha-value>)',
  'primaryText': 'rgb(var(--color-primary-text) / <alpha-value>)',
  'secondaryText': 'rgb(var(--color-secondary-text) / <alpha-value>)',
  'tertiaryText': 'rgb(var(--color-tertiary-text) / <alpha-value>)',
  'successText': 'rgb(var (--color-success-text) / <alpha - value>)',
  'warningText': 'rgb(var(--color-warning-text) / <alpha-value>)',
  'errorText': 'rgb(var(--color-error-text) / <alpha-value>)',
  'surfaceText': 'rgb(var(--color-surface-text) / <alpha-value>)'
},
    extend: {},
  },
  plugins: [],
}

