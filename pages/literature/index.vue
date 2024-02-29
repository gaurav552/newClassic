<script setup lang="ts">
const imageLayout = [
    { cols: 4 },
    {
        cols: 8,
        children: [{ cols: 12 }, { cols: 12 }],
    },
    { cols: 6 },
    { cols: 6 },
    { cols: 6 },
    { cols: 4 },
    { cols: 8 },
]
</script>

<template>
    <div class="top w-100" style="height: 30%">
        <v-carousel hide-delimiters draggable="true" class="rounded-xl text-red-darken-4">
            <v-carousel-item>
                <v-parallax src="https://w.wallhaven.cc/full/3l/wallhaven-3lyrvy.png"></v-parallax>
            </v-carousel-item>
            <v-carousel-item>
                <v-parallax src="https://w.wallhaven.cc/full/6d/wallhaven-6d7xmx.jpg"></v-parallax>
            </v-carousel-item>
            <v-carousel-item>
                <v-parallax src="https://w.wallhaven.cc/full/o5/wallhaven-o5vy3l.png"></v-parallax>
            </v-carousel-item>
        </v-carousel>
    </div>

    <div class="mid">

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

                        Filter
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

    </div>

    <div class="bottom w-100">
        <v-row>
            <template v-for="(image,imgIdx) in imageLayout" :key="imgIdx">
                <v-col :cols="image.cols">
                    <v-img
                        :src="`https://picsum.photos/600/350?image=${image.cols * 20}`"
                        cover
                        height="100%"
                        class="rounded-xl"
                    ></v-img>
                </v-col>

                <v-col v-if="image.children" cols="6" class="d-flex flex-column">
                    <v-row>
                        <v-col v-for="(children,childIdx) in image.children" :key="childIdx" :cols="children.cols">
                            <v-img
                                :src="`https://picsum.photos/550/200?image=${children.cols + childIdx}`"
                                cover
                                height="100%"
                                class="rounded-xl"
                            ></v-img>
                        </v-col>
                    </v-row>
                </v-col>
            </template>
        </v-row>
    </div>

    <div class="blogList d-flex flex-column rounded-xl">
        <v-card color="red-darken-4" variant="tonal" class="rounded-t-xl pa-2" title="Related Blog Posts"></v-card>

        <v-sheet class="rounded-b-xl pa-2">
            <v-slide-group class="px-4 py-6" show-arrows>
                <v-slide-group-item>
                    <v-card color="red-darken-4" variant="tonal" class="rounded-xl ma-3">
                        <v-img
                            class="align-end text-white"
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            cover
                        >
                            <v-card-title>Top 10 Classical Composers</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pt-4">
                            Number 10
                        </v-card-subtitle>

                        <v-card-text>
                            <div>Bach</div>
                            <div>Germany, 17<sup>th</sup> Century</div>
                        </v-card-text>
                    </v-card>
                    <v-card color="red-darken-4" variant="tonal" class="rounded-xl ma-3">
                        <v-img
                            class="align-end text-white"
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            cover
                        >
                            <v-card-title>Top 10 Classical Composers</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pt-4">
                            Number 10
                        </v-card-subtitle>

                        <v-card-text>
                            <div>Bach</div>
                            <div>Germany, 17<sup>th</sup> Century</div>
                        </v-card-text>
                    </v-card>
                    <v-card color="red-darken-4" variant="tonal" class="rounded-xl ma-3">
                        <v-img
                            class="align-end text-white"
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            cover
                        >
                            <v-card-title>Top 10 Classical Composers</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pt-4">
                            Number 10
                        </v-card-subtitle>

                        <v-card-text>
                            <div>Bach</div>
                            <div>Germany, 17<sup>th</sup> Century</div>
                        </v-card-text>
                    </v-card>
                    <v-card color="red-darken-4" variant="tonal" class="rounded-xl ma-3">
                        <v-img
                            class="align-end text-white"
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            cover
                        >
                            <v-card-title>Top 10 Classical Composers</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pt-4">
                            Number 10
                        </v-card-subtitle>

                        <v-card-text>
                            <div>Bach</div>
                            <div>Germany, 17<sup>th</sup> Century</div>
                        </v-card-text>
                    </v-card>
                    <v-card color="red-darken-4" variant="tonal" class="rounded-xl ma-3">
                        <v-img
                            class="align-end text-white"
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            cover
                        >
                            <v-card-title>Top 10 Classical Composers</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pt-4">
                            Number 10
                        </v-card-subtitle>

                        <v-card-text>
                            <div>Bach</div>
                            <div>Germany, 17<sup>th</sup> Century</div>
                        </v-card-text>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>



    </div>

</template>

<style scoped>

</style>