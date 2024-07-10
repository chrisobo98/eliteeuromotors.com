<template>
    <button class="base-button" @click="handleClick">
      <slot />
    </button>
  </template>
  
  <script setup lang="ts">
  const handleClick = () => {
    // Define what happens when the button is clicked
  }
  </script>
  
  <style scoped>
  .base-button {
    background-color: #EE0405;
    font-weight: light;
    padding: 1rem 3rem;
    border-radius: 9999px; /* Fully rounded */
    border: 2px solid #EE0405; /* Purple border */
    margin-top: 1rem;
    transition: background-color 0.3s, box-shadow 0.3s;
  }
  
  .base-button:hover {
    background-color: #EE0405; /* Purple background on hover */
    color: white;
    box-shadow: 0 0 20px 8px rgba(249, 10, 48, 0.243);
  }
  </style>
  