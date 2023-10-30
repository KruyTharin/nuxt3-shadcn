<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { BeakerIcon } from '@heroicons/vue/24/solid';
const loading = ref(false);
const clickMe = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 5000);
};
</script>

<template>
    <div class="container mt-5">
        <h2 class="mb-5 underline">Button Component</h2>
        <div class="flex gap-5">
            <UiButton variant="destructive" size="lg">Click me</UiButton>
            <UiButton variant="destructive" size="lg" :icon-left="BeakerIcon"
                >Click me</UiButton
            >
            <UiButton variant="ghost" size="lg" :icon-right="BeakerIcon"
                >Click me</UiButton
            >
            <UiButton variant="default" size="default">Click me</UiButton>
            <UiButton variant="outline" size="sm">Click me</UiButton>
            <UiButton variant="link" size="sm" to="/" target="_blank"
                >Click me</UiButton
            >

            <UiButton
                variant="destructive"
                size="lg"
                :loading="loading"
                :icon-right="BeakerIcon"
                @click="clickMe"
                >Click me</UiButton
            >

            <UiButton
                variant="destructive"
                size="lg"
                :loading="true"
                :icon-right="BeakerIcon"
                @click="clickMe"
                >Click me</UiButton
            >
        </div>
    </div>
</template>
