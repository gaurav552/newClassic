<script setup lang="ts">
import CompositionThumbCard from "~/components/Card/CompositionThumbCard.vue";

let currentSlide = ref(0)
defineProps({
    compositions: Array<Object>
})
</script>

<template>
    <g-g-carousel :items-to-show="2.6" :wrap-around="true" v-model="currentSlide" class="thumb rounded-xl">
        <g-g-slide v-for="(slide, ind) in compositions" :key="ind" class="px-4 pb-8">
            <CompositionThumbCard :composition="slide"/>
        </g-g-slide>
    </g-g-carousel>
</template>

<style scoped>
.thumb .v-img{
    max-height: 170px;
}
</style>