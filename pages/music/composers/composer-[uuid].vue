<script setup lang="ts">

let route = useRoute()
let id = route.params.uuid

const {composerDetails} = useFetchComposer()

const {data}:{data:ComposerData} = await fetchSanityComposer(id)
let composer = data.value[0]

let headline = pageHeadline()
let subHeadline = pageSubHeadline()
let pgIcon = pageIcon()
let back = pageBackRoute()
let crumbs = pageBreadCrumbs()

let breadCrumbs = [{name:'Home',path:'/'},{name:'Music',path:'/music'}, {name:'Composers',path:'/music/composers'},{name:composer.lastName,path:''}]

headline.value = composer.firstName+' '+composer.lastName
subHeadline.value = composer.excerpt
pgIcon.value = 'mdi-music-clef-treble'
back.value = '/music/composers'
crumbs.value = breadCrumbs



</script>

<template>
    <div class="top w-100 d-flex ga-5 align-start" style="height: 700px">
        <v-sheet class="w-66 bg-myBase" >
            <CarouselWithThumb  :composer-images="composer.images"/>
        </v-sheet>

        <div class="d-flex flex-column w-33 h-100">
            <ItemCompositionList :composition-count="composer.numberOfCompositions" :composition-list="composer.comp"/>
        </div>
    </div>

    <div class="bottom w-66 d-flex ga-5">
        <v-container class="w-75 mx-auto text-myColor px-5">
            <ItemComposerBio :composer-bio-data="composer.bio"/>
        </v-container>

    </div>
    <v-sheet class="rounded-xl pa-5">
        <ItemComposerTimeline :timeline="composerDetails.timelineEvents" />
    </v-sheet>

</template>

<style scoped>

</style>