<template>
  <div class="rounded-2xl">
    <a href="#">
      <NuxtImg
        :src="imgSrc"
        :alt="imgAlt"
        loading="lazy"
        class="w-full h-48 object-cover rounded-t-2xl"
      />
    </a>
    <div class="my-5">
      <a href="#">
        <h3
          class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ title }}
        </h3>
      </a>
      <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 my-4">
        {{ description }}
      </p>
      <NuxtLink
        :to="localePath('/services')"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center dark:text-white hover:text-white border border-red-700 rounded-2xl hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        {{ $t("home.home.read_more") }}

        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();

const props = defineProps({
  imgSrc: String,
  imgAlt: String,
  title: String,
  description: String,
});
</script>
