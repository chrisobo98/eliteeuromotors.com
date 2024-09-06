<template>
  <section
    id="hero-section"
    class="relative bg-white dark:bg-[#171717] h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0">
      <!-- This was the Largest Contentful Paint Google didn't like lazy loading -->
      <!-- Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint. -->
      <NuxtImg
        provider="cloudflare"
        src="/5a8a200d-0db0-4389-c32e-072e4e6ff800/public"
        alt="Elite Euro Mobile Background"
        class="w-full h-full object-cover lg:hidden"
      />
      <NuxtImg
        provider="cloudflare"
        src="/02107829-1f89-45e4-2ee1-58da24dc6800/public"
        alt="Elite Euro Background"
        class="w-full h-full object-cover hidden lg:block"
      />
      <div class="absolute inset-0 bg-black opacity-65"></div>
    </div>

    <!-- Text and Headers -->
    <div class="relative xl:ml-60 mb-32 lg:ml-20 mx-16">
      <!-- Oil Change span -->
      <NuxtLink
        :to="localePath('/maintenance')"
        aria-label="Go to the maintenance page to schedule an appointment today"
        class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <span
          class="text-xs bg-red-600 rounded-full text-white px-4 py-1.5 mr-3"
        >
          {{ $t("home.home.new") }}</span
        >
        <span class="text-sm font-medium">
          {{ $t("home.home.specials_on_oil_changes") }}</span
        >
        <svg
          class="ml-2 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </NuxtLink>

      <!-- Hero Text -->
      <h1
        class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-6xl"
      >
        {{ $t("home.home.elite_euro_motors") }}
      </h1>
      <h2 class="text-2xl text-white">{{ $t("home.home.ocoee_premier") }}</h2>
      <p class="mb-8 text-lg font-normal text-gray-200 lg:text-xl">
        {{ $t("home.home.nestled_in_florida") }}
      </p>

      <!-- Appointment and account buttons -->
      <div
        class="flex flex-col md:mx-0 mb-8 lg:mb-16 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
      >
        <NuxtLink
          :to="localePath('/contact')"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white text-center text-gray-900 bg-red-700 rounded-lg border border-red-600 hover:bg-black focus:ring-4 focus:ring-red-500 dark:text-white"
        >
          {{ $t("home.home.schedule_appointment") }}
          <svg
            class="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </NuxtLink>
        <NuxtLink
          :to="localePath('/login')"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-black focus:ring-4 focus:ring-red-500 dark:text-white"
        >
          {{ $t("home.home.create_account") }}
        </NuxtLink>
      </div>
      <NuxtImg
        provider="cloudflare"
        src="/293c2a4c-fd01-48f2-9d19-a840e314cc00/public"
        alt="Elite Euro Certs Banner"
        class="rounded-3xl hidden md:block lg:-mt-10 md:h-20 lg:h-30 w-auto border border-red-800"
      />
    </div>
    <!-- Hero Image and Media -->
    <div class="hidden lg:flex relative xl:mx-12 lg:mx-6">
      <div
        class="absolute bg-red-800 md:w-28 md:h-28 lg:w-38 lg:h-38 rounded-full top-0 right-0 transform -translate-x-16 -translate-y-16"
      ></div>
      <div
        class="absolute bg-red-500 md:mb-12 md:w-12 md:h-12 lg:w-15 lg:h-15 rounded-full bottom-20 left-0 transform translate-x-16 translate-y-16"
      ></div>
      <NuxtImg
        src="/4d65d75d-caad-449e-a45b-5ba548471300/public"
        alt="Hero Image"
        class="w-[1520px] h-auto md:mb-24"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const showVideo = ref(false);
const localePath = useLocalePath();

onMounted(() => {
  if (window.innerWidth >= 768) {
    showVideo.value = true;
  }
});
</script>
