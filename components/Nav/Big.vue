<script setup lang="ts">
const route = useRouter()
const {paths} = useFetchNav()

const path = ref(findObjectByPath(paths, route.currentRoute.value.fullPath));

watch(
    () => route.currentRoute.value.fullPath,
    (newPath) => {
        path.value = findObjectByPath(paths, newPath);
    }
);

function findObjectByPath(objArray:any, searchPath:any):any {
    for (const obj of objArray) {
        if (obj.Path && obj.Path === searchPath) {
            return obj; // Found a match at the top level
        } else if (obj.SubNav) {
            const subNavMatch = findObjectByPath(obj.SubNav, searchPath);
            if (subNavMatch) {
                return obj; // Found a match in the SubNav
            }
        }
    }

    let validPaths = [
        {rPath:'/music/', pName:'Music'},
        {rPath:'/blogs/', pName:'Home'},
        {rPath:'/art/', pName:'Art'},
        {rPath:'/literature/', pName:'Literature'},
    ]

    let objectFound = null;
    validPaths.forEach(value => {
        if(searchPath.includes(value.rPath)) {
            objectFound = objArray.find(nav => nav.Name == value.pName)
            return
        }
    })

    return objectFound;
}
String.prototype.count=function(c) {
    var result = 0, i = 0;
    for(i;i<this.length;i++)if(this[i]==c)result++;
    return result;
};
function pathHasSubNav(path) {
    let fullPath = route.currentRoute.value.fullPath
    return fullPath.includes(path) && path.split('/').length > 2
}
</script>

<template>
    <v-navigation-drawer
        width="180"
        class="bg-mySurface"
        border="0"
        permanent
    >

        <div class="d-flex justify-center flex-column h-100">
            <v-list density="comfortable" lines="one">
                <v-list-item v-for="subPath in path.SubNav" :to="subPath.Path" :title="subPath.Name" :value="subPath.Name" :class="pathHasSubNav(subPath.Path) ? 'v-list-item--active' : ''" class="mb-2 ml-2 px-5 py-3"></v-list-item>
            </v-list>
        </div>
    </v-navigation-drawer>
</template>

<style scoped>
.v-navigation-drawer{
    box-shadow: var(--v-mySideBarElevation)!important;
}
.v-list-item{
    border-top-left-radius: 24px !important;
    border-bottom-left-radius: 24px !important;
}
</style>