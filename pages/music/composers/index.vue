<script setup lang="ts">

let query = composerFeaturedQuery().value
query = query.replace('&& editorPick == false', '')
let {data} = await sanityFetchLimited(query, 'Could not fetch composer')
let featuredPicks = data.value

query = query.replace(' && featured == true', '')
let {data:data2} = await sanityFetchLimited(query, 'Could not fetch composers')
let allComposers = data2.value

let headline = pageHeadline()
let subHeadline = pageSubHeadline()
let pgIcon = pageIcon()
let back = pageBackRoute()
let crumbs = pageBreadCrumbs()

let breadCrumbs = [{name:'Home',path:'/'},{name:'Music',path:'/music'}, {name:'Composers',path:'/music/composers'}]

headline.value = 'Composers Home'
subHeadline.value = 'View all classical composers their music and facts about their life.'
pgIcon.value = 'mdi-music-clef-treble'
back.value = '/music'
crumbs.value = breadCrumbs

let searching = ref(false)
let sortList = searchSortMusic()
let searchQuery = composerSearchQuery().value

</script>

<template>
    <div class="top w-100 d-flex flex-column ga-4 align-start">

        <v-card class="rounded-t-xl pa-2 w-100 bg-mySurface text-myColor" elevation="1" title="Featured Composers"></v-card>
        <ItemHomeGrid :featured-picks="featuredPicks" />

    </div>

    <SearchField
        label="Search composers"
        sort-default="name"
        :sort-list="sortList"
        @searching="searching = true"
        @search-close="searching = false"
        :search-query="searchQuery"
        :searching-multiple="'Persons'"
    />

    <div v-if="!searching" class="bottom w-100">
        <ItemImageGrid :masonry="false" :work="[]" :people="allComposers"/>
    </div>

    <div class="blogList d-flex flex-column rounded-xl">
        <ItemRelatedBlogs/>
    </div>
</template>

<style scoped>

</style>