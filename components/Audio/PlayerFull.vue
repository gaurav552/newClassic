<script setup lang="ts">
import SiriWave from "siriwave";

let volume = ref(100)
let progress = ref(44)
let waveRef: Ref<SiriWave | null> = ref(null);
let isWaveStarted = ref(false);

let showProgressSlider = ref(false)

onMounted(() =>{
    const waveContainer = document.querySelector('.wave');
    if(!waveContainer) return;
    waveRef.value = new SiriWave({
        container: document.querySelector(".wave")!,
        width: document.querySelector(".wave")!.clientWidth,
        height: 250,
        speed: 0.01,
        amplitude: 0.0,
        frequency: 1.8,
    })
    wavePlayPause(false)
})

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

const toggleProgressSlider = () => {
    showProgressSlider.value = !showProgressSlider.value
}

</script>

<template>
    <v-sheet height="100%" class="rounded-xl bg-mySurface overflow-hidden d-flex flex-column justify-space-between">
        <div class="top d-flex justify-space-between align-center pa-7">
            <span>2:34</span>
            <div class="text-h6">Beethoven - violin sonata No. 5</div>
            <span>7:34</span>
        </div>
        <div class="mid" @mouseenter="toggleProgressSlider" @mouseleave="toggleProgressSlider" >
            <div class="wave" :style="showProgressSlider ?(!isWaveStarted ? 'visibility: hidden' : 'opacity: 0.1'):''"></div>
            <div class="progress" v-if="showProgressSlider">
                <v-slider track-size="2" thumb-size="15" class="progressSlider" color="red-darken-3" v-model="progress" hide-details="auto" min="0" max="100"></v-slider>
            </div>
        </div>
        <div class="bot d-flex justify-space-between align-center pa-7">
            <div class="playlist w-33">
                <v-btn variant="tonal" icon="mdi-playlist-music"></v-btn>
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
    </v-sheet>
</template>

<style scoped>
.mid{
    position: relative;
}
.wave{
    pointer-events: none;
}
.progress{
    position: absolute;
    z-index: 1;
    inset: 0;
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
}
.top, .bot, .progress, .volumeSlider{
    z-index: 9999;
}
.progress{
    display: flex;
    justify-content: center;
    align-items: center;
}
canvas{
    z-index: 1;
    pointer-events: none;
}
</style>