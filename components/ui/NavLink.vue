<template>
  <li>
    <NuxtLink
      :to="localizedHref"
      class="block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-red-700 lg:p-0 lg:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-red-500 lg:dark:hover:bg-transparent dark:border-gray-700"
    >
      {{ text }}
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const localePath = useLocalePath();

const localizedHref = computed(() => localePath(props.href));
</script>
