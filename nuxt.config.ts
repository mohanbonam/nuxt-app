// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "My Nuxt App",
      meta: [{ name: "description", content: "My amazing site." }],
    },
  },
  devtools: { enabled: true },
});
