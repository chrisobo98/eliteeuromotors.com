<template>
    <div class="map-container bg-white dark:bg-[#1d1d1d] flex justify-between items-center">
      <iframe
        :src="mapSrc"
        class="w-full"
        height="450"
        style="border-radius:10px;"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'GoogleMap',
    data() {
      return {
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2503064132293!2d-81.5596957237945!3d28.562245475703072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e782e328dd1709%3A0x5c25650ddf0cb553!2sElite%20Euro%20Motors!5e0!3m2!1sen!2sus!4v1720624620253!5m2!1sen!2sus'
      };
    }
  });
  </script>
  
  <style scoped>
  .map-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }
  </style>
  