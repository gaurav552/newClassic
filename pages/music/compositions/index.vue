<script setup lang="ts">

import CompositionGenreList from "~/components/Item/CompositionGenreList.vue";

let headline = pageHeadline()
let subHeadline = pageSubHeadline()
let pgIcon = pageIcon()
let back = pageBackRoute()
let crumbs = pageBreadCrumbs()

let breadCrumbs = [{name:'Home',path:'/'},{name:'Music',path:'/music'}, {name:'Composition',path:'/music/compositions'}]

headline.value = 'Compositions Home'
subHeadline.value = 'Browse all classical compositions and interesting facts about them. And the people who made them and performed them.'
pgIcon.value = 'mdi-music-clef-treble'
back.value = '/music'
crumbs.value = breadCrumbs;

let query = compositionFeaturedQuery().value
query = query.replace('&& editorPick == false', '')
let {data} = await sanityFetchLimited(query, 'Could not fetch Compositions')
let featuredPicks = data.value

let searching = ref(false)
let sortList = searchSortMusic()
let searchQuery = compositionSearchQuery().value

let {data:grouped} = await sanityFetchLimited(groupedMusic().value, 'Could not fetch grouped music')
let composerGenre = grouped.value
let tab = ref(Array(composerGenre.length).fill(''))
let {removeDuplicate} = useUtilities()
composerGenre.forEach((composer, i) => {
    composerGenre[i].types = removeDuplicate(composer.types)
})


</script>

<template>
    <v-card width="100%" height="550px" class="rounded-xl">
        <AudioPlayerFull />
    </v-card>

    <div class="d-flex flex-column ga-0 elevation-2 rounded-xl" style="overflow:hidden;">
        <v-card class="pa-3 w-100 bg-mySurface text-myColor" elevation="0">
            <v-card-text class="text-h6 px-4 py-2">Featured Compositions</v-card-text>
        </v-card>
        <v-sheet class="bg-mySurface" style="overflow:hidden;">
            <CarouselCompositionsThumb :compositions="featuredPicks" />
        </v-sheet>
    </div>
    <SearchField
        label="Search composers"
        sort-default="name"
        :sort-list="sortList"
        @searching="searching = true"
        @search-close="searching = false"
        :search-query="searchQuery"
        :searching-multiple="'Works'"
    />

    <div v-if="!searching" class="bottom w-100">
        <CompositionGenreList :composers="composerGenre"/>
    </div>
</template>

<style scoped>

</style>