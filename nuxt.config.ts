// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        'vue3-carousel-nuxt','@nuxtjs/sanity',
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({autoImport: true}))
            })
        },
    ],
    carousel: {
        prefix: 'GG'
    },
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    sanity: {
        projectId: '21zn3zr3',
        useCdn: true
    }
})