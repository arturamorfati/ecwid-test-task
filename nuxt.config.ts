// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    baseURL: "/ecwid-test-task/",
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxtjs/tailwindcss", "shadcn-nuxt", "@vueuse/nuxt", "@pinia/nuxt"],
  shadcn: {
    componentDir: "@/components/ui",
  },
  imports: {
    autoImport: false,
  },
});
