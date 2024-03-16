<script setup lang="ts">
import { onMounted } from 'vue';
const props = defineProps({
    people:Array<Object>,
    works:Array<Object>,
    peopleName:String,
    workName: String
})
let currentSlide = ref(0)

let {shuffleArrays, getYear, clipTextWithEllipsis} = useUtilities()

let mixed = shuffleArrays(props.people, props.works)
const handleClick = (slide:object) => {
    navigateTo(`/music/${slide.year ? 'compositions/composition-' : 'composers/composer-'}${slide._id}`)
}

// Initialize a reactive variable to track client-side status
const isClient = ref(false)

// Alternatively, you can use the onMounted hook to update the isClient variable
onMounted(() => {
  isClient.value = true;
});
</script>

<template>
    <g-g-carousel v-if="isClient" class="grgCarousel px-0"  :items-to-show="0.9827" :wrap-around="false" v-model="currentSlide" :wrapAround="true" :transition="500">
        <g-g-slide v-for="slide in mixed" :key="slide" class="px-3" style="height: 100%;">
            <v-card
                class="h-100 w-100 text-white rounded-b-xl text-left bg-mySurface"
                variant="flat"
            >
                <v-img
                    :src="slide.year ? slide.person.mainImage : slide.mainImage"
                    :lazy-src="slide.year ? slide.person.mainImage : slide.mainImage"
                    class="rounded px-4 py-5 mb-3 h-100"
                    cover
                    gradient="to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)"
                >
                    <v-card-title class="text-myColor">{{ slide.year ? peopleName : workName }}</v-card-title>
                </v-img>
                <div class="px-5 pb-6 d-flex justify-space-between align-center text-myColor">
                    <div>
                        <v-card-title class="name" @click="handleClick(slide)" v-if="slide.year">
                            {{ `${slide.person.lastName} - ${slide.altName ? (slide.altName +" ("+slide.name+")") : slide.name}` }}
                        </v-card-title>
                        <v-card-title class="name" @click="handleClick(slide)" v-else>{{slide.name }}</v-card-title>
                        <v-card-subtitle class="text-subtitle-2">{{ slide.year ? `About ${slide.len} long` : clipTextWithEllipsis(slide.excerpt, 80) }}</v-card-subtitle>
                    </div>
                    <div class="align-self-end">
                        <v-card-subtitle>{{ slide.year ? slide.year : `${getYear(slide.dateOfBirth)} - ${getYear(slide.dateOfDeath)}` }}</v-card-subtitle>
                    </div>
                </div>
            </v-card>
        </g-g-slide>
        <template #addons>
            <g-g-navigation />
        </template>
    </g-g-carousel>
    <v-card v-else title="loading..."></v-card>
</template>

<style scoped>
.v-img{
    max-height: calc(700px - 120px);
    width: auto;
}

.name{
    transition: color 0.2s ease-in-out;
    cursor: pointer;
}

.v-card:hover .name{
    color:#B71C1C ;
}
</style>