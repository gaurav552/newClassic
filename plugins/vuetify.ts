// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/main.scss'
import { createVuetify, type ThemeDefinition } from 'vuetify'

const myLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        myBase: '#f8f8f8',
        mySurface: '#fff',
        myColor: '#333',
        myColorDeeper: '#888',
        myColorDeeperOP: '#000',
        myShadowColor: '#bd2222'
    },
    variables: {
        myCardElevation: '0px 6px 10px 0px hsla(0,0%,0%,0.14), 0px 1px 18px 0px hsla(0,0%,0%,0.12), 0px 3px 5px -1px hsla(0,0%,0%,0.2)',
        mySideBarElevation: '0 3px 30px rgba(0,0,0,.1), 0 3px 20px rgba(0,0,0,.1)',
        lighterElevation: '0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)',
        'medium-emphasis-opacity': 0.9,
        surface2: 'rgba(255, 255, 255, 0.75)',
        containerShadow:'-5px 0 35px 10px rgba(100, 100, 100, 0.4);',
        transparentBG1: 'rgba(250, 250, 250, 0.5)'
    }
}
const myDarkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        myBase: '#18191b',
        mySurface: '#1e2022',
        myColor: '#aaa',
        myColorDeeper: '#bbb',
        myColorDeeperOP: '#fff',
        myShadowColor: '#3f0b0b'
    },
    variables: {
        myCardElevation: '0px 8px 10px 1px hsla(0,0%,0%,0.14), 0px 3px 14px 2px hsla(0,0%,0%,0.12), 0px 5px 5px -3px hsla(0,0%,0%,0.2)',
        mySideBarElevation: '0 3px 30px rgba(0,0,0,.3), 0 3px 24px rgba(0,0,0,.3)',
        lighterElevation: '0 1px 15px rgba(0,0,0,.1), 0 1px 8px rgba(0,0,0,.1)',
        'medium-emphasis-opacity': 0.9,
        surface2: 'rgba(30, 32, 34, 0.75)',
        containerShadow:'-5px 0 35px 10px rgba(0, 0, 0, 0.45);',
        transparentBG1: 'rgba(50, 50, 50, 0.5)',
    }
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
