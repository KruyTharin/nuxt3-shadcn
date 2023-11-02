<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from '@/components/ui/alert-dialog';
import LayoutContainer from '~/components/layout/Container.vue';
import { useAlertStore } from '@/stores/alert';

// access the `store` variable anywhere in the component ✨
const alert = useAlertStore();
const { state } = storeToRefs(alert);
const isLoading = ref(false);

const onOpenDialog = () => {
    alert.show({
        title: 'title',
        description: 'description',
        btnText: 'Reject',
        variant: 'destructive',
        onAccept: onConfirm
    });
};

const onConfirm = () => {
    isLoading.value = true;

    // TODO: request api instead of setTimeout
    setTimeout(() => {
        isLoading.value = false;
        // Check if data respond success close dialog
        alert.hide();
    }, 500);
};
</script>

<template>
    <LayoutContainer title="Alert Dialog with Pinia state">
        <AlertDialog :open="state.isOpen">
            <UiButton @click="onOpenDialog">Open</UiButton>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{{ state.title }}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {{ state.description }}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <UiButton variant="outline" @click="alert.hide()"
                        >Cancel</UiButton
                    >
                    <UiButton
                        :loading="isLoading"
                        :variant="state.variant"
                        @click="alert.accept()"
                        >{{ state.btnText }}</UiButton
                    >
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </LayoutContainer>
</template>
