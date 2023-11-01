// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    components: [
        {
            path: '~/components/ui',
            // this is required else Nuxt will autoImport `.ts` file
            extensions: ['.vue'],
            // prefix for your components, eg: UiButton
            prefix: 'Ui'
        },
        {
            path: '~/components/sessions',
            // this is required else Nuxt will autoImport `.ts` file
            extensions: ['.vue'],
            // prefix for your components, eg: UiButton
            prefix: 'Sessions'
        }
    ]
});
