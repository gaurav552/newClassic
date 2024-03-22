<script setup lang="ts">

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

</script>

<template>
<v-card width="100%" height="550px" class="rounded-xl">
    <AudioPlayerFull />
</v-card>
</template>

<style scoped>

</style>