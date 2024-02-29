<script setup lang="ts">

</script>

<template>
    <v-card variant="tonal" color="red-darken-4" elevation="1" class="rounded-lg px-9 py-5 bg-mySurface">
        <v-text-field
            label="Search Composers and compositions"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            density="compact"
            class="rounded-xl"
        >
            <template v-slot:append>
                <v-btn variant="tonal">
                    <v-icon icon="mdi-filter-variant" start></v-icon>

                    Sort By
                    <v-menu activator="parent">
                        <v-list>
                            <v-list-item link><v-list-item-title>Composer Name</v-list-item-title></v-list-item>
                            <v-list-item link><v-list-item-title>Composed Date</v-list-item-title></v-list-item>
                            <v-list-item link><v-list-item-title>Composition Name</v-list-item-title></v-list-item>
                        </v-list>
                    </v-menu>
                </v-btn>
            </template>
        </v-text-field>
    </v-card>
</template>

<style scoped>

</style>