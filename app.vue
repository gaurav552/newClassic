<template>

    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>

</template>

<script setup lang="ts">

</script>

<style scoped>
.v-parallax img{
    object-position: bottom;
}

top .v-carousel, titleCard{
    box-shadow: var(--v-myCardElevation)!important;
}


.titleSheet{
    background: transparent;
    position: relative;
}

.titleSheet::after{
    content: '';
    background: currentColor;
    opacity: var(--v-activated-opacity);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    border: inherit;
    border-radius: inherit;
}

.v-img{
    max-height: calc(700px - 120px);
    width: auto;
}
.thumb .v-img{
    max-height: 100px;
}

</style>