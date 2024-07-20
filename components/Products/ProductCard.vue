<template>
  <div class="bg-red-700 rounded-xl">
    <img
      class="object-cover rounded-xl h-48 w-full"
      :src="product.image"
      :alt="product.name"
    />
    <div class="py-4 px-4">
      <h3 class="text-3xl mb-2">{{ product.name }}</h3>
      <p>
        {{ product.description }}
      </p>
      <div class="flex items-center gap-1">
        <span
          class="me-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300"
        >
          Up to 35% off
        </span>
        <div class="flex justify-end gap-1">
          <button
            type="button"
            data-tooltip-target="tooltip-quick-look"
            class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span class="sr-only"> Quick look </span>
            <svg
              class="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="white"
                stroke-width="2"
                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
              />
              <path
                stroke="white"
                stroke-width="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
          <div
            id="tooltip-quick-look"
            role="tooltip"
            class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
            data-popper-placement="top"
          >
            Quick look
            <div class="tooltip-arrow" data-popper-arrow=""></div>
          </div>

          <button
            type="button"
            data-tooltip-target="tooltip-add-to-favorites"
            class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span class="sr-only"> Add to Favorites </span>
            <svg
              class="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
              />
            </svg>
          </button>
          <div
            id="tooltip-add-to-favorites"
            role="tooltip"
            class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
            data-popper-placement="top"
          >
            Add to favorites
            <div class="tooltip-arrow" data-popper-arrow=""></div>
          </div>
        </div>
      </div>

      <div class="pt-4 pb-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >{{ product.price }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
