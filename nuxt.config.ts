export default {
  css: ["@/assets/css/tailwind.css"],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  plugins: ["~/plugins/medusa.js", "~/plugins/supabase.js"],
  privateRuntimeConfig: {
    medusaBaseUrl: process.env.MEDUSA_BASE_URL,
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
  },
};

