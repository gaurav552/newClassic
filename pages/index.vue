<script setup lang="ts">
definePageMeta({
    layout:'home'
})

let cardInfo = [
    {
        image: '/_nuxt/assets/beethoven.jpeg',
        title: 'Music',
        path: '/music'
    },
    {
        image: '/_nuxt/assets/vangogh.jpg',
        title: 'Art',
        path: '/art'
    },
    {
        image: '/_nuxt/assets/dosto.jpg',
        title: 'Literature',
        path: '/literature'
    }
]

let currentSlide = ref(0)

const years = ref([
    {
        color: 'cyan',
        year: '1960',
    },
    {
        color: 'green',
        year: '1970',
    },
    {
        color: 'pink',
        year: '1980',
    },
    {
        color: 'amber',
        year: '1990',
    },
    {
        color: 'orange',
        year: '2000',
    },
    {
        color: 'amber',
        year: '1990',
    },
    {
        color: 'amber',
        year: '1990',
    },
    {
        color: 'amber',
        year: '1990',
    },
    {
        color: 'amber',
        year: '1990',
    },
    {
        color: 'amber',
        year: '1990',
    },
    {
        color: 'amber',
        year: '1990',
    },
])

</script>

<template>
    <div class="d-flex pa-10 ga-10" style="width: 100%;max-width: 1400px; height: calc(100dvh - 60px)">
        <div class="main-left w-66 d-flex flex-column ga-10 h-100">
            <HomeCard v-for="card in cardInfo" :key="card.title" :card-data="card" />
        </div>

        <div class="main-right w-33 h-100">
            <HomeBlogs/>
        </div>
    </div>
</template>

<style scoped>

</style>