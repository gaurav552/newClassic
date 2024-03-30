<script setup lang="ts">
defineProps({
    composers: Array<Object>
})

let gradient = ref(isDarkMode().value ? 'rgba(0,0,0,.5), rgba(0,0,0,.8)' : 'rgba(255,255,255,.2), rgba(255,255,255,.7)')
let textClass = ref(isDarkMode().value ? 'text-grey' : 'text-black')
let listColor = ref(isDarkMode().value ? 'grey-lighten-3' : 'grey-darken-3')
watch(isDarkMode(), () => {
    gradient.value = isDarkMode().value ? 'rgba(0,0,0,.5), rgba(0,0,0,.8)' : 'rgba(255,255,255,.2), rgba(255,255,255,.7)'
    textClass.value = isDarkMode().value ? 'text-grey' : 'text-black'
    listColor = ref(isDarkMode().value ? 'grey-lighten-3' : 'grey-darken-3')
})
</script>

<template>
    <v-row>
        <v-col v-for="composer in composers" :key="composer._id" cols="6">
            <v-card class="rounded-xl bg-mySurface text-myColor" height="640px" elevation="0">
                <v-img
                    :src="composer.mainImage"
                    cover width="100%"
                    height="100%"
                    :gradient="`to top, ${gradient}`"
                >
                    <div class="d-flex flex-column ga-4 align-center justify-center" style="width: 100%; height: 100%">
                        <ItemSubPageGenreListInternal :composer="composer"></ItemSubPageGenreListInternal>
                    </div>
                </v-img>
            </v-card>
        </v-col>
    </v-row>
</template>

<style scoped>

</style>