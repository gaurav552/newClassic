<script setup lang="ts">
let props = defineProps({
    compositionList: Array,
    compositionCount: Number,
    composerId: String
})
let {removeDuplicate} = useUtilities()

let tab = ref()
let genreMusic = ref([])
watch(tab, async () => {
    if(!genreMusic.value[tab.value]){
        let query = groq`*[_type == "compositions" && genre == "${tab.value}" && composerName._ref == "${props.composerId}"] | order(itemNumber asc){
            name,
            _id,
            altName,
            year,
            "len":length
        }`
        let {data} = await sanityFetchLimited(query, 'Unable to fetch compositions')
        genreMusic.value[tab.value] = data.value
    }
})


</script>

<template>
    <v-card variant="tonal" title="Compositions" color="red-darken-4" class="rounded-t-xl pb-2 text-center border-b" style="height: 7%"></v-card>
    <v-card style="height: 86%">
        <v-tabs
            v-model="tab"
            bg-color="mySurface"
            class="border-b-sm"
            center-active
        >
            <v-tab v-for="genre in removeDuplicate(compositionList)" :value="genre">{{ genre }}</v-tab>
        </v-tabs>
        <v-card-text class="pa-0" style="height: calc(100% - 48px); overflow-x: auto">
            <v-window v-model="tab">
                <v-window-item v-for="genre in removeDuplicate(compositionList)" :value="genre">
                    <v-list v-if="genreMusic[genre]" lines="two">
                        <v-list-item
                            v-for="composition in genreMusic[genre]"
                            :key="composition._id"
                            :value="composition._id"
                            :ripple="false"
                        >
                            <v-list-item-title>{{ composition.altName || composition.name }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
    <v-card style="height: 7%" variant="tonal" color="red-darken-4" class="rounded-b-xl py-2 px-1 border-t" :subtitle="`${compositionCount} total Compositions.`"></v-card>
</template>

<style scoped>
    .v-list{
        height: 100%;
    }
    .v-expansion-panel-text__wrapper{
        padding: 0!important;
    }
</style>