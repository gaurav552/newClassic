<script setup lang="ts">

let {data:editorPicks} = await sanityFetchLimited(musicEditorPicksQuery().value, 'Unable to fetch editor Picks')
let {data:featuredPicks} = await sanityFetchLimited(musicFeaturedQuery().value, 'Unable to fetch featured Picks')

let headline = pageHeadline()
let subHeadline = pageSubHeadline()
let pgIcon = pageIcon()
let back = pageBackRoute()
let crumbs = pageBreadCrumbs()

let breadCrumbs = [{name:'Home',path:'/'},{name:'Music',path:'/music'}]

headline.value = 'Classical Music'
subHeadline.value = 'Dive into the world of classical music, composers, and musicians.'
pgIcon.value = 'mdi-music-clef-treble'
back.value = '/'
crumbs.value = breadCrumbs
let searching = ref(false)

let sortList = searchSortMusic()

</script>

<template>
    <div class="top w-100" style="height: 30%">
        <v-card class="rounded-t-xl pa-2 w-100 mb-3 bg-mySurface text-myColor" elevation="1" title="Editor picks"></v-card>
        <v-sheet class="bg-myBase rounded-b-xl topCarousel elevation-2 overflow-hidden">
            <CarouselFull :people="editorPicks.composers" :works="editorPicks.compositions" people-name="Composer" work-name="Composition" />
        </v-sheet>
    </div>

    <SearchField label="Search composers and compositions" sort-default="name" :sort-list="sortList" @searching="searching = true" @search-close="searching = false" />

    <div v-if="!searching" class="bottom w-100">
        <ItemImageGrid :people="featuredPicks.composers" :work="featuredPicks.compositions" :masonry="true"/>
    </div>

    <div class="blogList d-flex flex-column rounded-xl">
        <ItemRelatedBlogs/>
    </div>

</template>

<style scoped>

.thumb .v-img{
    max-height: 100px;
}
</style>