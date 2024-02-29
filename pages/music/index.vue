<script setup lang="ts">

</script>

<template>
    <div class="top w-100" style="height: 30%">
        <v-sheet class="bg-myBase rounded-xl" >
            <CarouselFull/>
        </v-sheet>
    </div>

    <div class="mid">
        <SearchField/>
    </div>

    <div class="bottom w-100">
        <ItemImageGrid/>
    </div>

    <div class="blogList d-flex flex-column rounded-xl">
        <ItemRelatedBlogs/>
    </div>

</template>

<style scoped>
.top .v-sheet{
    box-shadow: var(--v-myCardElevation)!important;
}
.thumb .v-img{
    max-height: 100px;
}
</style>