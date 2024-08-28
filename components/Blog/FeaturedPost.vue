<template>
  <div v-if="post" class="featured-post">
    <NuxtImg loading="lazy" :src="post.image" alt="" class="rounded-lg" />
    <div>
      <p class="text-red-600 text-2xl font-bold">{{ post.category }}</p>
      <h3 class="text-2xl">{{ post.title }}</h3>
      <p>{{ post.excerpt }}</p>
      <p class="author my-2">
        <NuxtImg :src="post.authorImage" alt="" />
        {{ post.author }} - {{ formattedDate }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Post } from "@/utils/types"; // Use type-only import

interface Props {
  post: Post | null;
}

const props = defineProps<Props>();

const formattedDate = computed(() => {
  if (!props.post || !props.post.date) return "Unknown Date";

  const date = new Date(props.post.date);

  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});
</script>

<style scoped>
.featured-post {
  display: flex;
  align-items: center;
}
.featured-post img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 20px;
}
.author {
  display: flex;
  align-items: center;
}
.author img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
