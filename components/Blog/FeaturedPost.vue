<template>
  <div v-if="post">
    <NuxtLink :href="`/blog/${post.slug}`" class="md:flex">
      <NuxtImg
        loading="lazy"
        :src="post.image"
        alt=""
        class="object-cover h-48 w-96 rounded-lg md:mx-4 my-4"
      />
      <div>
        <p class="text-red-600 text-2xl font-bold">{{ post.category }}</p>
        <h3 class="text-2xl">{{ post.title }}</h3>
        <p>{{ post.excerpt }}</p>
        <p class="author my-2">
          <NuxtImg :src="post.authorImage" alt="" />
          {{ post.author }} - {{ formattedDate }}
        </p>
      </div>
    </NuxtLink>
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
  align-items: center;
}
.author {
  display: flex;
  align-items: center;
}
.author img {
  width: auto;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
