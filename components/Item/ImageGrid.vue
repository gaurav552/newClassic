<script setup lang="ts">

let compositions = ref()
let compColLen = ref([])
let lastValue = ref();
function generateRandomArray() {
    const possibilities = [
        [7, 5],
        [5, 7],
        [4, 8],
        [8, 4],
        [4, 4, 4]
        // Add more possible combinations as needed
    ];

    let randomIndex = Math.floor(Math.random() * possibilities.length);
    let value = null;
    if(lastValue.value == randomIndex) {
        value = generateRandomArray()
    } else {
        lastValue.value = randomIndex;
        value = possibilities[randomIndex]
    }

    return value;
}

try {
    const {musics} = await useFetchMusic()
    compositions.value = musics

    for (let i = 0; i < compositions.value.length ; i ++) {
        let cols = generateRandomArray()
        cols.forEach(function(val) {
            compColLen.value.push(val)
        })
        i+= (cols.length - 1)
    }
} catch (e) {

}

const result = generateRandomArray();
//
// console.table(result)
// console.table(result)
</script>

<template>
    <v-row>
        <v-col v-for="(mus,imgIdx) in compositions" :key="imgIdx" :cols="compColLen[imgIdx]">
            <v-card class="rounded-xl" hover link to="/music/compositions/composition-12312">
                <v-img
                    :src="mus.music_image"
                    :lazy-src="mus.music_image"
                    cover
                    height="350px"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    class="align-end text-grey-lighten-2"
                >
                    <div class="d-flex w-100 align-end pa-4">
                        <div class="left w-66">
                            <v-card-title>
                                {{ mus.music_title }}
                            </v-card-title>

                            <v-card-subtitle>
                                {{mus.music_composer}}
                            </v-card-subtitle>
                        </div>
                        <div class="right w-33 text-right px-4 py-2">
                            <h3>{{mus.music_date.slice(0, 4)}}</h3>
                        </div>
                    </div>
                </v-img>

            </v-card>
        </v-col>
    </v-row>
</template>

<style scoped>
.v-card{
    box-shadow: var(--v-myCardElevation)!important;
}
</style>