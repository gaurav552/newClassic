<script setup lang="ts">
defineProps({
    id: {
        type:String,
        required: true
    },
    name: String,
    altName: String,
    compositionKey: String,
    year: String,
    score: String,
    instrument: String,
    genre: String,
    itemNumber: String,
    composer: Object
})
const handleClick = (id:string) => {
    navigateTo(`/music/compositions/composition-${id}`)
}
const {nameFormatter} = useUtilities()
</script>

<template>
    <v-card class="rounded-xl w-100" height="300px">
        <div class="d-flex h-100">
            <div class="h-100 w-66 d-flex flex-column align-center justify-center pa-5">
                <v-card-text class="d-flex flex-column align-center justify-center ga-1">
                    <span class="text-subtitle-2">{{ nameFormatter(composer.firstName, composer.lastName) }} - {{ year }}</span>
                    <p class="text-h5 text--primary name" @click="handleClick(id)">
                        {{ altName ? altName : name}}
                    </p>
                    <p class="text-subtitle-2 mb-6">{{ score }}</p>

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
                    :src="composer.mainImage"
                    height="300px"
                    width="100%"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    class="align-end text-grey-lighten-2"
                    cover
                >
                    <div class="right text-right py-2 d-flex align-center justify-end pa-4">
                        <v-btn icon="mdi-heart-outline" size="small" variant="text"></v-btn>
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