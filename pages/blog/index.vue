<template>
  <section class="space-y-4 bg-white dark:bg-[#1d1d1d]">
    <BackgroundImage
      backgroundImage="https://eliteeuromotors.com/wp-content/uploads/2024/04/AdobeStock_212476202-scaled.jpeg"
    />
    <div class="max-w-6xl mx-auto">
      <h2 class="text-6xl text-center font-bold">Auto News Blog</h2>
      <div class="block md:flex">
        <BlogCategories
          @selectCategory="setSelectedCategory"
          :selectedCategory="selectedCategory"
        />
        <div class="mx-8 my-4">
          <FeaturedPost :post="getLatestPostByCategory(selectedCategory)" />
        </div>
      </div>
      <BlogList class="mx-8" :posts="filteredPosts" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { Post } from "@/utils/types"; // Use type-only import
import BackgroundImage from "@/components/ui/BackgroundImage.vue";
import BlogCategories from "@/components/Blog/BlogCategories.vue";
import BlogList from "@/components/Blog/BlogList.vue";
import FeaturedPost from "@/components/Blog/FeaturedPost.vue";
import { useBlogData } from "@/composables/useBlogData";

const { posts } = useBlogData();

const selectedCategory = ref("All");

const filteredPosts = computed(() => {
  return selectedCategory.value === "All"
    ? posts.value
    : posts.value.filter(
        (post: Post) =>
          post.category.toLowerCase() === selectedCategory.value.toLowerCase()
      );
});

const setSelectedCategory = (category: string) => {
  selectedCategory.value = category;
};

const getLatestPostByCategory = (category: string): Post | null => {
  const filteredPosts =
    category === "All"
      ? posts.value
      : posts.value.filter(
          (post: Post) => post.category.toLowerCase() === category.toLowerCase()
        );
  return filteredPosts.length > 0 ? filteredPosts[0] : null;
};
</script>
