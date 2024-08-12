// stores/blogStore.ts
import { defineStore } from 'pinia';
import type { Post } from '@/utils/types';

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [] as Post[],
  }),
  actions: {
    async fetchPosts() {
      // Fetch posts from API and set this.posts
    },
  },
});
