<template>
    <div
      :class="[
        'p-6 rounded-xl mx-4 my-4 transition-all duration-300 ease-in-out',
        useShadow ? 'shadow-2xl' : '',
        `bg-gray-200 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-lg focus:ring-red-500 focus:border-red-500`,
      ]"
      :style="{ opacity: transparent ? '0.9' : '1' }"
    >
      <slot></slot> <!-- to insert content into the card -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseCard',
    props: {
      backgroundColor: {
        type: String,
        default: 'white',
      },
      transparent: {
        type: Boolean,
        default: false,
      },
      useShadow: {
        type: Boolean,
        default: false,
      },
    },
  };
  </script>
  