<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
interface Props {
    title: string;
}
defineProps<Props>();
</script>

<template>
    <div class="container mt-5">
        <h2 class="mb-5 underline">{{ title }}</h2>
        <slot />
    </div>
</template>

<style lang="scss" scoped></style>
