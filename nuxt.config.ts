// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  css: ['@/assets/sass/style.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@use "@/assets/sass/helpers/_helpers.scss" as *;',
          // additionalData: '@use "@/assets/scss/_var.scss" as *;',
        },
      },
    },
  },
  modules: [
    // '@nuxtjs/i18n',
    // 'nuxt-icon',
    // '@nuxt/ui',
    // [
    //   '@pinia/nuxt',
    //   { autoImports: ['settingsGlobal'] } /* لتسهيل عملية الإستيراد المخاذن */,
    // ],
    // '@pinia-plugin-persistedstate/nuxt',
    // '@vite-pwa/nuxt',
    // '@nuxtjs/tailwindcss',
  ],
  // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      title: 'BomBa-Nuxt',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://ik.imagekit.io/BomBa001/publicImages/BomBa-001.svg?updatedAt=1701827273385',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',
        },
      ],
      script: [
        {
          type: 'text/javascript',
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js',
        },
      ],
    },
  },
  // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
  devtools: { enabled: false },
});
