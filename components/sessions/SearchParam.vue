<script setup lang="ts">
import debounce from 'lodash.debounce';
import { useUrlSearchParams } from '@vueuse/core';
import LayoutContainer from '~/components/layout/Container.vue';
import getURLParams from '@/lib/searchParams';

type Data = Array<{ id: string; text: string }>;
const mockData = ref<Data>([
    {
        id: '1',
        text: 'cat'
    },
    {
        id: '2',
        text: 'cat1'
    },
    {
        id: '3',
        text: 'dog'
    },
    {
        id: '2',
        text: 'dog1'
    }
]);

const params = useUrlSearchParams('history');
const searchParams = getURLParams('search');
const filterData = ref<Data>([]);
const value = ref();

const debouncedWatch = debounce(() => {
    console.log(value.value, 'New Value');

    filterData.value = mockData.value.filter((data) =>
        data.text.includes(params.search as string)
    );
}, 500);

watch(value, debouncedWatch);
watch(value, (v) => {
    params.search = v;
});

onMounted(() => {
    value.value = params.search;

    if (searchParams) {
        filterData.value = mockData.value.filter((data) =>
            data.text.includes(params.search as string)
        );
    }
});

onBeforeUnmount(() => {
    debouncedWatch.cancel();
});
</script>

<template>
    <LayoutContainer title="Search Params">
        <UiInput
            v-model="value"
            placeholder="What are you looking for?"
            class="mb-5"
        />
        <div v-for="data in filterData" :key="data.id">
            <span>{{ data.text }}</span>
        </div>
    </LayoutContainer>
</template>

<style lang="scss" scoped></style>
