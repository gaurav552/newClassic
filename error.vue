<script setup>

const err = useError()
const handleErr = () => {
    clearError({redirect:'/'})
}
const router = useRouter();


const refreshPage = () => {
    navigateTo(router.currentRoute.value)
};
const goBack = () => {
    if (window.history.length > 1) {
        router.back(); // Go back to the previous page
    } else {
        router.push('/');
    }
};
</script>

<template>
    <v-layout class="rounded rounded-md text-myColor" theme="myDarkTheme">

        <NavSmall/>
        <NavBig/>
        <NavFooter/>

        <v-main class="d-flex align-start justify-center bg-myBase" style="min-height: 300px;height: 100vh">
            <div class="d-flex flex-column px-10 pb-10 ga-10 w-100 justify-start v-container h-100" style="max-width: 1400px;padding-top: 165px">
                <v-sheet elevation="1" class="px-6 py-8 rounded-b-xl d-flex flex-column ga-3 align-start elevation-2 titleSheet text-myColor">
                    <div class="d-flex align-center ga-4 w-100" style="z-index: 1">
                        <v-icon icon="mdi-alert-circle" color="red-darken-4" size="60"></v-icon>
                        <div class="d-flex flex-column text-myColor w-66">
                            <h2>Not so classy</h2>
                            <p class="text-subtitle-2">You are looking for something that does not exist my friend.</p>
                        </div>
                    </div>
                </v-sheet>
                <v-container v-if="err" class="h-100 w-100 d-flex flex-column ga-10 align-center justify-center">
                    <h3 class="text-h5">{{err.statusMessage ? err.statusMessage : err.message}}</h3>
                    <p class="text-h2">{{err.statusCode}}</p>
                    <div class="d-flex ga-5 mt-14">
                        <v-btn color="success" @click="refreshPage" variant="tonal">Refresh</v-btn>
                        <v-btn color="red-darken-3" @click="goBack" variant="tonal">Go back</v-btn>
                    </div>
                </v-container>
            </div>
        </v-main>
    </v-layout>
</template>

<style scoped>
.v-container{
    position: relative;
}
.titleSheet{
    position: fixed;
    top:0;
    width: calc(1400px - 80px);
    z-index: 99999;
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    box-shadow: inset 0 0 0 200px rgba(255,255,255,0.08);
    background-color: var(--v-surface2);
}
</style>