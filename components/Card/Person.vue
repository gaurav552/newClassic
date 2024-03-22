<script setup lang="ts">
defineProps({
    person:{
        type:Object,
        required: true
    }
})

</script>

<template>
    <v-card class="rounded-xl">
        <v-card class="rounded-xl" height="330px">
            <ItemSubPageCardInternal :person="person" />
        </v-card>
    </v-card>
</template>

<style>

</style>