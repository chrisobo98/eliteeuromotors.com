<template>
    <p
      href="#"
      class="flex items-center rounded-full border border-gray-200 px-4 py-2 hover:bg-red-600 dark:border-gray-700 "
    >
    <div class="h-5 w-5 bg-red-600 rounded-full mx-2">

      <svg
        class="h-4 w-4 shrink-0 text-gray-900 dark:text-white"
        style="margin-top: 2px; margin-left: 1px"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 20 24"
      >
        <path
          :d="iconPath"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </div>

      <span class="text-sm hover:text-white font-medium text-gray-900 dark:text-white">
        {{ title }}
      </span>
    </p>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  interface Props {
    title: string;
    iconPath: string;
  }
  
  defineProps<Props>();
  </script>
  