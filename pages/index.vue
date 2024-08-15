<template>
  <div class="bg-white dark:bg-[#1d1d1d]">
    <Sidenav />
    <HeroSection id="hero-section" />
    <div class="w-10/12 mx-auto">

    <ServicesSection id="services-section" />
    <ServiceIcons />
    <!-- <FeaturedProducts /> -->
    <FamilyOwned />
    <TestimonialSection />
      <GoogleMap />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from "../components/homepage/HeroSection.vue";
import ServicesSection from "../components/homepage/ServicesSection.vue";
import GoogleMap from "../components/homepage/GoogleMap.vue";
import FamilyOwned from "../components/homepage/FamilyOwned.vue";
import TestimonialSection from "../components/homepage/TestimonialSection.vue";
import ServiceIcons from "../components/homepage/ServiceIcons.vue";
// import FeaturedProducts from '~/components/Products/FeaturedProducts.vue'

import Sidenav from "../components/effects/Sidenav.vue";
</script>

<style scoped>
/* Add your CSS styles here */
</style>
