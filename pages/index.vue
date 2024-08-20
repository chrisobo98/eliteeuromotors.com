<template>
  <div class="bg-white dark:bg-[#1d1d1d]">
    <Sidenav />
    <div class="relative bg-[#171717]">
      <HeroSection id="hero-section" />

      <!-- BrandsSlider positioned over the background on desktop -->
      <div
        class="hidden xl:block absolute inset-x-0 -z-2 xl:top-[100%] transform -translate-y-1/2"
      >
        <div
          class="bg-white dark:bg-[#1d1d1d] mx-auto 2xl:rounded-t-[50px] border-t border-red-800 2xl:mx-96"
        >
          <BrandsSlider class="py-6" />
        </div>
      </div>
    </div>

    <!-- Mobile and other content -->
    <div
      class="xl:hidden bg-white dark:bg-[#1d1d1d] md:rounded-t-[50px] xl:mx-96"
    >
      <BrandsSlider class="py-12" />
    </div>

    <div class="w-9/12 mx-auto xl:mt-64">
      <ServicesSection id="services-section" />
      <!-- <FeaturedProducts /> -->
      <FamilyOwned />
      <PromoBanner />
      <TestimonialSection />
      <GoogleMap />
    </div>
  </div>
</template>

<script setup lang="ts">
import BrandsSlider from "../components/homepage/BrandsSlider.vue";
import HeroSection from "../components/homepage/HeroSection.vue";
import ServicesSection from "../components/homepage/ServicesSection.vue";
import GoogleMap from "../components/homepage/GoogleMap.vue";
import FamilyOwned from "../components/homepage/FamilyOwned.vue";
import TestimonialSection from "../components/homepage/TestimonialSection.vue";
import PromoBanner from "../components/homepage/PromoBanner.vue";

// import FeaturedProducts from '~/components/Products/FeaturedProducts.vue'

import Sidenav from "../components/effects/Sidenav.vue";
</script>

<style scoped>
/* Add your CSS styles here */
</style>
