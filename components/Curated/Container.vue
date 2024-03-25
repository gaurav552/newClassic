<script setup lang="ts">
    defineProps({
        editorPicks: {
            type:Object,
            required: true
        }
    })
    const {getYear} = useUtilities()

    let gradient = ref(isDarkMode().value ? 'rgba(0,0,0,.2), rgba(0,0,0,.8)' : 'rgba(255,255,255,.2), rgba(255,255,255,.7)')
    let textClass = ref(isDarkMode().value ? 'text-white' : 'text-black')
    watch(isDarkMode(), () => {
        gradient.value = isDarkMode().value ? 'rgba(0,0,0,.2), rgba(0,0,0,.8)' : 'rgba(255,255,255,.2), rgba(255,255,255,.7)'
        textClass.value = isDarkMode().value ? 'text-white' : 'text-black'
    })

    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDownHandler = (e) => {
        isDown = true;
        startX = e.pageX - e.target.offsetLeft;
        scrollLeft = e.target.scrollLeft;
    }
    const mouseLeaveHandler = (e) => {
        isDown = false;
    }
    const mouseUpHandler = (e) => {
        isDown = false;
    }
    const mouseMoveHandler = (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - e.target.offsetLeft;
        const walk = (x - startX) * 3;
        e.target.scrollLeft = scrollLeft - walk;
    }
</script>

<template>
    <v-sheet class="d-flex elevation-0 bg-myBase w-100 position-relative" height="350px" style="overflow: clip">
        <v-card class="left w-33 elevation-0">
            <v-img
                :src="editorPicks.mainImage"
                cover height="100%"
                :lazy-src="editorPicks.mainImage"
                class="align-end pb-4"
                :gradient="`to bottom, ${gradient}`"
            >
                <v-card-title>{{ editorPicks.name }}</v-card-title>
                <v-card-subtitle>{{ getYear(editorPicks.dateOfBirth)+' - '+getYear(editorPicks.dateOfDeath) }}</v-card-subtitle>
            </v-img>
        </v-card>
        <div
            class="right w-75 d-flex pa-10 rounded-xl"
            style="overflow-x:scroll"
            @mousedown="mouseDownHandler($event)"
            @mouseleave="mouseLeaveHandler($event)"
            @mouseup="mouseUpHandler($event)"
            @mousemove="mouseMoveHandler($event)"
        >

            <v-hover v-for="pick in editorPicks.editorPicks" v-slot="{ isHovering, props }">
                <v-card
                    height="100%"
                    v-bind="props"
                    width="450px"
                    min-width="350px"
                    class="d-flex flex-column bg-mySurface pa-4 rounded-xl hoverCard"
                    :style="isHovering ? 'transform: translateY(-16px);' : '' "
                >
                    <div class="d-flex flex-column">
                        <div class="d-flex justify-space-between align-center">
                            <v-card-title>{{ pick.name }}</v-card-title>
                            <v-card-subtitle>{{ pick.compositionKey ? pick.compositionKey : 'E - Major' }}</v-card-subtitle>
                        </div>
                        <v-card-subtitle>{{ pick.year }}</v-card-subtitle>
                    </div>
                    <div class="d-flex mt-10 ga-5 justify-center align-center">
                        <v-btn icon="mdi-playlist-plus" size="small" variant="tonal"></v-btn>
                        <v-btn icon="mdi-play" size="large" variant="tonal"></v-btn>
                        <v-btn color="red-darken-4" icon="mdi-heart-outline" size="small" variant="tonal"></v-btn>
                    </div>
                </v-card>
            </v-hover>
        </div>
    </v-sheet>
</template>

<style scoped>
/* custom scrollbar */
::-webkit-scrollbar {
    width: 20px;
}

::-webkit-scrollbar-track {
    background-color: transparent;
}

::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
}
.hoverCard{
    transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
    cursor: default;
}
.hoverCard:not(:first-child){
    margin-left: -160px;
}
.hoverCard:hover~.hoverCard{
    transform: translateX(160px);
}
.v-theme--myLightTheme .hoverCard{
    box-shadow: -1px -0 12px #888 !important;
}
.v-theme--myDarkTheme .hoverCard{
    box-shadow: -1px -0 12px #090909 !important;
}

.v-sheet{
    cursor: grab;
}

.v-sheet:focus{
    cursor: grabbing;
}

.v-sheet:after{
    content: "";
    position: absolute;
    border-radius: inherit;
    top: 20px;
    right: 0;
    bottom: 35px;
    z-index: 1;
    width: 3px;
    background-color: rgb(var(--v-theme-myShadowColor));
    box-shadow: var(--v-containerShadow);
}

</style>