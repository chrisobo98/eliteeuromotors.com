<template>
  <section
    id="hero-section"
    class="relative bg-white dark:bg-[#171717] h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Video Background -->
    <div class="absolute inset-0">
      <video
        src="/static/background-video.mp4"
        class="w-full h-full object-cover"
        autoplay
        loop
        muted
      ></video>
      <div class="absolute inset-0 bg-black opacity-60"></div>
    </div>

    <div
      class="relative z-10 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
    >
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
      <p
        class="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48"
      >
        {{ $t("home.home.nestled_in_florida") }}
      </p>

      <!-- Appointment and account buttons -->
      <div
        class="flex flex-col mx-5 md:mx-0 mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
      >
        <NuxtLink
          :to="localePath('/contact')"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
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
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
