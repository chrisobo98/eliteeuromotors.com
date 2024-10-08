import Aura from "@primevue/themes/aura";

// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@dargmuesli/nuxt-cookie-control",
    "@nuxt/eslint",
    "@nuxtjs/supabase",
    "@primevue/nuxt-module",
    "nuxt-svgo",
    "@nuxt/scripts",
    "@nuxtjs/seo",
    "nuxt-gtag",
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  gtag: {
    id: "G-X1SSD7Q4G7",
  },
  seo: {
    // Disable fallback title if not needed
    fallbackTitle: false,

    // Ensure each page has a unique title
    automaticDefaults: false,
  },
  runtimeConfig: {
    public: {
      gtagId: "G-X1SSD7Q4G7", // Replace with your Google Analytics ID
      VIN_KEY: process.env.VIN_KEY,
      VIN_HOST: process.env.VIN_HOST,
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      EmailJsServiceID: process.env.EMAIL_JS_SERVICE_ID,
      EmailJsTemplateID: process.env.EMAIL_JS_TEMPLATE_ID,
      EmailJsUserID: process.env.EMAIL_JS_USER_ID,
    },
  },

  image: {
    provider: "cloudflare",
    cloudflare: {
      baseURL: process.env.CLOUDFLARE_IMAGES_URL,
    },
  },

  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English" },
      { code: "es", iso: "es-ES", name: "Spanish" },
    ],
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
  },

  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],
  supabase: {
    redirect: false,
  },

  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      // Global title template for all pages
      titleTemplate: "%s - Elite Euro Motors",
      // Custom separator
      templateParams: {
        separator: "-", // You can choose your preferred separator here
      },
      htmlAttrs: {
        lang: "en",
      },
      script: [
        {
          innerHTML: `
            (function() {
              const savedTheme = localStorage.getItem('color-theme');
              if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();
          `,
          type: "text/javascript",
          // Safely inject inline script
          "data-script-type": "init-theme",
        },
      ],
    },
  },

  cookieControl: {
    barPosition: "bottom-full",
    closeModalOnClickOutside: true,
    colors: {
      barBackground: "#000",
      barButtonBackground: "#fff",
      barButtonColor: "#000",
      barButtonHoverBackground: "#333",
      barButtonHoverColor: "#fff",
      barTextColor: "#fff",
      modalBackground: "#fff",
      modalButtonBackground: "#000",
      modalButtonColor: "#fff",
      modalButtonHoverBackground: "#333",
      modalButtonHoverColor: "#fff",
      modalOverlay: "#000",
      modalOverlayOpacity: 0.8,
      modalTextColor: "#000",
    },
    cookies: {
      necessary: [
        {
          description: {
            en: "This cookie is essential for the website to function properly.",
            es: "Esta cookie es esencial para que el sitio web funcione correctamente.",
          },
          id: "necessary",
          name: {
            en: "Necessary",
            es: "Necesaria",
          },
        },
      ],
      optional: [
        {
          description: {
            en: "This cookie is used for Google Analytics.",
            es: "Esta cookie se utiliza para Google Analytics.",
          },
          id: "google-analytics",
          name: {
            en: "Google Analytics",
            es: "Google Analytics",
          },
          links: {
            "https://policies.google.com/privacy": "Privacy Policy",
          },
        },
      ],
    },
    isAcceptNecessaryButtonEnabled: true,
    isControlButtonEnabled: true,
    locales: ["en", "es"],
    localeTexts: {
      en: {
        accept: "Accept",
        acceptAll: "Accept All",
        bannerDescription:
          "We use cookies to ensure you get the best experience on our website.",
        bannerTitle: "Cookies Information",
        close: "Close",
        cookiesFunctional: "Functional Cookies",
        cookiesNecessary: "Necessary Cookies",
        cookiesOptional: "Optional Cookies",
        iframeBlocked: "Iframes are blocked",
        decline: "Decline",
        declineAll: "Decline All",
        here: "here",
        manageCookies: "Manage Cookies",
        save: "Remember",
        settingsUnsaved: "You have unsaved settings",
      },
      es: {
        accept: "Aceptar",
        acceptAll: "Aceptar Todas",
        bannerDescription:
          "Usamos cookies para asegurarnos de que obtenga la mejor experiencia en nuestro sitio web.",
        bannerTitle: "Información de Cookies",
        close: "Cerrar",
        cookiesFunctional: "Cookies Funcionales",
        cookiesNecessary: "Cookies Necesarias",
        cookiesOptional: "Cookies Opcionales",
        iframeBlocked: "Iframes están bloqueados",
        decline: "Rechazar",
        declineAll: "Rechazar Todas",
        here: "aquí",
        manageCookies: "Gestionar Cookies",
        save: "Guardar",
        settingsUnsaved: "Tienes configuraciones sin guardar",
      },
    },
  },

  compatibilityDate: "2024-07-08",
});
