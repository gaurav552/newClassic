<script setup lang="ts">

</script>

<template>
    <v-app-bar
        flat
        location="bottom"
        style="border-top:1px solid #424242"
        height="52"
    >
        <v-footer class="d-flex align-center justify-space-between bg-myBase">
            <div class="w-33">
                {{ new Date().getFullYear() }} — <strong>Classic</strong>
            </div>
            <div class="d-flex align-center justify-end w-66 ga-4 ">
                <v-btn class="mx-4" icon="mdi-facebook" variant="plain" size="small"></v-btn>
                <v-btn class="mx-4" icon="mdi-twitter" variant="plain" size="small"></v-btn>
                <v-btn class="mx-4" icon="mdi-linkedin" variant="plain" size="small"></v-btn>
            </div>
        </v-footer>

    </v-app-bar>
</template>

<style scoped>

</style>