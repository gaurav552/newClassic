<script setup lang="ts">

    let {data:sanityComposers} = await fetchSanityComposers()
    let composers = sanityComposers.value

    let headline = pageHeadline()
    let subHeadline = pageSubHeadline()
    let pgIcon = pageIcon()
    let back = pageBackRoute()
    let crumbs = pageBreadCrumbs()

    let breadCrumbs = [{name:'Home',path:'/'},{name:'Music',path:'/music'}, {name:'Composers',path:'/music/composers'}]

    headline.value = 'Composers Home'
    subHeadline.value = 'View all classical composers their music and facts about their life.'
    pgIcon.value = 'mdi-music-clef-treble'
    back.value = '/music'
    crumbs.value = breadCrumbs
</script>

<template>
    <div class="top w-100 d-flex flex-column ga-4 align-start">

        <v-card color="red-darken-4" variant="tonal" class="rounded-t-xl pa-2 w-100" elevation="1" title="Featured Composers"></v-card>

        <div class="d-flex w-100 ga-4">
            <v-card height="600px" hover style="width: calc(75%)" link :to="`/music/composers/composer-${composers[2]._id}`">
                <ItemSubPageCardInternal :composer="composers[2]" />
            </v-card>

            <div class="d-flex flex-column ga-4" height="600px" style="width: calc(25% - 10px)">
                <v-card hover height="190px" link :to="`/music/composers/composer-${composers[2]._id}`">
                    <ItemSubPageCardInternal :composer="composers[1]" />
                </v-card>
                <v-card hover height="190px" link :to="`/music/composers/composer-${composers[0]._id}`">
                    <ItemSubPageCardInternal :composer="composers[0]" />
                </v-card>
                <v-card hover height="190px" link :to="`/music/composers/composer-${composers[3]._id}`">
                    <ItemSubPageCardInternal :composer="composers[3]" />
                </v-card>
            </div>
        </div>
        <div class="d-flex w-100 ga-4">
            <v-card height="190px" hover class="w-25" link :to="`/music/composers/composer-${composers[4]._id}`">
                <ItemSubPageCardInternal :composer="composers[4]" />
            </v-card>
            <v-card height="190px" hover class="w-25" link :to="`/music/composers/composer-${composers[5]._id}`">
                <ItemSubPageCardInternal :composer="composers[5]" />
            </v-card>
            <v-card height="190px" hover class="w-25" link :to="`/music/composers/composer-${composers[6]._id}`">
                <ItemSubPageCardInternal :composer="composers[6]" />
            </v-card>
            <v-card height="190px" hover class="w-25" link :to="`/music/composers/composer-${composers[7]._id}`">
                <ItemSubPageCardInternal :composer="composers[7]" />
            </v-card>
        </div>
    </div>

    <v-card variant="tonal" color="red-darken-4" elevation="1" class="rounded-lg px-9 py-5 bg-mySurface">
        <v-text-field
            label="Search Composers"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            density="compact"
        >
            <template v-slot:append>
                <v-btn variant="tonal">
                    <v-icon icon="mdi-filter-variant" start></v-icon>

                    Sort By
                    <v-menu activator="parent">
                        <v-list>
                            <v-list-item link><v-list-item-title>Composer Name</v-list-item-title></v-list-item>
                            <v-list-item link><v-list-item-title>Composed Age</v-list-item-title></v-list-item>
                            <v-list-item active link><v-list-item-title>Composer Popularity</v-list-item-title></v-list-item>
                        </v-list>
                    </v-menu>
                </v-btn>
            </template>
        </v-text-field>
    </v-card>

    <div class="bottom w-100">
        <ItemImageGrid :masonry="false"/>
    </div>

    <div class="blogList d-flex flex-column rounded-xl">
        <ItemRelatedBlogs/>
    </div>
</template>

<style scoped>

</style>