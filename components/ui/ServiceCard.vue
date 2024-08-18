<template>
  <div
    class="rounded-2xl"
  >
    <a href="#">
      <img
        :src="imgSrc"
        :alt="imgAlt"
        class="w-full h-48 object-cover rounded-t-2xl"
      />
    </a>
    <div class="my-5">
      <a href="#">
        <h5
          class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >{{ title }}</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <a
        href="#"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border border-red-700 rounded-2xl hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        Read more
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
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgSrc: String,
  imgAlt: String,
  title: String,
});
</script>
