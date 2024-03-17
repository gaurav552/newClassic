<script setup lang="ts">
const route = useRouter()
const {paths} = useFetchNav()

const path = ref(findObjectByPath(paths, route.currentRoute.value.fullPath));
let show = ref(true)
watch(() => route.currentRoute.value.fullPath, (newVal, oldVal) => {
    if(newVal != oldVal) {
        path.value = findObjectByPath(paths, newVal)
        show.value = false
        setTimeout(()=>{
            show.value = true
        }, 200)
    }
})



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


function pathHasSubNav(path) {
    let fullPath = route.currentRoute.value.fullPath
    if(fullPath.split('/').length > 3){
        return fullPath.includes(path) && path.split('/').length >= 3
    }
    if(fullPath.includes('/blogs/')){
        return path.includes('/blogs')
    }

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
                <v-list-item
                    v-for="subPath in path.SubNav"
                    :to="subPath.Path"
                    :title="subPath.Name"
                    :value="subPath.Name"
                    active-class="custom-active-class"
                    :active="pathHasSubNav(subPath.Path)"
                    class="mb-2 ml-2 pl-7 pr-2 py-3 text-myColor"></v-list-item>
            </v-list>
        </div>
    </v-navigation-drawer>
</template>

<style scoped>
.v-navigation-drawer{
    box-shadow: var(--v-mySideBarElevation)!important;
}

.v-list-item{
    --v-activated-opacity: 0;
    --v-hover-opacity: 0;
    position: relative;
    color: var(--v-theme-myColor);
    transition: color 0.2s ease-in-out;
}
.v-list-item:after{
    content: " ";
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 10px;
    top: 50%;
    background: currentColor;
    transform: translateY(-50%);
    opacity: 0;
    left: 8px;
}
.v-list-item:not(.custom-active-class):hover{
    color: var(--v-theme-myColorDeeper)!important;
}
.v-list-item:hover:after{
    opacity: 1;
}
.custom-active-class{
    color: red!important;
}
.custom-active-class:after{
    opacity: 1;
}

</style>