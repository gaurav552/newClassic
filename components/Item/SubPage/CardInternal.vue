<script setup lang="ts">
defineProps(
    {
        composer:Object
    }
)

const {getYear,nameFormatter} = useUtilities()

</script>

<template>
    <v-img
        :src="composer.mainImage"
        :lazy-src="composer.mainImage"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        class="px-3 py-2 align-end text-white"
        cover
        height="100%"
    >
        <div class="d-flex justify-space-between align-end">
            <div class="pb-2">
                <v-card-title class="px-0">{{ nameFormatter(composer.firstName, composer.lastName )}}</v-card-title>
                <v-card-subtitle class="px-0 text-subtitle-2">{{ getYear(composer.dateOfBirth) }} - {{ getYear(composer.dateOfDeath) }}</v-card-subtitle>
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