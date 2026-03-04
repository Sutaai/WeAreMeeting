import Lara from '@primeuix/themes/lara';
import { definePreset } from '@primeuix/themes';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      meetingIn: 0
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@unocss/nuxt',
    '@primevue/nuxt-module'
  ],

  fonts: {
    priority: ['fontshare', 'bunny', 'google'],
  },

  primevue: {
    options: {
      theme: {
        preset: Lara,
      }
    }
  }
})
