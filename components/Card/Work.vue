<script setup lang="ts">
defineProps({
    height: String,
    work:Object
})
const handleClick = (id:string) => {
    navigateTo(`/music/compositions/composition-${id}`)
}
const {nameFormatter} = useUtilities()

let gradient = ref(isDarkMode().value ? 'rgba(0,0,0,.2), rgba(0,0,0,.8)' : 'rgba(255,255,255,.2), rgba(255,255,255,.7)')
let textClass = ref(isDarkMode().value ? 'text-white' : 'text-black')
watch(isDarkMode(), () => {
    gradient.value = isDarkMode().value ? 'rgba(0,0,0,.2), rgba(0,0,0,.8)' : 'rgba(255,255,255,.2), rgba(255,255,255,.7)'
    textClass.value = isDarkMode().value ? 'text-white' : 'text-black'
})
</script>

<template>
    <v-card class="rounded-xl w-100 bg-mySurface" :height="height ? height : '330px'">
        <div class="d-flex h-100">
            <div class="h-100 w-66 d-flex flex-column align-center justify-center pa-5">
                <v-card-text class="d-flex flex-column align-center justify-center ga-1">
                    <span class="text-subtitle-2">{{ nameFormatter(work.person?.firstName, work.person?.lastName) }} - {{ work.year }}</span>
                    <p class="text-h5 text--primary name" @click="handleClick(work._id)">
                        {{ work.altName ? work.altName : work.name}}
                    </p>
                    <p class="text-subtitle-2 mb-6">{{ work.score }}</p>

                    <v-card-actions>
                        <v-btn
                            class="ms-2"
                            icon="mdi-play"
                            variant="tonal"
                        ></v-btn>
                    </v-card-actions>
                </v-card-text>
            </div>
            <div style="width: 34%">
                <v-img
                    :src="work.person?.mainImage"
                    height="330px"
                    width="100%"
                    :gradient="`to bottom, ${gradient}`"
                    :class="`px-3 py-2 align-end ${textClass}`"
                    cover
                >
                    <div class="right text-right py-2 d-flex align-center justify-end pa-4 ga-3">
                        <v-btn color="red-darken-4" icon="mdi-heart-outline" size="small" variant="tonal"></v-btn>
                        <span class="text-subtitle-2">2K likes</span>
                    </div>
                </v-img>
            </div>
        </div>
    </v-card>
</template>

<style scoped>
.v-img img{
    width: 100%;
}

.name{
    transition: color 0.2s ease-in-out;
    cursor: pointer;
}

.v-card:hover .name{
    color:#B71C1C ;
}
</style>