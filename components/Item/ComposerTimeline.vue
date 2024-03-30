<script setup lang="ts">
function clipTextWithEllipsis(text, maxLength) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength - 3) + '...';
    }
    return text;
}

defineProps({
    timeline:Array
})
</script>

<template>
    <v-timeline align="start" direction="horizontal" class="text-myColor pb-4 overflow-auto">
        <v-timeline-item
            v-for="(year, i) in timeline"
            :key="i"
            :dot-color="year.color"
            size="small"
            width="230px"
        >
            <template v-slot:opposite>
                <div
                    :class="`pt-1 headline font-weight-bold text-${year.color}`"
                    v-text="year.year"
                ></div>
            </template>
            <div>
                <h3 :class="`mt-n1 headline mb-3 text-${year.color}`">
                    {{ year.title }}
                </h3>
                <p class="text-subtitle-2">
                    {{ clipTextWithEllipsis(year.description, 130) }}
                </p>
            </div>
        </v-timeline-item>
    </v-timeline>
</template>

<style scoped>

</style>