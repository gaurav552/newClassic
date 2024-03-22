<script setup lang="ts">
const props = defineProps({
    featuredPicks:{
        type:Array<Object>,
        required: true
    }
})
</script>

<template>
    <v-row class="pa-1">
        <template v-for="(featured, ind) in featuredPicks">
            <template v-if="ind == 2 || ind == 3"></template>
            <v-col class="pa-2" v-else :key="ind" :height="ind == 0 ? '600px' : '190px'" :cols="ind == 0 ? 9 : 3">
                <div v-if="ind == 1" class="d-flex flex-column ga-4">
                    <v-card v-for="feat in featuredPicks.slice(1,4)" height="190px">
                        <ItemSubPageCardInternal :person="feat" />
                    </v-card>
                </div>
                <v-card v-else :height="ind == 0 ? '600px' : '190px'">
                    <ItemSubPageCardInternal :person="featured" />
                </v-card>
            </v-col>
        </template>
    </v-row>
</template>

<style scoped>

</style>