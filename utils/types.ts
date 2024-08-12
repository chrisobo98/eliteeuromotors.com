export interface Post {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    image: string;
    content: string;
    toc: { id: string; title: string }[];
    url: string;
    date?: string; // Make date optional
    author?: string; // Make author optional
    authorImage?: string; // Make authorImage optional
  }
  