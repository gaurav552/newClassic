<script setup lang="ts">
defineProps({
    id: {
        type:String,
        required: true
    },
    image: String,
    name: String,
    dateOfBirth: String,
    dateOfDeath: String,
})
let {getYear} = useUtilities()
const handleClick = (id:string) => {
    navigateTo(`/music/composers/composer-${id}`)
}
</script>

<template>
    <v-card class="rounded-xl">
        <v-card class="rounded-xl">
            <v-img
                :src="image"
                :lazy-src="image"
                cover
                height="300px"
                gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.7)"
                class="align-end text-grey-lighten-2 hoverEffect"
            >
                <div class="d-flex w-100 align-end pa-4">
                    <div class="left w-100">
                        <v-card-title class="name" @click="handleClick(id)">
                            {{ name }}
                        </v-card-title>

                        <v-card-subtitle>
                            {{`${getYear(dateOfBirth)} - ${getYear(dateOfDeath)}`}}
                        </v-card-subtitle>
                    </div>
                    <div class="right w-33 text-right py-2 d-flex align-center justify-end">
                        <v-btn icon="mdi-heart-outline" size="small" variant="text"></v-btn>
                        <span class="text-subtitle-2">2K likes</span>
                    </div>
                </div>
            </v-img>
        </v-card>
    </v-card>
</template>

<style scoped>
.name{
    transition: color 0.2s ease-in-out;
    cursor: pointer;
}

.v-card:hover .name{
    color: #B71C1C;
}
</style>