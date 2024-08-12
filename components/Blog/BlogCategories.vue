<template>
    <div class="categories">
      <a v-for="category in categories" :key="category" @click="selectCategory(category)" :class="{ selected: category === selectedCategory }">{{ category }}</a>
    </div>
  </template>
  
  <script setup lang="ts">
  const categories = ['All', 'Mercedes', 'BMW', 'Electric'];
  
  const props = defineProps({
    selectedCategory: {
      type: String,
      required: true,
    },
  });
  
  const emit = defineEmits(['selectCategory']);
  
  const selectCategory = (category: string) => {
    emit('selectCategory', category);
  };
  </script>
  
  <style scoped>
  .categories {
    display: flex;
    flex-direction: column;
  }
  .categories a {
    cursor: pointer;
    padding: 10px;
    text-decoration: none;
  }
  .categories a.selected {
    color: red;
  }
  </style>
  