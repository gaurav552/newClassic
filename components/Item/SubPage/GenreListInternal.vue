<script setup lang="ts">

const props = defineProps({
    composer: Object
})

let textClass = ref(isDarkMode().value ? 'text-grey' : 'text-black')
let listColor = ref(isDarkMode().value ? 'grey-lighten-4' : 'grey-darken-4')
watch(isDarkMode(), () => {
    textClass.value = isDarkMode().value ? 'text-grey' : 'text-black'
    listColor = ref(isDarkMode().value ? 'grey-lighten-4' : 'grey-darken-4')
})
let selectedGenre = ref('');
let compositions = ref([]);

watch(selectedGenre, async (value, oldValue) => {
    if(value){
        let query = groq`*[_type == "compositions" && composerName._ref == "${props.composer._id}" && genre == "${value}"] | order(itemNumber asc){
            ...
        }`;
        let {data} = await sanityFetchLimited(query, 'Unable to fetch compositions');
        compositions.value = data.value;
    } else {
        compositions.value = [];
    }
})

</script>

<template>
    <div class="inn px-15 pb-1 pt-2 w-100">
        <v-card-title class="w-100 my-4">{{composer.firstName + ' ' + composer.lastName}}</v-card-title>
        <v-select
            label="Select One"
            :items="composer.types"
            variant="solo-filled"
            bg-color="mySurface"
            class="w-100"
            v-model="selectedGenre"
            clearable
        ></v-select>
    </div>
    <div class="out px-15 pb-4 w-100" v-if="selectedGenre">
        <v-list class="rounded-t-xl">
            <v-list-item
                title="Current Queue"
            >
                <template v-slot:append>
                    <v-btn
                        prepend-icon="mdi-trash-can"
                        variant="text"
                        text="Clear"
                    ></v-btn>
                </template>
            </v-list-item>
        </v-list>
        <v-divider/>
        <v-list
            lines="two"
            max-height="320px"
            style="overflow-y: auto;"
            class="w-100 rounded-b-xl pa-4 scroll-fancy"
            variant="flat"
        >
            <v-hover v-for="composition in compositions" :key="composition._id" v-slot="{ isHovering, props }">
                <v-list-item
                    :color="listColor"
                    :ripple="false"
                    variant="text"
                    :class="`rounded-lg mb-2 ${textClass} ${isHovering ? 'hovering' : ''}`"
                    v-bind="props"
                >
                    <v-list-item-title>{{ composition.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ composition.year }}</v-list-item-subtitle>
                    <template v-slot:append>
                        <v-btn :color="textClass" icon="mdi-play" variant="flat"></v-btn>
                    </template>
                </v-list-item>
            </v-hover>

        </v-list>
    </div>
</template>

<style scoped>
.v-list{
    background-color: var(--v-transparentBG1);
    backdrop-filter: blur(6px);
}
.v-list-item{
    transition: 0.2s ease-in-out;
}
.hovering{
    background-color: rgba(140, 140, 140, 0.5);
    color: white!important;
}
</style>