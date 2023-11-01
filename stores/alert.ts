import type { buttonVariants } from '~/components/ui/button';

interface Alert {
    title?: string;
    description?: string;
    btnText?: string;
    onAccept?: Function | undefined;
    variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant'];
}

export const useAlertStore = defineStore('alert', () => {
    const state = reactive<Alert & { isOpen: boolean }>({
        isOpen: false,
        title: 'Are you absolutely sure?',
        description:
            ' This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
        btnText: 'Confirm',
        variant: 'default',
        onAccept: undefined
    });

    /**
     *
     * @param {Alert}
     * @description This function use to show alert dialog
     */
    function show({ title, description, btnText, variant, onAccept }: Alert) {
        state.description = description;
        state.title = title;
        state.isOpen = true;
        state.btnText = btnText;
        state.onAccept = onAccept;
        state.variant = variant;
    }

    function accept() {
        if (state.onAccept !== undefined) {
            state.onAccept();
        }
    }

    function hide() {
        state.isOpen = false;

        // * DELAY MODAL TO CLOSE FIRST AND CLEAR ALL PROPS
        state.onAccept = undefined;
    }
    return { state, show, accept, hide };
});
