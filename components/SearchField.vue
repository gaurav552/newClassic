<script setup lang="ts">


let props = defineProps({
    label: String,
    sortDefault:String,
    sortList: Array<Object>,
    searchQuery: String,
    searchingMultiple: String
})
let currentSelected = ref<string>(props.sortDefault??'')
let currentDirection = ref('asc')

let emit = defineEmits(['searchResults', 'searchClose', 'searching'])
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
let searchResults = ref<Object[]>([])
let searching = ref(false)
let searchMgs = ref({msg: '', status: ''})

let handleSearchKeyChange = async (value:string) => {
    loading.value = value.length > 3
    if(value.length > 3) {

        let sortVal = {
            sort1: currentSelected.value == 'name' ? 'firstName' : 'dateOfBirth',
            sort2: currentSelected.value == 'name' ? 'name': 'year'
        }

        const {data} = await sanityPaginatedSearch(props.searchQuery??'',value+"*",sortVal, currentDirection.value, 'Error fetching searched result')
        emit('searching')
        loading.value = false
        searching.value = true
        searchResults.value = data.value

        const totalResults = props.searchingMultiple == 'Works' || props.searchingMultiple == 'Persons' ?
            searchResults.value.length:
            searchResults.value.composers.length + searchResults.value.compositions.length ;

        const successMessage = totalResults > 0 ?
            `Found ${totalResults} result${totalResults > 1 ? 's' : ''} for search term '${value}'` :
            `Found 0 result for search term '${value}'`;

        searchMgs.value.msg = successMessage;
        searchMgs.value.status = totalResults > 0 ? 'success' : 'error';

    } else {
        emit('searchClose')
        searching.value = false
    }
}

</script>

<template>
    <div>
        <v-card variant="tonal" color="mySurface" elevation="1" :class="`rounded-lg px-9 py-5 bg-mySurface ${searching ? 'mb-5' : ''}`">
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

        <div class="bottom w-100" v-if="searching">
            <v-alert class="mb-8" variant="tonal" :color="searchMgs.status" :text="searchMgs.msg"></v-alert>
            <ItemImageGrid
                v-if="searchMgs.status == 'success'"
                :people="searchingMultiple != 'Persons' && searchingMultiple != 'Works' ? searchResults.composers : (searchingMultiple == 'Persons' ? searchResults : [])"
                :work="searchingMultiple != 'Persons' && searchingMultiple != 'Works' ? searchResults.compositions : (searchingMultiple == 'Works' ? searchResults : [])"
                :masonry="false"
            ></ItemImageGrid>
        </div>
    </div>
</template>

<style scoped>

</style>