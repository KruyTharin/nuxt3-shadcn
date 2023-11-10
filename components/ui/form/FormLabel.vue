<script lang="ts" setup>
import { Label, type LabelProps } from 'radix-vue';
import { useFormField } from './useFormField';
import { cn } from '@/lib/utils';

defineOptions({
    inheritAttrs: false
});
defineProps<LabelProps>();

const { error, formItemId } = useFormField();
const { class: className, ...rest } = useAttrs();
</script>

<template>
    <Label
        :class="
            cn(
                'block text-sm tracking-tight font-medium text-foreground text-left',
                error && 'text-destructive',
                className ?? ''
            )
        "
        :for="formItemId"
        v-bind="rest"
    >
        <slot />
    </Label>
</template>
