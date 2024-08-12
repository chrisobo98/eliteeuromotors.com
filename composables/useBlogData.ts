import { ref } from "vue";

export function useBlogData() {
  const posts = ref([
    {
      slug: "unveiling-the-future-hybrid-technology-in-bmw-and-mercedes",
      title: "Unveiling the Future: Hybrid Technology in BMW and Mercedes",
      excerpt:
        "BMW and Mercedes, two titans of luxury automotive engineering, have embraced hybrid technology with open arms, integrating it seamlessly into their prestigious lineups.",
      category: "Electric",
      image:
        "https://eliteeuromotors.com/wp-content/uploads/2024/04/pexels-leon-kohle-12686785-scaled.jpg",
      content:
        "<p>In recent years, the automotive industry has witnessed a significant shift towards greener, more sustainable driving solutions. As part of this movement, hybrid technology has emerged as a promising pathway towards reducing emissions and enhancing fuel efficiency. BMW and Mercedes, two titans of luxury automotive engineering, have embraced hybrid technology with open arms, integrating it seamlessly into their prestigious lineups. In this blog, we’ll explore how hybrid technology works in BMW and Mercedes vehicles, while shedding light on some common issues and misconceptions. <br/><br/> <h1 class='text-3xl'>Understanding Hybrid Technology</h1> <br/> At its core, hybrid technology combines the power of an internal combustion engine with an electric motor and battery pack. This dual-power setup offers several advantages, including improved fuel economy, reduced emissions, and enhanced performance. In BMW and Mercedes hybrids, sophisticated control systems seamlessly manage the interaction between the gasoline engine and electric motor, optimizing efficiency in various driving conditions.</p>",
      toc: [
        { id: "section-1", title: "Section 1" },
        { id: "section-2", title: "Section 2" },
      ],
      url: "http://example.com/blog/example-post",
      date: "2024-08-12",
      author: "Christopher Bermudez",
      authorImage: "https://media.licdn.com/dms/image/D4E35AQFaJzZlhji9iw/profile-framedphoto-shrink_400_400/0/1721954874287?e=1724090400&v=beta&t=P13jYjbqsxkhBLF1qsjwd5WYstL9lN70AItoNOHd3FY", // Add author image
    },
    {
      slug: "understanding-your-bmw-dashboard-lights",
      title: "Understanding Your BMW Dashboard Lights",
      excerpt:
        "So, you’re cruising down the road in your sleek BMW, feeling the power and precision that comes with German engineering. Suddenly, a yellow light starts flashing on your dashboard, and you're left scratching your head. What does it mean? Is it serious? Should you pull...",
      category: "BMW",
      image:
        "https://eliteeuromotors.com/wp-content/uploads/2024/04/Warning-Light-Display_41745395.jpg",
      content:
        "<p>So, you’re cruising down the road in your sleek BMW, feeling the power and precision that comes with German engineering. Suddenly, a yellow light starts flashing on your dashboard, and you’re left scratching your head. What does it mean? Is it serious? Should you pull over immediately or keep going? <br/><br/> Fear not, fellow BMW enthusiast! We’ve got your back with this ultimate guide to understanding those mysterious dashboard lights. From the subtle glow of the check engine light to the alarming red of the brake system warning, we’ll decode each symbol, explain what it means for your ride, and share some tips on what to do next. <br/><br/> But hey, before we dive into the world of warning lights, let’s take a moment to appreciate the marvel of modern BMWs. These machines are packed with sensors and systems, keeping an eagle eye on every aspect of your driving experience. From the nimble 3 Series to the versatile X3 and the compact yet powerful 1 Series, BMWs are more than just cars – they’re technological marvels on wheels!</p>",
      toc: [
        { id: "section-1", title: "Section 1" },
        { id: "section-2", title: "Section 2" },
      ],
      url: "http://example.com/blog/example-post",
      date: "2024-08-12",
      author: "Christopher Bermudez",
      authorImage: "https://media.licdn.com/dms/image/D4E35AQFaJzZlhji9iw/profile-framedphoto-shrink_400_400/0/1721954874287?e=1724090400&v=beta&t=P13jYjbqsxkhBLF1qsjwd5WYstL9lN70AItoNOHd3FY", // Add author image
    },
    // Add more posts as needed
  ]);

  const getPostBySlug = (slug: string) => {
    return posts.value.find((post) => post.slug === slug) || null;
  };

  return { posts, getPostBySlug };
}
