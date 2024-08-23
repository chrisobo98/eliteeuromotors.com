<template>
  <CookieControl locale="en" />
  
  <!-- Only show Header and Footer if the route is not a login or register page -->
  <Header v-if="!isAuthRoute" />
  
  <NuxtPage />
  
  <Footer id="footer-section" v-if="!isAuthRoute" />
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const isAuthRoute = computed(() => {
  const authRoutes = ['/login', '/register', '/es/login', '/es/register'];
  return authRoutes.includes(route.path);
});
</script>

<style scoped>
/* Add any global CSS styles here */
</style>
