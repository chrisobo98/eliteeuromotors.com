<template>
    <div class="hidden xl:mt-8 xl:block">
      <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">People also bought</h3>
      <div class="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
        <div v-for="product in products" :key="product.title" class="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <a href="#" class="overflow-hidden max-h-50 rounded">
            <img :class="['mx-auto h-44 w-44', dark ? 'dark:hidden' : 'block']" :src="product.imageLight" alt="product image" />
            <img :class="['mx-auto hidden h-44 w-44', dark ? 'dark:block' : 'hidden']" :src="product.imageDark" alt="product image" />
          </a>
          <div>
            <a href="#" class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{{ product.title }}</a>
            <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">{{ product.description }}</p>
          </div>
          <div>
            <p class="text-lg font-bold text-gray-900 dark:text-white">
              <span class="line-through">{{ product.oldPrice }}</span>
            </p>
            <p class="text-lg font-bold leading-tight text-red-600 dark:text-red-500">{{ product.newPrice }}</p>
          </div>
          <div class="mt-6 flex items-center gap-2.5">
            <button @click="addToFavorites(product)" type="button" class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
              </svg>
            </button>
            <button @click="addToCart(product)" type="button" class="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4" />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      products: Array,
      dark: Boolean
    },
    methods: {
      addToFavorites(product) {
        this.$emit('add-to-favorites', product);
      },
      addToCart(product) {
        this.$emit('add-to-cart', product);
      }
    }
  };
  </script>
  