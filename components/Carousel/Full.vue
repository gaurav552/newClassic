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
    <g-g-carousel class="grgCarousel px-0 rounded"  :items-to-show="0.9827" :wrap-around="false" v-model="currentSlide" :wrapAround="true" :transition="500">
        <g-g-slide v-for="slide in sliderImg.json_array" :key="slide" class="px-3" style="height: 100%;">
            <v-card class="h-100 w-100 text-white rounded-b-xl text-left">
                <v-img
                    :src="slide.image_url"
                    :lazy-src="slide.image_url"
                    class="rounded align-end px-4 py-5 mb-3 h-100"
                    cover
                    gradient="to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)"
                >
                </v-img>
                <div class="px-5 pb-6 d-flex justify-space-between align-center">
                    <div>
                        <v-card-title>Apple ball</v-card-title>
                        <v-card-subtitle class="text-subtitle-2">cat dog</v-card-subtitle>
                    </div>
                    <div class="align-self-end">
                        <v-card-subtitle>1820</v-card-subtitle>
                    </div>
                </div>
            </v-card>
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