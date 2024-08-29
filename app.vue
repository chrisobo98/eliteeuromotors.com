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

useSeoMeta({
  title: 'Elite Euro Motors - European Auto Specialists',
  ogTitle: 'Elite Euro Motors - Premier European Auto Service',
  description: 'Elite Euro Motors is your trusted specialist for European auto repairs and services in Ocoee, Florida. We offer expert care for BMW, Mercedes, Audi, and other European vehicles.',
  ogDescription: 'Experience premium European auto services at Elite Euro Motors in Ocoee, Florida. We specialize in BMW, Mercedes, Audi, and more.',
  ogImage: 'https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/b0b2da56-af34-47c7-f074-9dfb67404800/public',
  ogUrl: 'https://eliteeuromotors.com',
  twitterCard: 'summary_large_image',
  
  // Additional Metadata
  ogType: 'website',
  ogLocale: 'en_US',
  ogSiteName: 'Elite Euro Motors',
  ogImageType: 'image/jpeg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageAlt: 'Elite Euro Motors - European Auto Specialists',
  
  // Optional but beneficial metadata
  ogVideo: 'https://eliteeuromotors.netlify.app/_nuxt/background-video.DQBeuMwm.mp4',
  ogVideoType: 'video/mp4',
  ogVideoWidth: '1920',
  ogVideoHeight: '1080',
  
  // Locale Alternatives (if applicable)
  ogLocaleAlternate: ['es_ES']
})

const route = useRoute();

const isAuthRoute = computed(() => {
  const authRoutes = ['/login', '/register', '/es/login', '/es/register'];
  return authRoutes.includes(route.path);
});
</script>

<style scoped>
/* Add any global CSS styles here */
</style>
