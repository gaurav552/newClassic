<script setup lang="ts">

</script>

<template>
    <v-layout class="rounded rounded-md text-myColor" theme="myDarkTheme">

        <NavSmall/>
        <NavBig/>
        <NavFooter/>

        <v-main class="d-flex align-start justify-center bg-myBase" style="min-height: 300px;">
            <div class="d-flex flex-column px-10 pb-10 ga-10 w-100 justify-start" style="max-width: 1400px;">
                <v-sheet elevation="1" class="px-6 py-8 rounded-b-xl d-flex flex-column ga-3 align-start bg-mySurface elevation-2 titleSheet text-red-darken-4">
                    <div class="d-flex align-center ga-4">
                        <v-icon icon="mdi-music-clef-treble" color="red-darken-4" size="60"></v-icon>
                        <div class="d-flex flex-column text-red-darken-4">
                            <h2>Classical Music</h2>
                            <p class="text-subtitle-2">Dive into the world of classical music</p>
                        </div>
                    </div>
                </v-sheet>

                <slot/>

            </div>
        </v-main>
    </v-layout>
</template>

<style scoped>

</style>