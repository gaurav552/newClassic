<script setup lang="ts">
const allItems = ref([]);

try {
    const {blogs} = await useFetchBlogs()
    allItems.value = blogs
} catch (e) {
    console.log(e)
}
let currentSlide = ref(0)
const {clipTextWithEllipsis} = useUtilities()

</script>

<template>
<div>
    <v-card color="red-darken-4" variant="tonal" class="rounded-t-xl pa-2" title="Related Blog Posts"></v-card>
    <v-sheet class="rounded-b-xl pa-2" style="height: 510px">
        <g-g-carousel class="recentBlogs rounded-xl" :items-to-show="3.2" :wrap-around="false" v-model="currentSlide" :transition="500">
            <g-g-slide v-for="slide in 11" :key="slide" class="px-3">
                <v-card class="text-left rounded-xl h-100" hover>
                    <v-img
                        :src="allItems[slide].blog_image"
                        :lazy-src="allItems[slide].blog_image"
                        height="310px"
                        class="pa-3 text-white align-end"
                        cover
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    >
                        <v-card-title>{{ allItems[slide].blog_title }}</v-card-title>
                    </v-img>
                    <div class="pa-3">
                        <div class="d-flex justify-space-between">
                            <v-card-subtitle class="pt-4">
                                {{ clipTextWithEllipsis(allItems[slide].blog_subtitle, 30) }}
                            </v-card-subtitle>
                            <v-card-subtitle class="pt-4">
                                2024-12-19
                            </v-card-subtitle>
                        </div>

                        <v-card-text>
                            {{ clipTextWithEllipsis(allItems[slide].blog_excerpt, 80) }}
                        </v-card-text>
                    </div>
                </v-card>
            </g-g-slide>
        </g-g-carousel>
    </v-sheet>
</div>
</template>

<style>
.recentBlogs .carousel__viewport{
    padding: 25px 0!important;
}
</style>