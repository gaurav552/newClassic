<script setup lang="ts">
defineProps({
    compositionList: Array,
    compositionCount: Number
})
</script>

<template>
    <v-card variant="tonal" title="Compositions" color="red-darken-4" class="rounded-t-xl pb-2 text-center border-b"></v-card>
    <v-list lines="two" class="text-left overflow-auto pa-0" variant="flat">

        <template slot="default" v-for="(composition, ind) in compositionList">
            <v-list-item class="pa-5">
                <div class="d-flex w-100">
                    <div class="d-flex ga-2 flex-column w-75">
                        <v-list-item-title>{{ composition.altName ? composition.altName : composition.name }}</v-list-item-title>
                        <v-list-item-subtitle class="text-subtitle-2">{{ composition.year}} - {{ composition.compositionKey }}</v-list-item-subtitle>
                    </div>
                    <v-list-item-action class="w-25 d-flex justify-end ga-2">
                        <v-btn variant="flat" icon="mdi-download"></v-btn>
                        <v-btn variant="flat" icon="mdi-star"></v-btn>
                    </v-list-item-action>
                </div>
            </v-list-item>
            <v-divider v-if="ind !== (compositionList.length - 1)" color="red-accent-3"></v-divider>
            <v-divider v-if="ind !== (compositionList.length - 1)" color="red-accent-3"></v-divider>
        </template>

    </v-list>
    <v-card variant="tonal" color="red-darken-4" class="rounded-b-xl py-2 px-1 border-t" :subtitle="`${compositionCount} total Compositions.`"></v-card>
</template>

<style scoped>
    .v-list{
        height: 100%;
    }
</style>