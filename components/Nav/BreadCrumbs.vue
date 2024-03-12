<script setup lang="ts">
let crumbs = pageBreadCrumbs()
</script>

<template>
    <span>
        <v-breadcrumbs class="py-0">
            <template v-for="(bc, ind) in crumbs">
                <v-breadcrumbs-item :to="bc.path" :disabled="ind == (crumbs.length - 1)" >
                    {{ bc.name }}
                </v-breadcrumbs-item>
                <v-breadcrumbs-divider divider="|" v-if="ind !== (crumbs.length - 1)" />
            </template>
        </v-breadcrumbs>
    </span>
</template>

<style scoped>

</style>