// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },

    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],

    modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/content'],
});