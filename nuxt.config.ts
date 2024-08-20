// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        }
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase", "@nuxt/image"],
  supabase: {
    redirect: false,
  }
})