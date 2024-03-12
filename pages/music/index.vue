<script setup lang="ts">

let {data:sanityComposers} = await fetchSanityComposers()
let composers = sanityComposers.value

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

</script>

<template>
    <div class="top w-100" style="height: 30%">
        <v-card color="red-darken-4" variant="tonal" class="rounded-t-xl pa-2 w-100 mb-4" elevation="1" title="Editor picks"></v-card>
        <v-sheet class="bg-myBase rounded">
            <CarouselFull/>
        </v-sheet>
    </div>

    <div class="mid">
        <SearchField/>
    </div>

    <div class="bottom w-100">
        <ItemImageGrid :masonry="true"/>
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