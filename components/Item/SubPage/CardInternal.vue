<script setup lang="ts">
defineProps(
    {
        composer:Object
    }
)

function nameFormatter(firstName:string, lastName:string) {
    let fullName = `${firstName} ${lastName}`
    if(fullName.length > 20){
        const parts = fullName.split(' ');
        const shortenedFirstName = parts[0].charAt(0) + '.';
        const shortenedMiddleName = parts.length > 2 ? ' ' + parts[1].charAt(0) + '.' : '';
        const lastName = parts[parts.length - 1];

        fullName = `${shortenedFirstName}${shortenedMiddleName} ${lastName}`
    }
    return fullName
}
function getYear(date: string) {
    return date.split('-')[0]
}

</script>

<template>
    <v-img
        :src="composer.images[0]"
        :lazy-src="composer.images[0]"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        class="px-3 py-2 align-end text-white"
        cover
        height="100%"
    >
        <div class="d-flex justify-space-between align-end">
            <div class="pb-2">
                <v-card-title class="px-0">{{ nameFormatter(composer.firstName, composer.lastName )}}</v-card-title>
                <v-card-subtitle class="px-0">{{ getYear(composer.dateOfBirth) }} - {{ getYear(composer.dateOfDeath) }}</v-card-subtitle>
            </div>
            <div class="d-flex align-center">
                <v-btn color="" icon="mdi-heart-outline" size="small" variant="text"></v-btn>
                <span class="text-subtitle-2">15K</span>
            </div>
        </div>
    </v-img>
</template>

<style scoped>

</style>