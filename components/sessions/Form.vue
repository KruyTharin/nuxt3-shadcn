<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import LayoutContainer from '~/components/layout/Container.vue';

import { Button } from '@/components/ui/button';
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormInput
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = toTypedSchema(
    z.object({
        username: z.string().min(1).max(18),
        phone: z.string().regex(
            // Regular expression for various phone number formats
            /^([\+]?[0-9]{1,3})?[-\s]?[\d]{3}[\-\s]?[\d]{3}[\-\s]?[\d]{4}$/
        )
    })
);

const form = useForm({
    validationSchema: formSchema
});

const onSubmit = form.handleSubmit((values) => {
    console.log('Form submitted!', values);
});
</script>

<template>
    <LayoutContainer title="Form Component">
        <form @submit="onSubmit">
            <FormField v-slot="{ componentField }" name="username">
                <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <Input
                            type="text"
                            placeholder="shadcn"
                            v-bind="componentField"
                        />
                    </FormControl>
                    <FormDescription>
                        This is your public display name.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            </FormField>

            <!-- FormInput Component -->
            <FormField v-slot="{ componentField }" name="phone">
                <FormInput
                    label="phone number"
                    type="string"
                    placeholder="Your PhoneNumber"
                    v-bind="componentField"
                />
            </FormField>
            <Button type="submit"> Submit </Button>
        </form>
    </LayoutContainer>
</template>
