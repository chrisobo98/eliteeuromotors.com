<template>
  <section
    v-if="post"
    class="relative justify-between lg:flex bg-white dark:bg-[#1d1d1d]"
  >
    <article class="w-10/12 mx-auto lg:w-6/12">
      <header class="grid gap-y-3">
        <h1 class="relative text-4xl md:text-6xl font-semibold leading-none">
          {{ post.title }}
        </h1>
        <p>{{ post.excerpt }}</p>
      </header>

      <section class="mx-auto mb-5">
        <div class="space-y-5">
          <div class="mt-7">
            <div class="overflow-hidden rounded">
              <NuxtImg
                :alt="post.title"
                :src="post.image"
                loading="lazy"
                class="object-cover rounded h-48 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <div class="mb-2 mt-5 flex max-w-full flex-col border-b pb-3 md:hidden">
        <label class="mb-sm text-base font-semibold" for="toc"
          >Table of contents</label
        >
        <select
          class="autofill:bg-white focus-ring inline-block max-w-full rounded-xs border border-secondary bg-primary px-1.5 py-1 pl-1.5 pr-4 text-sm font-normal shadow-sm transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-transparent hover:focus:border-blue-500/50"
          name="toc"
          id="toc"
        >
          <option
            v-for="section in post.toc"
            :key="section.id"
            :value="`#${section.id}`"
          >
            {{ section.title }}
          </option>
        </select>
      </div>

      <section class="prose max-w-full my-5" v-html="post.content"></section>
    </article>

    <aside
      class="sticky top-10 space-y-8 mx-8 self-start border-t pb-8 pt-5 lg:mt-0 lg:w-3/12 lg:border-l lg:border-t-0 lg:pl-[4.16%]"
    >
      <div class="flex flex-col gap-y-2">
        <span class="text-sm text-secondary">Written by</span>
        <div class="flex items-center gap-x-1.5">
          <NuxtImg
            loading="lazy"
            :alt="post.author"
            :src="post.authorImage"
            class="h-10 w-auto self-start rounded-full"
          />
          <div class="leading-snug">
            <span class="whitespace-pre text-base font-semibold text-primary">{{
              post.author
            }}</span>
          </div>
        </div>
        <span class="mt-2 text-sm text-secondary"
          >Last updated
          <time :datetime="post.date" class="font-medium text-primary">{{
            formattedDate
          }}</time></span
        >
      </div>
    </aside>
  </section>

  <div v-else>
    <h1>404 - Post Not Found</h1>
    <p>The blog post you're looking for doesn't exist.</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useBlogData } from "@/composables/useBlogData";
import { ref, onMounted, computed } from "vue";
import type { Post } from "@/utils/types"; // Assuming Post is defined in types

const route = useRoute();
const { getPostBySlug } = useBlogData();
const post = ref<Post | null>(null);

watch(post, (newPost) => {
  if (newPost) {
    useHead({
      title: `${newPost.title.substring(0, 47)}...`,
      meta: [
        {
          name: 'description',
          content: newPost.excerpt || 'Read the latest insights and tips on European vehicle maintenance and care from Elite Euro Motors.'
        },
        {
          property: 'og:title',
          content: newPost.title
        },
        {
          property: 'og:description',
          content: newPost.excerpt || 'Stay updated with the latest news and expert advice on European vehicles at the Elite Euro Motors Blog.'
        },
        {
          property: 'og:image',
          content: newPost.image || 'https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/7e16e5c3-584c-4067-14e1-ee943527f300/public'
        },
        {
          property: 'og:type',
          content: 'article'
        },
        {
          property: 'og:url',
          content: `https://eliteeuromotors.com/blog/${route.params.slug}`
        }
      ]
    });
  }
});

onMounted(() => {
  const slug = route.params.slug as string;
  post.value = getPostBySlug(slug);
});

const formattedDate = computed(() => {
  if (!post.value || !post.value.date) return "";
  const date = new Date(post.value.date);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});
</script>

<style scoped>
/* You can keep the same styles as before */
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
.category {
  color: red;
}
.author {
  display: flex;
  align-items: center;
}
.author img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
