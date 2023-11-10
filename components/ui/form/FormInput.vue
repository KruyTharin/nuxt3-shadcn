<script setup lang="ts">
import { Input } from '../input';
import {
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';

defineOptions({
    inheritAttrs: false
});

interface Props {
    label: string;
    description?: string;
}
defineProps<Props>();

const { placeholder, type, ...rest } = useAttrs();
</script>

<template>
    <FormItem>
        <FormLabel>{{ label }}</FormLabel>
        <FormControl>
            <Input :type="type" :placeholder="placeholder" v-bind="rest" />
        </FormControl>
        <FormDescription> {{ description }} </FormDescription>
        <FormMessage />
    </FormItem>
</template>

<style lang="scss" scoped></style>
