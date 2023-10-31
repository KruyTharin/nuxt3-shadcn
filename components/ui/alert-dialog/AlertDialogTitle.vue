<script setup lang="ts">
import { AlertDialogTitle, type AlertDialogTitleProps } from 'radix-vue';
import { cn } from '@/lib/utils';
// import { UiButton } from '@/components/ui/button';

const props = defineProps<AlertDialogTitleProps & { class?: string }>();
</script>

<template>
    <AlertDialogTitle
        as="UiButton"
        :class="cn('text-lg text-foreground font-semibold', props.class)"
    >
        <slot />
    </AlertDialogTitle>
</template>
