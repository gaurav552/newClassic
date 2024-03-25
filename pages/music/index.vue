<script setup lang="ts">

let {data:favoriteComposers} = await sanityFetchLimited(composerFavoriteQuery().value, 'Unable to fetch favorite composers')
let {data:editorPicks} = await sanityFetchLimited(curatedMusic().value, 'Unable to fetch Editor Picks')

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
let searchQuery = musicSearchQuery().value
</script>

<template>
    <div class="top w-100 rounded-xl overflow-hidden elevation-2" style="height: 30%">
        <v-card class="rounded-t-xl pa-2 w-100 bg-mySurface text-myColor elevation-0" title="Top Favorite Composers"></v-card>
        <v-sheet class="bg-myBase topCarousel">
            <CarouselFull :people="favoriteComposers" :works="[]" people-name="Composer" work-name="Composition" />
        </v-sheet>
    </div>

    <SearchField
        label="Search composers and compositions"
        sort-default="name"
        :sort-list="sortList"
        @searching="searching = true"
        @search-close="searching = false"
        :search-query="searchQuery"
    />

    <div v-if="!searching">
        <v-card class="pa-2 w-100 mb-3 bg-mySurface rounded-t-xl text-myColor" title="Editor Picks"></v-card>
        <div class="bottom w-100 d-flex flex-column ga-7">
            <CuratedContainer :class="ep === editorPicks[0] ? 'rounded-b-xl' : 'rounded-xl'" v-for="ep in editorPicks" :editor-picks="ep"/>
        </div>
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