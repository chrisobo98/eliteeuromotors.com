<template>
  <section class="bg-white dark:bg-[#1d1d1d]" id="family-owned-section">
    <div
      class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
    >
      <NuxtImg
        class="w-full rounded-xl"
        loading="lazy"
        src="/b0b2da56-af34-47c7-f074-9dfb67404800/public"
        alt="dashboard image"
      />
      <div class="mt-4 md:mt-0">
        <h3
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          {{ $t("home.home.family_owned_since_2014") }}
        </h3>
        <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          {{ $t("home.home.family_owned_description") }}
        </p>
      </div>
    </div>
  </section>

  <!-- Our favorite brands -->
  <section class="bg-white dark:bg-[#1d1d1d]">
    <div
      class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
    >
      <div class="mt-4 md:mt-0">
        <h3
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          {{ $t("home.home.specialize_in_servicing") }}
        </h3>
        <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          {{ $t("home.home.specialize_in_servicing_description") }}
        </p>
      </div>
      <NuxtImg
        class="w-full rounded-xl"
        loading="lazy"
        src="/dc660fdd-8cec-4f44-1820-bafc5c1d7e00/public"
        alt="dashboard image"
      />
    </div>
  </section>
</template>

<script setup type="ts"></script>
