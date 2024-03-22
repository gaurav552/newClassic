<script setup lang="ts">
defineProps(
    {
        person:Object
    }
)
const handleClick = (id:string) => {
    navigateTo(`/music/composers/composer-${id}`)
}
const {getYear,nameFormatter} = useUtilities()

</script>

<template>
    <v-img
        :src="person.mainImage"
        :lazy-src="person.mainImage"
        gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.7)"
        class="px-3 py-2 align-end text-white"
        cover
        height="100%"
    >
        <div class="d-flex justify-space-between align-end">
            <div class="pb-2">
                <v-card-title class="px-0 name" @click="handleClick(person._id)">{{ nameFormatter(person.firstName, person.lastName) }}</v-card-title>
                <v-card-subtitle class="px-0 text-subtitle-2">{{ getYear(person.dateOfBirth) }} -
                    {{ getYear(person.dateOfDeath) }}</v-card-subtitle>
            </div>
            <div class="d-flex align-center">
                <v-btn color="" icon="mdi-heart-outline" size="small" variant="text"></v-btn>
                <span class="text-subtitle-2">15K</span>
            </div>
        </div>
    </v-img>
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