import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@root': path.resolve(__dirname, './'),
    '@shared': path.resolve(__dirname, 'src/shared'),
    '@widgets': path.resolve(__dirname, 'src/widgets'),
    '@pages': path.resolve(__dirname, 'src/pages'),
  },
});
