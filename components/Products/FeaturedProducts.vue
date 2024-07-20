<template>
    <div class="mx-auto px-4">
      <h2 class="text-5xl font-bold md:text-center my-4">Featured Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCard v-for="product in featuredProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import ProductCard from '~/components/Products/ProductCard.vue'
  
  const featuredProducts = ref([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for product 1',
      image: 'https://img.wp-static.com/wam?type=image&asset=b2667f95-0527-4ca4-ad56-080cd8a85e59.JPG&size=1500',
      price: '$49.99'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for product 2',
      image: '/path/to/image2.jpg',
      price: '$59.99'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for product 3',
      image: '/path/to/image3.jpg',
      price: '$69.99'
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description for product 4',
      image: '/path/to/image4.jpg',
      price: '$79.99'
    }
  ])
  </script>
  
  <style scoped>
  </style>
  