<script setup lang="ts">
defineProps({
    composerBioData: Array
})
</script>

<template>
    <template slot="default" v-for="bio in composerBioData">
        <p>{{ bio.children[0].text }}</p>
        <br>
    </template>
</template>

<style scoped>

</style>