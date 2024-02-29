<script setup lang="ts">
import {useTheme} from "vuetify";

const theme = useTheme()
const route = useRouter()
function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'myLightTheme' : 'myDarkTheme'
}

let {paths} = useFetchNav()

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

            <div class="d-flex justify-center flex-column h-100">
                <v-list density="comfortable" lines="two">

                    <v-list-item v-for="path in paths" :to="path.Path" :prepend-icon="path.Icon" link :title="path.Name" class="mb-3"></v-list-item>

                    <v-divider></v-divider>
                    <v-list-item prepend-icon="mdi-format-paint" link title="Change theme"
                                 class="mt-3"></v-list-item>
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
</style>