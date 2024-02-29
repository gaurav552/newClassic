<script setup lang="ts">

let sliderImg = {
    "json_array": [
        {
            "image_url": "https://dummyimage.com/300x300/000958/23f000.png?text="
        },
        {
            "image_url": "https://dummyimage.com/300x300/000e87/6448d3.png?text="
        },
        {
            "image_url": "https://dummyimage.com/300x300/0002f5/3ffdc3.png?text="
        },
        {
            "image_url": "https://dummyimage.com/300x300/00018b/a15fa7.png?text="
        },
        {
            "image_url": "https://dummyimage.com/300x300/000e64/a5dab9.png?text="
        },
        {
            "image_url": "https://dummyimage.com/300x300/000bea/952072.png?text="
        },
        {
            "image_url": "https://dummyimage.com/300x300/000b29/ae3e3f.png?text="
        },
        {
            "image_url": "https://dummyimage.com/300x300/000ea6/61eeaf.png?text="
        },
        {
            "image_url": "https://dummyimage.com/300x300/a91566/03bdea.png?text="
        },
        {
            "image_url": "https://dummyimage.com/300x300/ebc7a1/2011bf.png?text="
        }
    ]
}
let currentSlide = ref(0)

</script>

<template>
    <g-g-carousel class="grgCarousel rounded-xl px-0" :autoplay="5000" :items-to-show="0.9827" :wrap-around="false" v-model="currentSlide" :wrapAround="true" :transition="500">
        <g-g-slide v-for="slide in sliderImg.json_array" :key="slide" class="px-3">
            <v-img :src="slide.image_url" :lazy-src="slide.image_url" class="rounded-xl" cover></v-img>
        </g-g-slide>
        <template #addons>
            <g-g-navigation />
        </template>
    </g-g-carousel>
</template>

<style scoped>
.v-img{
    max-height: calc(700px - 120px);
    width: auto;
}
</style>