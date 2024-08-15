<template>
    <div
      :class="[
        'p-6 rounded-xl mx-4 my-4 transition-all duration-300 ease-in-out',
        useShadow ? 'shadow-2xl' : '',
        `border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6`,
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
  