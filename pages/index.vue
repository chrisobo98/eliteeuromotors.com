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
      <section class="bg-white dark:bg-black rounded-3xl shadow-xl my-12">
        <div
          class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-12"
        >
          <div class="mt-4 md:mt-0">
            <h2
              class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
            >
              Unlock the Full Potential of Your Vehicle
            </h2>
            <p
              class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400"
            >
              Create an account today to take full advantage of our app’s
              powerful features. Track your vehicle’s maintenance history,
              schedule service appointments with ease, and receive real-time
              updates and notifications on your vehicle’s status.
            </p>
            <ul
              class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 list-disc pl-5 space-y-2"
            >
              <li>Comprehensive service history at your fingertips</li>
              <li>Exclusive access to maintenance reminders and updates</li>
              <li>Streamlined appointment scheduling for quick service</li>
              <li>Personalized vehicle insights and recommendations</li>
            </ul>
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-red-600 focus:ring-4 focus:ring-red-500 dark:text-white"
            >
              Create an Account
            </a>
          </div>
          <img
            class="w-full rounded-xl my-12 mx-12 md:mx-2"
            src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/7b0bd7e5-b353-4e56-1eff-5ad6ac333a00/public"
            alt="dashboard image"
          />
        </div>
      </section>

      <!-- <FeaturedProducts /> -->
      <FamilyOwned />
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
// import FeaturedProducts from '~/components/Products/FeaturedProducts.vue'

import Sidenav from "../components/effects/Sidenav.vue";
</script>

<style scoped>
/* Add your CSS styles here */
</style>
