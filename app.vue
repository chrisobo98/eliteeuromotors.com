<template>
  <CookieControl locale="en" />

  <Header />

  <NuxtPage />

  <Footer id="footer-section" />
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

useSeoMeta({
  title: "Elite Euro Motors - European Auto Specialists",
  ogTitle: "Elite Euro Motors - Premier European Auto Service",
  description:
    "Elite Euro Motors is your trusted specialist for European auto repairs and services in Ocoee, Florida.",
  ogDescription:
    "Experience premium European auto services at Elite Euro Motors.",
  ogImage:
    "https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/b0b2da56-af34-47c7-f074-9dfb67404800/public",
  ogUrl: "https://eliteeuromotors.com",
  twitterCard: "summary_large_image",

  // Additional Metadata
  ogType: "website",
  ogLocale: "en_US",
  ogSiteName: "Elite Euro Motors",
  ogImageType: "image/jpeg",
  ogImageWidth: "1200",
  ogImageHeight: "630",
  ogImageAlt: "Elite Euro Motors - European Auto Specialists",
  ogLocaleAlternate: ["es_ES"],
});
</script>

<style scoped>
/* Add any global CSS styles here */
</style>
