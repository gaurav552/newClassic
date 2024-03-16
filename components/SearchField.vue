<script setup lang="ts">
let props = defineProps({
    label: String,
    sortDefault:String,
    sortList: Array<Object>
})
let currentSelected = ref(props.sortDefault)
let currentDirection = ref('asc')

let emit = defineEmits(['searchResults', 'searchClose'])
const handleSortSelection = (selected:string) => {
    if(currentSelected.value == selected){
        if(currentDirection.value == 'asc'){
            currentDirection.value = 'desc'
        } else {
            currentDirection.value = 'asc'
        }
    } else {
        currentSelected.value = selected
        currentDirection.value = 'asc'
    }
}

let searchKey = ref('')
let loading = ref(false)
let handleSearchKeyChange = async (value:string) => {
    loading.value = value.length > 3
    if(value.length > 3) {
        const {data} = await sanityPaginatedSearch(value+"*", 'Error fetching searched result')
        emit('searchResults', data.value)
        loading.value = false
    } else {
        emit('searchClose')
    }
}

</script>

<template>
    <v-card variant="tonal" color="mySurface" elevation="1" class="rounded-lg px-9 py-5 bg-mySurface">
        <v-text-field
            :label="label"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            density="compact"
            class="rounded-xl text-myColor"
            v-model="searchKey"
            @keyup="handleSearchKeyChange(searchKey)"
            :loading="loading"
        >
            <template v-slot:append>
                <v-btn variant="tonal">
                    <v-icon icon="mdi-filter-variant" start></v-icon>

                    Sort By
                    <v-menu activator="parent" :close-on-content-click="false">
                        <v-list>
                            <v-list-item
                                @click="handleSortSelection(sorter.value)"
                                :active="sorter.value == currentSelected"
                                v-for="sorter in sortList"
                                :key="sorter.name"
                            >
                                <div class="d-flex ga-3">
                                    <v-icon :icon="currentDirection == 'desc' && sorter.value == currentSelected ? 'mdi-menu-down' : 'mdi-menu-up'"></v-icon>
                                    <v-list-item-title>{{ sorter.name }}</v-list-item-title>
                                </div>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-btn>
            </template>
        </v-text-field>
    </v-card>
</template>

<style scoped>

</style>