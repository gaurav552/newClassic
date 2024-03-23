<script setup lang="ts">
defineProps({
    composition: {
        type: Object,
        required: true
    }
})
const {nameFormatter} = useUtilities()
const handleClick = (id:string) => {
    navigateTo(`/music/compositions/composition-${id}`)
}
let gradient = ref(isDarkMode().value ? 'rgba(0,0,0,.2), rgba(0,0,0,.8)' : 'rgba(255,255,255,.2), rgba(255,255,255,.7)')
let textClass = ref(isDarkMode().value ? 'text-white' : 'text-black')
let lightTextClass = ref(isDarkMode().value ? 'text-grey-lighten-3' : 'text-grey-darken-3')
watch(isDarkMode(), () => {
    gradient.value = isDarkMode().value ? 'rgba(0,0,0,.2), rgba(0,0,0,.8)' : 'rgba(255,255,255,.2), rgba(255,255,255,.7)'
    textClass.value = isDarkMode().value ? 'text-grey-lighten-3' : 'text-grey-darken-3'
    lightTextClass = ref(isDarkMode().value ? 'text-grey-lighten-1' : 'text-grey-darken-2')
})

</script>

<template>
    <v-card class="rounded-xl w-100 bg-mySurface" height="200px">
        <div class="d-flex h-100">
            <v-img
                :src="composition.person?.mainImage"
                height="300px"
                width="100%"
                :gradient="`to top, ${gradient}`"
                :class="`align-end ${textClass}`"
                cover
            >
                <v-card-text class="d-flex flex-column align-center justify-center ga-1">
                    <span class="text-subtitle-2">{{ nameFormatter(composition.person?.firstName, composition.person?.lastName) }} - {{ composition.year }}</span>
                    <p class="text-h5 text--primary name" @click="handleClick(composition._id)">
                        {{ composition.altName ? composition.altName : composition.name}}
                    </p>
                    <p class="text-subtitle-2 mb-6">{{ composition.score }}</p>

                    <v-card-actions>
                        <v-btn :class="`ms-2 ${lightTextClass}`" icon="mdi-playlist-plus" size="small" variant="flat"></v-btn>
                        <v-btn :class="`ms-2 ${lightTextClass}`" icon="mdi-play" variant="flat"></v-btn>
                        <v-btn class="ms-2 text-red-darken-2" icon="mdi-heart-outline" size="small" variant="flat"></v-btn>
                    </v-card-actions>
                </v-card-text>
            </v-img>
        </div>
    </v-card>
</template>

<style scoped>

</style>