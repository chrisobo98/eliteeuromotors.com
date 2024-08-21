<template>
  <section class="space-y-4 bg-white dark:bg-[#1d1d1d]">
    <BackgroundImage
      backgroundImage="https://eliteeuromotors.com/wp-content/uploads/2024/04/AdobeStock_212476202-scaled.jpeg"
    />
    <div class="w-11/12 md:w-9/12 mx-auto">
      <h2 class="text-4xl md:text-6xl text-center">Auto News Blog</h2>
      <p
        class="text-center py-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        Blog posts curated in house by European car lovers, for European car
        lovers. Get an inside view into the minds of service advisors and
        mechanics as we talk about some of our favorite topics.
      </p>
      <div class="flex flex-col md:flex-row gap-4 mt-8">
        <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          Welcome to our Auto News Blog, where, firstly, we dive deep into the
          heart of the automotive industry to bring you the latest updates, and
          secondly, we offer unparalleled insights into the world of European
          cars. Indeed, our dedication to quality and excellence shines through
          in each meticulously crafted article and update, ensuring that,
          furthermore, you stay informed and engaged.
        </p>
        <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          Additionally, as a family-oriented business, we understand the
          importance of a personal touch. Therefore, our blog resonates with the
          values and high standards that have made Elite Euro Motors a trusted
          name in the auto repair and service industry. Furthermore, our
          commitment to enriching your automotive experience is evident in every
          post, making our Auto News Blog not just a source of information but a
          destination for those who share our passion for cars.
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
        Our passion for european vehicles
      </h2>
      <div class="flex flex-col md:flex-row gap-4 my-4">
        <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 my-4">
          Moreover, our passion for premium European vehicles is the cornerstone
          of our content. As a result, whether you’re interested in the newest
          model releases, innovative automotive technologies, or in-depth
          analyses of industry trends, you’ll find that our blog is specifically
          tailored to your interests. Consequently, each post is not just a
          piece of news but an invitation to explore the automotive world
          through a lens of expertise and enthusiasm.
        </p>
        <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 my-4">
          In conclusion, join us on this exciting journey through the
          fascinating world of automotive news. With each article, we aim not
          only to inform but to inspire, bringing you closer to the heart of an
          industry we are profoundly passionate about.
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
