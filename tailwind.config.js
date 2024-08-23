/** @type {import('tailwindcss').Config} */
export default {
  content:
  [
    './src/**/*.{html,js,jsx,svelte,ts,tsx}'
  ],
safelist:
[
  {
    pattern: /bg.*/
  },
  {
    pattern: /text.*/
  }

],
theme: {
fontFamily: {
  sans: ['var( --theme-font-family)'],
},
colors: {
  primary:
  {
    DEFAULT:'rgb(var(--color-primary) / <alpha-value>)',
    text:'rgb(var(--color-primary-text) / <alpha-value>)'
},
secondary: 
{
  DEFAULT:'rgb(var(--color-secondary) / <alpha-value>)',
  'text':'rgb(var(--color-secondary-text) / <alpha-value>)'
},
tertiary:
{ 
  DEFAULT:'rgb(var(--color-tertiary) / <alpha-value>)',
  'text': 'rgb(var(--color-tertiary-text) / <alpha-value>)'
},
'success': 
{
  DEFAULT:'rgb(var(--color-success) / <alpha-value>)',
  'text': 'rgb(var (--color-success-text) / <alpha - value>)',
},
'warning': 
{
  DEFAULT:'rgb(var(--color-warning) / <alpha-value>)',
  'text': 'rgb(var(--color-warning-text) / <alpha-value>)',
},
error:
{
  DEFAULT:'rgb(var(--color-error) / <alpha-value>)',
  'text':'rgb(var(--color-error-text) / <alpha-value>)',
},
'surface':
{
  DEFAULT:'rgb(var(--color-surface) / <alpha-value>)',
  'text': 'rgb(var(--color-surface-text) / <alpha-value>)'
}
},
    extend: {},
  },
  plugins: [],
}

