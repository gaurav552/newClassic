<script setup lang="ts">

let compositions = ref()
let compColLen = ref<Number[]>([])
let lastValue = ref();

const props = defineProps({
    masonry: Boolean,
    people:Array<Object>,
    work:Array<Object>
})

let {shuffleArrays, getYear, nameFormatter, generateRandomArr} = useUtilities()

let mixed = shuffleArrays(props.people, props.work)

for (let i = 0; i < mixed.length ; i ++) {
    let {value:cols, randomIndex} = generateRandomArr(lastValue.value)
    lastValue.value = randomIndex
    cols.forEach((val:number) => {
        compColLen.value.push(val)
    })
    i+= (cols.length - 1)
}


</script>

<template>
    <v-row>
        <v-col v-for="(value,imgIdx) in mixed" :key="imgIdx" :cols="masonry ? compColLen[imgIdx] : 6">
            <v-card class="rounded-xl" hover link :to="`/music/${value.year ? 'compositions/composition-' : 'composers/composer-'}${value._id}`">
                <v-img
                    :src="value.year ? value.person.mainImage : value.mainImage"
                    :lazy-src="value.year ? value.person.mainImage : value.mainImage"
                    cover
                    height="350px"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    class="align-end text-grey-lighten-2"
                >
                    <div class="d-flex w-100 align-end pa-4">
                        <div class="left w-66">
                            <v-card-title>
                                {{ value.year ? (value.altName ? value.altName : value.name) : value.name }}
                            </v-card-title>

                            <v-card-subtitle>
                                {{value.year ? value.person.lastName : `${getYear(value.dateOfBirth)} - ${getYear(value.dateOfDeath)}`}}
                            </v-card-subtitle>
                        </div>
                        <div class="right w-33 text-right py-2 d-flex align-center justify-end">
                            <v-btn icon="mdi-heart-outline" size="small" variant="text"></v-btn>
                            <span class="text-subtitle-2">2K likes</span>
                        </div>
                    </div>
                </v-img>

            </v-card>
        </v-col>
    </v-row>
</template>

<style scoped>
.v-card{
    //box-shadow: var(--v-myCardElevation)!important;
}
</style>