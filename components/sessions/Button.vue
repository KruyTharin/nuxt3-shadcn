<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { BeakerIcon } from '@heroicons/vue/24/solid';
import LayoutContainer from '~/components/layout/Container.vue';

const loading = ref(false);
const clickMe = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 5000);
};
</script>

<template>
    <LayoutContainer title="Button Component">
        <div class="flex gap-5 flex-wrap">
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
                >Link</UiButton
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
    </LayoutContainer>
</template>
