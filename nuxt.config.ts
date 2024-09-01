// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  modules: ['@nuxt/content'],

  routeRules: {
    '/': { prerender: true }
  },

  content: {
    // ... options
  },
  
  compatibilityDate: '2024-08-31'
})
