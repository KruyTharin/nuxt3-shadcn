<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/require-default-prop -->
<script setup lang="ts">
import { buttonVariants } from '.';
import { cn } from '@/lib/utils';

interface Props {
    variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant'];
    size?: NonNullable<Parameters<typeof buttonVariants>[0]>['size'];
    iconLeft?: Object;
    iconRight?: Object;
    as?: string;
    to?: string;
    loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    as: 'button',
    loading: false
});

defineEmits(['click']);

const componentToDisplay = computed(() =>
    props.to ? resolveComponent('NuxtLink') : 'button'
);
</script>

<template>
    <component
        :is="componentToDisplay"
        :to="to"
        :class="cn(buttonVariants({ variant, size }))"
        :disabled="loading"
        @click="$emit('click')"
    >
        <svg
            v-if="loading"
            class="h-5 w-5 animate-spin absolute"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
            ></circle>
            <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>

        <component
            :is="props.iconLeft"
            :class="['mr-2 h-5 w-5', props.loading && 'invisible']"
        />

        <span :class="[props.loading && 'invisible']">
            <slot />
        </span>

        <component
            :is="props.iconRight"
            :class="['ml-2 h-5 w-5', props.loading && 'invisible']"
        />
    </component>
</template>
