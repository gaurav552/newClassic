<script setup lang="ts">
import SiriWave from "siriwave";

let volume = ref(100)
let progress = ref(44)
let waveRef: Ref<SiriWave | null> = ref(null);
let isWaveStarted = ref(false);
let sliderIsClicked = ref(false)
let mouseInRange = ref(false)
let showProgressSlider = ref(false)
let playlistShow = ref(false)


function initializeWave() {
    const waveContainer = document.querySelector('.wave');
    if (!waveContainer) return;

    waveRef.value = new SiriWave({
        container: document.querySelector(".wave")!,
        width: document.querySelector(".wave")!.clientWidth + 5,
        height: 250,
        speed: 0.01,
        color: isDarkMode().value ? "#ffffff" : "#000000",
        amplitude: 0.0,
        frequency: 1.8,
    });

    wavePlayPause(isWaveStarted.value);
}

onMounted(initializeWave);

watch(isDarkMode, () => {
    let phase = waveRef.value?.phase;
    waveRef.value?.stop();
    waveRef.value?.dispose();

    initializeWave();
    wavePlayPause(isWaveStarted.value);
    waveRef.value.phase = phase;
});

const wavePlayPause = (setValue?:boolean) => {
    if (setValue == undefined) {
        setValue = !isWaveStarted.value;
    }

    const speed = setValue ? 0.01 : 0;
    const amplitude = setValue ? 1 : 0;
    waveRef.value?.setSpeed(speed);
    waveRef.value?.setAmplitude(amplitude);
    isWaveStarted.value = setValue;
}


const mouseIn = () => {
    showProgressSlider.value = true
    mouseInRange.value = true
}

const MouseOut = () => {
    mouseInRange.value = false
    if(!sliderIsClicked.value){
        showProgressSlider.value = false
    }
}

const sliderClickIn = () => {
    sliderIsClicked.value = true
}

const sliderClickOut = () => {
    sliderIsClicked.value = false
    if(!mouseInRange.value){
        showProgressSlider.value = false
    }
}


</script>

<template>
    <v-sheet height="100%" class="rounded-xl bg-mySurface overflow-hidden d-flex flex-column justify-space-between">
        <div class="top d-flex justify-space-between align-center pa-7">
            <span>2:34</span>
            <div class="text-h6">Beethoven - violin sonata No. 5</div>
            <span>7:34</span>
        </div>
        <div class="mid" @mouseenter="mouseIn" @mouseleave="MouseOut">
            <div class="wave" :style="!showProgressSlider ?'opacity: 0.9' : 'opacity: 0.1'"></div>
            <div class="progress" :style="showProgressSlider ?'opacity: 0.9' : 'opacity: 0'">
                <v-slider @focusin="sliderClickIn" @focusout="sliderClickOut" track-size="3" thumb-size="15" class="progressSlider ma-0" color="red-darken-3" v-model="progress" hide-details="auto" min="0" max="100"></v-slider>
            </div>
        </div>
        <div class="bot d-flex justify-space-between align-center pa-7">
            <div class="playlist w-33">
                <v-btn variant="tonal" @click="playlistShow = !playlistShow" icon="mdi-playlist-music"></v-btn>
            </div>
            <div class="controls d-flex ga-3 align-center justify-center" style="width: 34%">
                <v-btn variant="tonal" size="small" icon="mdi-skip-previous"></v-btn>
                <v-btn variant="tonal" size="large" :icon="isWaveStarted ? 'mdi-pause' : 'mdi-play'" @click="wavePlayPause()"></v-btn>
                <v-btn variant="tonal" size="small" icon="mdi-skip-next"></v-btn>
            </div>
            <div class="volumeButton d-flex ga-4 w-33 align-center justify-end">
                <div class="slide" style="width: 100px" >
                    <v-slider track-size="2" thumb-size="12" class="volumeSlider" color="red-darken-3" v-model="volume" step="1" hide-details="auto" min="0" max="100"></v-slider>
                </div>
                <v-btn variant="tonal" class="volumeToggle" icon="mdi-volume-high"></v-btn>
            </div>
        </div>

        <v-overlay
            :model-value="playlistShow"
            class="align-center justify-center"
            style="z-index: 99999999"
            scrim="#C62828"
            contained
            @click:outside="playlistShow = !playlistShow"
        >
            <v-card
                max-width="300"
                min-width="400px"
                height="400px"
                class="rounded-xl"
            >
                <v-list>
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
                <v-list lines="two" class="scroll-fancy" style="height: 330px;overflow-y: auto">
                    <v-list-item
                        v-for="(item, i) in 15"
                        :key="i"
                    >
                        <template v-slot:prepend>
                            <v-btn size="small" class="mr-7" icon="mdi-play"></v-btn>
                        </template>
                        <v-list-item-title v-text="`List item ${i + 1}`"></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-overlay>
    </v-sheet>
</template>

<style scoped>
.mid{
    position: relative;
}
.wave{
    pointer-events: none;
}

.wave, .progress{
    transition: opacity 0.2s ease-in-out;
}
.progress{
    position: absolute;
    z-index: 1;
    inset: 0;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -18px;
}
.top, .bot, .progress, .volumeSlider{
    z-index: 9999;
}

.top, .bot{
    height: 115px;
}

canvas{
    z-index: 1;
    pointer-events: none;
}

.v-slider.v-input--horizontal .v-slider-track{
    height: 2px !important;
}
</style>