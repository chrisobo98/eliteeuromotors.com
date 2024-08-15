<template>
  <div
    class="p-6 border border-gray-200 rounded-2xl shadow-md dark:border-gray-700"
  >
    <svg
      class="w-10 h-10 text-gray-500 dark:text-gray-400 mb-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path :d='iconClass'/>
    </svg>
    <a href="#">
      <h5
        class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
      >
        {{ title }}
      </h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  iconClass: String,
  title: String,
  description: String,
});
</script>

<style scoped>
/* No additional styles needed */
</style>
