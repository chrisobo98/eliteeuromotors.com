<template>
    <div class="relative">
      <div class="relative h-60 md:h-80">
        <div class="absolute inset-0">
          <img :src="backgroundImage" alt="Background" class="w-full h-full object-cover"/>
          <div class="absolute inset-0 bg-gradient-to-b from-[#ffffff] dark:from-[#1d1d1d] via-white/70 dark:via-black/70 to-[#ffffff] dark:to-[#1d1d1d] to-100% opacity-100"></div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    props: {
      backgroundImage: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  