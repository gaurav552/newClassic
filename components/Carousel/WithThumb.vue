<script setup lang="ts">
let currentSlide = ref(0)

defineProps({
    composerImages: Array
})
</script>

<template>
    <g-g-carousel class="grgCarousel rounded-xl px-0" :autoplay="5000" :items-to-show="0.9827" :wrap-around="false" v-model="currentSlide" :wrapAround="true" :transition="500">
        <g-g-slide v-for="slide in composerImages" :key="slide" class="px-3">
            <v-img :src="slide" :lazy-src="slide" class="rounded-xl" cover></v-img>
        </g-g-slide>
    </g-g-carousel>

    <g-g-carousel :items-to-show="4" :wrap-around="true" v-model="currentSlide" class="mt-5 thumb rounded-xl overflow-auto">
        <g-g-slide v-for="(slide, ind) in composerImages" :key="ind" class="px-3">
            <v-img class="rounded-lg"  :src="slide" :lazy-src="slide" @click="currentSlide=(ind)" cover></v-img>
        </g-g-slide>
    </g-g-carousel>
</template>

<style scoped>
.v-img{
    max-height: calc(700px - 120px);
    width: auto;
}
.thumb .v-img{
    max-height: 100px;
}
</style>