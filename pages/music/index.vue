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
let searchResult =ref<object[]>([])

let sortList = searchSortMusic()

const handleSearch = (data:Array<object>) => {
    searching.value = true
    searchResult.value = data
}

const handleSearchClose = () => {
    searchResult.value = []
    searching.value = false
}

</script>

<template>
    <div class="top w-100" style="height: 30%">
        <v-card class="rounded-t-xl pa-2 w-100 mb-3 bg-mySurface text-myColor" elevation="1" title="Editor picks"></v-card>
        <v-sheet class="bg-myBase rounded-xl">
            <CarouselFull :people="editorPicks.composers" :works="editorPicks.compositions" people-name="Composer" work-name="Composition" />
        </v-sheet>
    </div>

    <div class="mid">
        <SearchField label="Search composers and compositions" sort-default="composerName" :sort-list="sortList" @search-results="handleSearch" @search-close="handleSearchClose" />
    </div>

    <div class="bottom w-100">
        <ItemImageGrid v-if="!searching" :people="featuredPicks.composers" :work="featuredPicks.compositions" :masonry="true"/>
        <template v-else>
            <ItemImageGrid v-if="searchResult.composers.length > 0 || searchResult.compositions.length > 0" :people="searchResult.composers" :work="searchResult.compositions" :masonry="true"></ItemImageGrid>
            <v-alert variant="tonal" color="error" v-else text="No matching result found for the search term"></v-alert>
        </template>
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