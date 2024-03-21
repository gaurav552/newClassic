<script setup lang="ts">

let headline = pageHeadline()
let subHeadline = pageSubHeadline()
let pgIcon = pageIcon()
let back = pageBackRoute()

watch(()=>headline.value, (newVal) =>{
    useHead({
        title:headline.value
    })
})

</script>

<template>
    <v-layout class="rounded rounded-md text-myColor" theme="myDarkTheme">

        <NavSmall/>
        <NavBig/>
        <NavFooter/>

        <v-main class="d-flex align-start justify-center bg-myBase" style="min-height: 300px;">
            <div class="d-flex flex-column px-10 pb-10 ga-10 w-100 justify-start v-container" style="max-width: 1400px;padding-top: 165px">
                <v-sheet elevation="1" class="px-6 py-8 rounded-b-xl d-flex flex-column ga-3 align-start elevation-2 titleSheet text-myColor">
                    <div class="d-flex align-center ga-4 w-100" style="z-index: 1">
                        <v-icon :icon="pgIcon ? pgIcon : 'mdi-music-clef-treble'" color="red-darken-4" size="60"></v-icon>
                        <div class="d-flex flex-column text-myColor w-66">
                            <h2>{{ headline ? headline : 'Classical Music' }}</h2>
                            <p class="text-subtitle-2">{{ subHeadline ? subHeadline : 'Dive into the world of classical music' }}</p>
                        </div>
                        <div v-if="back" class="d-flex flex-column ga-1 w-33 align-end">
                            <v-btn prepend-icon="mdi-arrow-left-thin" variant="text" hover link :to="back ? back : '/music'">
                                Back
                            </v-btn>
                            <NavBreadCrumbs/>
                        </div>
                    </div>
                </v-sheet>

                <slot></slot>

            </div>
        </v-main>
    </v-layout>
</template>

<style scoped>
.v-container{
    position: relative;
}
.titleSheet{
    position: fixed;
    top:0;
    width: calc(1400px - 80px);
    z-index: 99999;
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    box-shadow: inset 0 0 0 200px rgba(255,255,255,0.08);
    background-color: var(--v-surface2);
}
</style>