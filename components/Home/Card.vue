<script setup lang="ts">
    import {useTheme} from "vuetify";

    const prop =defineProps({
        cardData:Object
    })

    const theme = useTheme()

</script>

<template>
    <v-card link :to="cardData.path" class="rounded-xl h-50">
        <v-img
            :src="`${cardData.image}`"
            :lazy-src="`${cardData.image}`"
            class="text-right align-end pb-10 pr-10 h-100"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            cover
            position="center"
        >
            <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                    <v-progress-circular
                        indeterminate
                        color="grey-lighten-5"
                    ></v-progress-circular>
                </v-row>
            </template>
            <v-card-title :class="`text-white text-h2 text-teal-darken-1`"
                          style="letter-spacing: 3px!important" v-text="cardData.title"></v-card-title>
        </v-img>
    </v-card>
</template>

<style scoped>
.v-card{
    box-shadow: var(--v-myCardElevation)!important;
}

</style>