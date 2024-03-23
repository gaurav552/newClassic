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

let gradient = ref(isDarkMode().value ? 'rgba(0,0,0,.2), rgba(0,0,0,.8)' : 'rgba(255,255,255,.2), rgba(255,255,255,.7)')
let textClass = ref(isDarkMode().value ? 'text-white' : 'text-black')
watch(isDarkMode(), () => {
    gradient.value = isDarkMode().value ? 'rgba(0,0,0,.2), rgba(0,0,0,.8)' : 'rgba(255,255,255,.2), rgba(255,255,255,.7)'
    textClass.value = isDarkMode().value ? 'text-white' : 'text-black'
})

</script>

<template>
    <v-img
        :src="person.mainImage"
        :lazy-src="person.mainImage"
        :gradient="`to bottom, ${gradient}`"
        :class="`px-3 py-2 align-end ${textClass}`"
        cover
        height="100%"
    >
        <div class="d-flex justify-space-between align-end">
            <div class="pb-2">
                <v-card-title class="px-0 name" @click="handleClick(person._id)">{{ nameFormatter(person.firstName, person.lastName) }}</v-card-title>
                <v-card-subtitle class="px-0 text-subtitle-2">{{ getYear(person.dateOfBirth) }} -
                    {{ getYear(person.dateOfDeath) }}</v-card-subtitle>
            </div>
            <div class="d-flex align-center ga-3">
                <v-btn color="red-darken-4" icon="mdi-heart-outline" size="small" variant="tonal"></v-btn>
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