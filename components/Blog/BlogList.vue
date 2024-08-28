<template>
  <section class="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="post in posts"
      :key="post.slug"
      class="flex flex-col gap-y-5 text-primary"
    >
      <NuxtLink :href="`/blog/${post.slug}`">
        <NuxtImg
          :alt="post.title"
          :src="post.image"
          loading="lazy"
          class="object-cover h-48 w-96 rounded-lg shadow-2xl"
        />
        <div class="flex h-full flex-col my-5">
          <p class="text-red-600 text-xl font-bold">{{ post.category }}</p>
          <h3 class="text-2xl">{{ post.title }}</h3>
          <p class="my-2 text-base text-secondary">{{ post.excerpt }}</p>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Post } from "@/utils/types";

const props = defineProps<{
  posts: Post[];
}>();
</script>

<style scoped>
/* Add your styles here */
</style>
