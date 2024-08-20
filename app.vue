<template>
  <CookieControl locale="en" />
  <!-- Only show Header and Footer if the route is not "/login" -->
  <Header v-if="route.path !== '/login'" />
  
  <NuxtPage />
  
  <Footer v-if="route.path !== '/login'" />
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
/* Add any global CSS styles here */
</style>
