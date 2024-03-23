<script setup lang="ts">
import {useTheme} from "vuetify";

const theme = useTheme()
const route = useRouter()
function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'myLightTheme' : 'myDarkTheme'
    isDarkMode().value = theme.global.current.value.dark
}

const paths = ref([])

try {
    const {paths:nav} = useFetchNav()
    paths.value = nav
} catch (e) {

}

const path = ref(route.currentRoute.value.fullPath);

watch( () => route.currentRoute.value.fullPath, (newVal, oldVal) => {
        const {paths:nav} = useFetchNav()
        paths.value = nav
    }
);

function pathHasNav(path) {
    let fullPath = route.currentRoute.value.fullPath
    let subHome = ['/blogs', '/about', '/contact', '/support']
    if(fullPath.split('/').length > 2){ // these represent path that are in any nav object other than home
        return fullPath.includes(path) && path.length > 1
    }

    if(subHome.indexOf(fullPath) != -1){ // these path lies in home object, whose path is '/' i.e. length 1
        return fullPath.includes(path) && path.length == 1
    }
}

</script>

<template>
    <v-navigation-drawer
        permanent="permanent"
        rail="rail"
        class="bg-mySurface border-0"
    >

        <div class="d-flex justify-start flex-column h-screen">
            <v-list density="compact">
                <v-list-item prepend-icon="mdi-account" title="CLASSIC"></v-list-item>
            </v-list>

            <v-divider></v-divider>

            <div class="d-flex justify-center flex-column h-100 naver">
                <v-list density="comfortable" lines="two">
                    <v-list-item
                        v-for="path in paths"
                        :to="path.Path"
                        :prepend-icon="path.Icon"
                        link
                        :title="path.Name"
                        :active="pathHasNav(path.Path)"
                        active-class="custom-active-class"
                        class="mb-3 text-myColor"></v-list-item>
                </v-list>
            </div>

            <v-divider></v-divider>

            <v-list density="compact">
                <v-list-item
                    :prepend-icon="!theme.current.value.dark ? 'mdi-lightbulb-on' : 'mdi-lightbulb-outline' "
                    @click="toggleTheme" title="Dark Mode"></v-list-item>
            </v-list>
        </div>

    </v-navigation-drawer>
</template>

<style scoped>

.v-navigation-drawer{
    box-shadow: var(--v-mySideBarElevation)!important;
}
.naver .v-list-item{
    --v-activated-opacity: 0;
    --v-hover-opacity: 0;
    position: relative;
    border-left: 3px solid transparent;
    transition: border-left 0.2s ease-in-out, color 0.2s ease-in-out;
}
.naver .v-list-item:hover{
    border-left-color: var(--v-theme-myColorDeeper)!important;
    border-left-style: solid;
    border-left-width: 3px;
}
.naver .custom-active-class{
    color: red!important;
    border-left: 3px solid currentColor;
}
.naver .v-list-item:not(.custom-active-class):hover{
    color: var(--v-theme-myColorDeeperOP)!important;
}
</style>