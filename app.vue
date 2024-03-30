<template>

    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>

</template>

<script setup lang="ts">

</script>

<style>
.scroll-fancy::-webkit-scrollbar {
    width: 20px;
}

.scroll-fancy::-webkit-scrollbar-track {
    background-color: transparent;
}

.scroll-fancy::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
}

.scroll-fancy::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
}
</style>