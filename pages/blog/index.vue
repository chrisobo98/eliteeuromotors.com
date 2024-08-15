<template>
  <section class="space-y-4 bg-white dark:bg-[#1d1d1d]">
    <BackgroundImage
      backgroundImage="https://eliteeuromotors.com/wp-content/uploads/2024/04/AdobeStock_212476202-scaled.jpeg"
    />
    <div class="w-full md:w-9/12 mx-auto">
      <h2 class="text-6xl text-center font-bold">Auto News Blog</h2>
      <div class="flex flex-col md:flex-row gap-4 mt-8">
        <div>
          <p class="text-gray-500 dark:text-gray-300">
            Welcome to our Auto News Blog, where, firstly, we dive deep into the
            heart of the automotive industry to bring you the latest updates,
            and secondly, we offer unparalleled insights into the world of
            European cars. Indeed, our dedication to quality and excellence
            shines through in each meticulously crafted article and update,
            ensuring that, furthermore, you stay informed and engaged.
          </p>
        </div>
        <div>
          <p class="text-gray-500 dark:text-gray-300">
            Additionally, as a family-oriented business, we understand the
            importance of a personal touch. Therefore, our blog resonates with
            the values and high standards that have made Elite Euro Motors a
            trusted name in the auto repair and service industry. Furthermore,
            our commitment to enriching your automotive experience is evident in
            every post, making our Auto News Blog not just a source of
            information but a destination for those who share our passion for
            cars.
          </p>
        </div>
      </div>
      <div class="block md:flex">
        <BlogCategories
          @selectCategory="setSelectedCategory"
          :selectedCategory="selectedCategory"
        />
        <div class="mx-8 my-4">
          <FeaturedPost :post="getLatestPostByCategory(selectedCategory)" />
        </div>
      </div>
      <h2
        class="mb-4 text-4xl text-center md:text-left tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        Our passion for european vehicles
      </h2>
      <div class="flex flex-col md:flex-row gap-4 mt-8">
        <div>
          <p class="text-gray-500 dark:text-gray-300">
            Moreover, our passion for premium European vehicles is the
            cornerstone of our content. As a result, whether you’re interested
            in the newest model releases, innovative automotive technologies, or
            in-depth analyses of industry trends, you’ll find that our blog is
            specifically tailored to your interests. Consequently, each post is
            not just a piece of news but an invitation to explore the automotive
            world through a lens of expertise and enthusiasm.
          </p>
        </div>
        <div>
          <p class="text-gray-500 dark:text-gray-300">
            In conclusion, join us on this exciting journey through the
            fascinating world of automotive news. With each article, we aim not
            only to inform but to inspire, bringing you closer to the heart of
            an industry we are profoundly passionate about.
          </p>
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
