<script setup lang="ts">
let currentSlide = ref(0)

const years = ref([
    {
        color: 'cyan',
        year: '1960',
    },
    {
        color: 'green',
        year: '1970',
    },
    {
        color: 'pink',
        year: '1980',
    },
    {
        color: 'amber',
        year: '1990',
    },
    {
        color: 'orange',
        year: '2000',
    },
    {
        color: 'amber',
        year: '1990',
    },
    {
        color: 'amber',
        year: '1990',
    },
    {
        color: 'amber',
        year: '1990',
    },
    {
        color: 'amber',
        year: '1990',
    },
    {
        color: 'amber',
        year: '1990',
    },
    {
        color: 'amber',
        year: '1990',
    },
])
</script>

<template>

    <div class="top w-100 d-flex ga-5 align-start" style="height: 700px">
        <v-sheet class="w-66 bg-myBase" >
            <g-g-carousel :items-to-show="1" :wrap-around="false" v-model="currentSlide">
                <g-g-slide v-for="slide in 10" :key="slide" class="px-2">
                    <v-img src="~/assets/beethoven.jpeg" class="rounded-xl" cover></v-img>
                </g-g-slide>
            </g-g-carousel>

            <g-g-carousel :items-to-show="4" :wrap-around="true" v-model="currentSlide" class="mt-5 thumb rounded-xl overflow-auto">
                <g-g-slide v-for="slide in 10" :key="slide" class="px-3">
                    <v-img class="rounded-lg" src="~/assets/beethoven.jpeg" @click="currentSlide=(slide - 1)" cover></v-img>
                </g-g-slide>
            </g-g-carousel>
        </v-sheet>

        <div class="d-flex flex-column w-33 h-100">
            <v-card variant="tonal" title="Compositions" color="red-darken-4" class="rounded-t-xl pb-3 text-center border-b"></v-card>
            <v-list lines="two" class="text-left overflow-auto pa-0" variant="flat">

                <v-list-item class="pa-5">
                    <div class="d-flex w-100">
                        <div class="d-flex ga-2 flex-column w-75">
                            <v-list-item-title>Moonlight Sonata</v-list-item-title>
                            <v-list-item-subtitle class="text-subtitle-2">1789 - E Minor</v-list-item-subtitle>
                        </div>
                        <v-list-item-action class="w-25 d-flex justify-end ga-2">
                            <v-btn variant="flat" icon="mdi-download"></v-btn>
                            <v-btn variant="flat" icon="mdi-star"></v-btn>
                        </v-list-item-action>
                    </div>
                </v-list-item>
                <v-divider color="red-accent-3"></v-divider>
                <v-divider color="red-accent-3"></v-divider>
                <v-list-item class="pa-5">
                    <div class="d-flex w-100">
                        <div class="d-flex ga-2 flex-column w-75">
                            <v-list-item-title>Moonlight Sonata</v-list-item-title>
                            <v-list-item-subtitle class="text-subtitle-2">1789 - E Minor</v-list-item-subtitle>
                        </div>
                        <v-list-item-action class="w-25 d-flex justify-end ga-2">
                            <v-btn variant="flat" icon="mdi-download"></v-btn>
                            <v-btn variant="flat" icon="mdi-star"></v-btn>
                        </v-list-item-action>
                    </div>
                </v-list-item>
                <v-divider color="red-accent-3"></v-divider>
                <v-list-item class="pa-5">
                    <div class="d-flex w-100">
                        <div class="d-flex ga-2 flex-column w-75">
                            <v-list-item-title>Moonlight Sonata</v-list-item-title>
                            <v-list-item-subtitle class="text-subtitle-2">1789 - E Minor</v-list-item-subtitle>
                        </div>
                        <v-list-item-action class="w-25 d-flex justify-end ga-2">
                            <v-btn variant="flat" icon="mdi-download"></v-btn>
                            <v-btn variant="flat" icon="mdi-star"></v-btn>
                        </v-list-item-action>
                    </div>
                </v-list-item>
                <v-divider color="red-accent-3"></v-divider>
                <v-list-item class="pa-5">
                    <div class="d-flex w-100">
                        <div class="d-flex ga-2 flex-column w-75">
                            <v-list-item-title>Moonlight Sonata</v-list-item-title>
                            <v-list-item-subtitle class="text-subtitle-2">1789 - E Minor</v-list-item-subtitle>
                        </div>
                        <v-list-item-action class="w-25 d-flex justify-end ga-2">
                            <v-btn variant="flat" icon="mdi-download"></v-btn>
                            <v-btn variant="flat" icon="mdi-star"></v-btn>
                        </v-list-item-action>
                    </div>
                </v-list-item>
                <v-divider color="red-accent-3"></v-divider>
                <v-list-item class="pa-5">
                    <div class="d-flex w-100">
                        <div class="d-flex ga-2 flex-column w-75">
                            <v-list-item-title>Moonlight Sonata</v-list-item-title>
                            <v-list-item-subtitle class="text-subtitle-2">1789 - E Minor</v-list-item-subtitle>
                        </div>
                        <v-list-item-action class="w-25 d-flex justify-end ga-2">
                            <v-btn variant="flat" icon="mdi-download"></v-btn>
                            <v-btn variant="flat" icon="mdi-star"></v-btn>
                        </v-list-item-action>
                    </div>
                </v-list-item>
                <v-divider color="red-accent-3"></v-divider>
                <v-list-item class="pa-5">
                    <div class="d-flex w-100">
                        <div class="d-flex ga-2 flex-column w-75">
                            <v-list-item-title>Moonlight Sonata</v-list-item-title>
                            <v-list-item-subtitle class="text-subtitle-2">1789 - E Minor</v-list-item-subtitle>
                        </div>
                        <v-list-item-action class="w-25 d-flex justify-end ga-2">
                            <v-btn variant="flat" icon="mdi-download"></v-btn>
                            <v-btn variant="flat" icon="mdi-star"></v-btn>
                        </v-list-item-action>
                    </div>
                </v-list-item>
                <v-divider color="red-accent-3"></v-divider>
                <v-list-item class="pa-5">
                    <div class="d-flex w-100">
                        <div class="d-flex ga-2 flex-column w-75">
                            <v-list-item-title>Moonlight Sonata</v-list-item-title>
                            <v-list-item-subtitle class="text-subtitle-2">1789 - E Minor</v-list-item-subtitle>
                        </div>
                        <v-list-item-action class="w-25 d-flex justify-end ga-2">
                            <v-btn variant="flat" icon="mdi-download"></v-btn>
                            <v-btn variant="flat" icon="mdi-star"></v-btn>
                        </v-list-item-action>
                    </div>
                </v-list-item>
                <v-divider color="red-accent-3"></v-divider>
                <v-list-item class="pa-5">
                    <div class="d-flex w-100">
                        <div class="d-flex ga-2 flex-column w-75">
                            <v-list-item-title>Moonlight Sonata</v-list-item-title>
                            <v-list-item-subtitle class="text-subtitle-2">1789 - E Minor</v-list-item-subtitle>
                        </div>
                        <v-list-item-action class="w-25 d-flex justify-end ga-2">
                            <v-btn variant="flat" icon="mdi-download"></v-btn>
                            <v-btn variant="flat" icon="mdi-star"></v-btn>
                        </v-list-item-action>
                    </div>
                </v-list-item>
                <v-divider color="red-accent-3"></v-divider>
                <v-list-item class="pa-5">
                    <div class="d-flex w-100">
                        <div class="d-flex ga-2 flex-column w-75">
                            <v-list-item-title>Moonlight Sonata</v-list-item-title>
                            <v-list-item-subtitle class="text-subtitle-2">1789 - E Minor</v-list-item-subtitle>
                        </div>
                        <v-list-item-action class="w-25 d-flex justify-end ga-2">
                            <v-btn variant="flat" icon="mdi-download"></v-btn>
                            <v-btn variant="flat" icon="mdi-star"></v-btn>
                        </v-list-item-action>
                    </div>
                </v-list-item>
            </v-list>
            <v-card variant="tonal" color="red-darken-4" class="rounded-b-xl py-2 px-1 border-t" subtitle="415 total Compositions."></v-card>
        </div>
    </div>

    <div class="bottom w-66 d-flex ga-5">
        <v-container class="w-75 mx-auto text-myColor px-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quisquam recusandae tempore.
                Aliquam excepturi facere hic, illum quod sunt. Nam odio pariatur possimus quis tenetur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, atque consectetur dolorem ex harum natus quam quia! Ab
                asperiores assumenda atque culpa, deleniti doloribus excepturi impedit incidunt nisi omnis quas repellat ullam veniam?</p><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum illo in natus nemo sint ut.</p><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid enim incidunt necessitatibus porro,
                soluta suscipit vitae. Assumenda autem culpa incidunt ipsam repudiandae.</p><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, atque consectetur dolorem ex harum natus quam quia! Ab
                asperiores assumenda atque culpa, deleniti doloribus excepturi impedit incidunt nisi omnis quas repellat ullam veniam?</p><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, atque consectetur dolorem ex harum natus quam quia! Ab
                asperiores assumenda atque culpa, deleniti doloribus excepturi impedit incidunt nisi omnis quas repellat ullam veniam?</p>
        </v-container>

    </div>
    <v-sheet class="rounded-xl pa-5">
        <v-timeline align="start" direction="horizontal" class="text-myColor pb-4 overflow-auto">
            <v-timeline-item
                v-for="(year, i) in years"
                :key="i"
                :dot-color="year.color"
                size="small"
                width="200px"
            >
                <template v-slot:opposite>
                    <div
                        :class="`pt-1 headline font-weight-bold text-${year.color}`"
                        v-text="year.year"
                    ></div>
                </template>
                <div>
                    <h3 :class="`mt-n1 headline mb-3 text-${year.color}`">
                        Lorem ipsum
                    </h3>
                    <p class="text-subtitle-2">
                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec
                    </p>
                </div>
            </v-timeline-item>
        </v-timeline>
    </v-sheet>
</template>

<style scoped>
.v-img{
    max-height: calc(700px - 120px);
    width: auto;
}
.thumb .v-img{
    max-height: 100px;
}
</style>