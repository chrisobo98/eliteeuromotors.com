<template>
  <section
    class="bg-white border border-gray-200 dark:border-gray-700 dark:bg-black rounded-xl my-12"
  >
    <div
      class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-12"
    >
      <NuxtImg
        class="object-cover my-12 mx-12 md:mx-2 mx-auto"
        src="/7b0bd7e5-b353-4e56-1eff-5ad6ac333a00/public"
        alt="dashboard image"
        loading="lazy"
      />
      <div class="mt-4 md:mt-0">
        <h3
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          {{ $t("home.home.unlock_full_potential") }}
        </h3>
        <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          {{ $t("home.home.unlock_description") }}
        </p>
        <ul
          class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 list-disc pl-5 space-y-2"
        >
          <li>{{ $t("home.home.comprehensive_service_history") }}</li>
          <li>{{ $t("home.home.exclusive_access") }}</li>
          <li>{{ $t("home.home.streamlined_scheduling") }}</li>
          <li>{{ $t("home.home.personalized_insights") }}</li>
        </ul>
        <NuxtLink
          :to="localePath('/login')"
          class="py-3 px-5 my-5 mx-5 text-base font-medium dark:text-white hover:text-white text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-red-600 focus:ring-4 focus:ring-red-500 dark:text-white"
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
