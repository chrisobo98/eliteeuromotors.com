<template>
    <a
      href="#"
      class="flex items-center rounded-lg border border-gray-200 px-4 py-2 hover:bg-red-600 dark:border-gray-700"
    >
      <svg
        class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          :d="iconPath"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
      <span class="text-sm font-medium text-gray-900 dark:text-white">
        {{ title }}
      </span>
    </a>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  interface Props {
    title: string;
    iconPath: string;
  }
  
  defineProps<Props>();
  </script>
  