// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import { md3 } from 'vuetify/blueprints'
import '@/assets/main.scss'
import { createVuetify, type ThemeDefinition } from 'vuetify'

const myLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        myBase: '#f8f8f8',
        mySurface: '#fff',
        myColor: '#3a3a3a'
    },
}
const myDarkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        myBase: '#18191b',
        mySurface: '#1e2022',
        myColor: '#777'
    },
}
export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // blueprint: md3,
        theme: {
            defaultTheme: 'myDarkTheme',
            themes: {
                myLightTheme,
                myDarkTheme,
            }
        },
        ssr: true
    })
    app.vueApp.use(vuetify)
})
