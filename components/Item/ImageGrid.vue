<script setup lang="ts">

let compositions = ref()
let compColLen = ref<Number[]>([])
let lastValue = ref();

const props = defineProps({
    masonry: Boolean,
    people:{
        type:Array<Object>,
        required: true
    },
    work:{
        type:Array<Object>,
        required: true
    },
    shuffle:Boolean
})

let {getYear, generateRandomArr, mixArrays} = useUtilities()

let mixed = mixArrays(props.people, props.work)

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
        <v-col v-for="(value,imgIdx) in mixed" :key="imgIdx" :cols="6">
            <CardPerson
                v-if="!value.year"
                :person="value"
            />
            <CardWork
                v-else :work="value" :height="people.length == 0 ? '240px' : '330px'"/>
        </v-col>
    </v-row>
</template>

<style scoped>
.v-card{
    //box-shadow: var(--v-myCardElevation)!important;
}
</style>