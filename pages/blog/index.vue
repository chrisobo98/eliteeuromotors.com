<template>
  <section class="space-y-4 bg-white dark:bg-[#1d1d1d]">
    <BackgroundImage
      backgroundImage="/38bd6a5b-9d5d-403a-dc49-7bda76301200/public"
    />
    <div class="w-11/12 md:w-9/12 mx-auto">
      <h2 class="text-4xl md:text-6xl text-center">{{ $t("blog.header") }}</h2>
      <p
        class="text-center py-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        {{ $t("blog.description") }}
      </p>
      <div class="flex flex-col md:flex-row gap-4 mt-8">
        <h2
          class="text-4xl md:mr-10 text-center md:text-left tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          {{ $t("blog.welcome_message.header") }}
        </h2>
        <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          {{ $t("blog.welcome_message.description") }}
        </p>
        <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          {{ $t("blog.personal_touch.description") }}
        </p>
      </div>
      <div class="block md:flex my-8">
        <BlogCategories
          @selectCategory="setSelectedCategory"
          :selectedCategory="selectedCategory"
        />
        <div class="mx-8 my-4">
          <FeaturedPost :post="getLatestPostByCategory(selectedCategory)" />
        </div>
      </div>
      <h2
        class="mb-4 text-4xl text-center md:text-left tracking-tight font-extrabold text-gray-900 dark:text-white my-8"
      >
        {{ $t("blog.passion_for_european_vehicles.header") }}
      </h2>
      <div class="flex flex-col md:flex-row gap-4 my-4">
        <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 my-4">
          {{ $t("blog.passion_for_european_vehicles.description") }}
        </p>
        <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 my-4">
          {{ $t("blog.conclusion.description") }}
        </p>
      </div>
      <BlogList :posts="filteredPosts" />
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

useHead({
  title: 'Auto News & Tips | Elite Euro Motors Blog',
  meta: [
    {
      name: 'description',
      content: 'Stay informed with the latest auto news, maintenance tips, and expert advice on European vehicles. Explore our blog at Elite Euro Motors for valuable insights and updates.'
    },
    {
      property: 'og:title',
      content: 'Elite Euro Motors Blog - Auto News & Tips'
    },
    {
      property: 'og:description',
      content: 'Discover expert advice, maintenance tips, and the latest news on European vehicles at the Elite Euro Motors blog. Keep your car in top shape with our valuable insights.'
    },
    {
      property: 'og:image',
      content: 'https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/7e16e5c3-584c-4067-14e1-ee943527f300/public'
    }
  ]
});

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
