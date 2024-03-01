<script setup lang="ts">

const page = ref(1)
const perPage = ref(4)
const allItems = ref([]);

try {
    const {blogs} = await useFetchBlogs()
    allItems.value = blogs
} catch (e) {
    console.log(e)
}


</script>

<template>
    <v-container class="rounded-xl pa-0 h-100 bg-mySurface">
        <v-card title="Recent Blogs" variant="tonal" color="red-darken-4" rounded="0"
                class="rounded-t-xl"></v-card>

        <div class="overflow-auto pa-3" style="height: calc(100% - 66px - 55px)">

            <v-data-iterator :items="allItems" :page="page" :items-per-page="perPage"
                             :items-length="allItems.length">
                <template v-slot:default="{ items }">
                    <template
                        v-for="(item, i) in items"
                        :key="i"
                    >
                        <v-card variant="flat" class="pb-2 mb-4 rounded-lg bg-myBase" hover>
                            <v-img
                                class="align-end text-white"
                                :lazy-src="item.raw.blog_image"
                                :src="item.raw.blog_image"
                                cover
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                height="200px"
                            >
                                <v-card-title>{{item.raw.blog_title}}</v-card-title>
                            </v-img>

                            <div class="d-flex justify-space-between">
                                <v-card-subtitle class="pt-4">
                                    {{item.raw.blog_subtitle}}
                                </v-card-subtitle>
                                <v-card-subtitle class="pt-4">
                                    2024-12-19
                                </v-card-subtitle>
                            </div>

                            <v-card-text>
                                {{item.raw.blog_excerpt}}
                            </v-card-text>
                        </v-card>
<!--                        <v-divider v-if="items.length != (i + 1)"></v-divider>-->
                    </template>
                </template>
            </v-data-iterator>
        </div>

        <div class="text-center pa-2 rounded-b-xl">
            <v-pagination
                color="red-accent-3"
                v-model="page"
                :length="Math.ceil(allItems.length/perPage)"
                class="rounded-b-xl"
            ></v-pagination>
        </div>
    </v-container>
</template>

<style scoped>
.v-container{
    box-shadow: var(--v-myCardElevation)!important;
}
</style>