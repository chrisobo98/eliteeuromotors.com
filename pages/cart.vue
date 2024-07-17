<template>
    <section class="bg-white dark:bg-[#1d1d1d] py-8">
      <div class="mx-auto max-w-screen-xl px-4">
        <h2 class="text-6xl font-semibold text-gray-900 dark:text-white">Shopping Cart</h2>
  
        <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-4">
          <div class="mx-auto w-full flex-auto">
            <div class="space-y-6">
              <CartItem
                v-for="(item, index) in cartItems"
                :key="index"
                :imageLight="item.imageLight"
                :imageDark="item.imageDark"
                :title="item.title"
                :price="item.price"
                :quantity="item.quantity"
                :dark="dark"
                @update-quantity="updateQuantity(index, $event)"
                @remove-item="removeItem(index)"
              />
            </div>
            <PeopleAlsoBought :products="relatedProducts" :dark="dark" @add-to-favorites="addToFavorites" @add-to-cart="addToCart" />
          </div>
  
          <div class="mx-auto mt-6 flex-1 space-y-6 lg:mt-0">
            <OrderSummary :summaryItems="summaryItems" :total="total" />
            <VoucherForm @apply-voucher="applyVoucher" />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import CartItem from '../components/Cart/CartItem.vue';
  import OrderSummary from '../components/Cart/OrderSummary.vue';
  import VoucherForm from '../components/Cart/VoucherForm.vue';
  import PeopleAlsoBought from '../components/Cart/PeopleAlsoBought.vue';
  
  
  const cartItems = ref([
    {
      imageLight: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg',
      imageDark: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg',
      title: 'PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT',
      price: '$1,499',
      quantity: 2,
    },
    {
      imageLight: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg',
      imageDark: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg',
      title: 'Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band',
      price: '$598',
      quantity: 1,
    },
    {
      imageLight: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg',
      imageDark: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg',
      title: 'Apple - MacBook Pro 16" Laptop, M3 Pro chip, 36GB Memory, 18-core GPU, 512GB SSD, Space Black',
      price: '$1,799',
      quantity: 1,
    },
    {
      imageLight: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg',
      imageDark: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg',
      title: 'APPLE iPhone 15 5G phone, 256GB, Gold',
      price: '$2,997',
      quantity: 3,
    }
  ]);
  
  const summaryItems = ref([
    { label: 'Original price', value: '$7,592.00', class: 'text-base font-medium text-gray-900 dark:text-white' },
    { label: 'Savings', value: '-$299.00', class: 'text-base font-medium text-green-600' },
    { label: 'Store Pickup', value: '$99', class: 'text-base font-medium text-gray-900 dark:text-white' },
    { label: 'Tax', value: '$799', class: 'text-base font-medium text-gray-900 dark:text-white' },
  ]);
  
  const total = ref('$8,191.00');
  
  const relatedProducts = ref([
    {
      imageLight: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg',
      imageDark: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg',
      title: 'iMac 27”',
      description: 'This generation has some improvements, including a longer continuous battery life.',
      oldPrice: '$399,99',
      newPrice: '$299',
    },
    {
      imageLight: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg',
      imageDark: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg',
      title: 'Playstation 5',
      description: 'This generation has some improvements, including a longer continuous battery life.',
      oldPrice: '$799,99',
      newPrice: '$499',
    },
    {
      imageLight: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg',
      imageDark: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg',
      title: 'Apple Watch Series 8',
      description: 'This generation has some improvements, including a longer continuous battery life.',
      oldPrice: '$1799,99',
      newPrice: '$1199',
    },
  ]);
  
  const dark = ref(false);
  
  const updateQuantity = (index, newQuantity) => {
    cartItems.value[index].quantity = newQuantity;
  };
  
  const removeItem = (index) => {
    cartItems.value.splice(index, 1);
  };
  
  const applyVoucher = (code) => {
    // Apply voucher logic
    console.log('Voucher applied:', code);
  };
  
  const addToFavorites = (product) => {
    // Add to favorites logic
    console.log('Added to favorites:', product);
  };
  
  const addToCart = (product) => {
    // Add to cart logic
    console.log('Added to cart:', product);
  };
  </script>
  