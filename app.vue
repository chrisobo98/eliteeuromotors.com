<template>
    <CookieControl locale="en" />
    <Header />
    <NuxtPage />
    <Footer />
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

const user = useSupabaseUser();

useHead({
  title: "Elite Euro Motors - European Auto Shop",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: "Elite Euro Motors - European Auto Shop",
    },
    {
      name: "keywords",
      content: "BMW Mechanic, European Mechanic, Mechanic",
    },
    { name: "author", content: "Elite Euro Motors" },
  ],
});
</script>

<style scoped>
/* Add any global CSS styles here */
</style>
