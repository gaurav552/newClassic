<script setup lang="ts">

</script>

<template>
    <v-layout class="rounded rounded-md text-myColor" theme="myDarkTheme">

        <NavSmall/>
        <NavBig/>
        <NavFooter/>

        <v-main class="d-flex align-start justify-center bg-myBase" style="min-height: 300px;">
            <slot/>
        </v-main>
    </v-layout>
</template>

<style scoped>

</style>