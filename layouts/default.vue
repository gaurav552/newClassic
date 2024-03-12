<script setup lang="ts">

let headline = pageHeadline()
let subHeadline = pageSubHeadline()
let pgIcon = pageIcon()
let back = pageBackRoute()



</script>

<template>
    <v-layout class="rounded rounded-md text-myColor" theme="myDarkTheme">

        <NavSmall/>
        <NavBig/>
        <NavFooter/>

        <v-main class="d-flex align-start justify-center bg-myBase" style="min-height: 300px;">
            <div class="d-flex flex-column px-10 pb-10 ga-10 w-100 justify-start" style="max-width: 1400px;">
                <v-sheet elevation="1" class="px-6 py-8 rounded-b-xl d-flex flex-column ga-3 align-start bg-mySurface elevation-2 titleSheet text-red-darken-4">
                    <div class="d-flex align-center ga-4 w-100" style="z-index: 1">
                        <v-icon :icon="pgIcon ? pgIcon : 'mdi-music-clef-treble'" color="red-darken-4" size="60"></v-icon>
                        <div class="d-flex flex-column text-red-darken-4 w-75">
                            <h2>{{ headline ? headline : 'Classical Music' }}</h2>
                            <p class="text-subtitle-2">{{ subHeadline ? subHeadline : 'Dive into the world of classical music' }}</p>
                        </div>
                        <div v-if="back" class="d-flex flex-column ga-1 w-25 align-end">
                            <v-btn prepend-icon="mdi-arrow-left-thin" variant="text" hover link :to="back ? back : '/music'">
                                Back
                            </v-btn>
                            <NavBreadCrumbs/>
                        </div>
                    </div>
                </v-sheet>

                <slot/>

            </div>
        </v-main>
    </v-layout>
</template>

<style scoped>
.titleSheet{
    background: transparent;
    position: relative;
}

.titleSheet::after{
    content: '';
    background: currentColor;
    opacity: var(--v-activated-opacity);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    border: inherit;
    border-radius: inherit;
    z-index: 0;
}

</style>