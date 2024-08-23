<template>
  <section class="bg-white dark:bg-[#1d1d1d]">
    <div class="py-8 px-4 mx-auto text-center">
      <div class="mx-auto">
        <h2
          class="mb-4 text-4xl md:text-5xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          {{ $t("home.home.testimonials") }}
        </h2>
        <p
          class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
        >
          {{ $t("home.home.testimonials_subtitle") }}
        </p>
      </div>
      <div class="flex flex-col lg:flex-row">
        <div class="tabs lg:w-1/3">
          <div
            v-for="(review, index) in reviews"
            :key="review.id"
            :class="{ 'bg-red-100 dark:bg-red-700': selectedTab === index }"
            class="tab p-4 cursor-pointer text-left rounded-lg mx-4 my-2 dark:border-gray-700"
            @click="selectTab(index)"
          >
            <div class="tab-content flex items-center">
              <img
                class="w-12 h-12 rounded-full"
                :src="review.profileImg"
                :alt="review.name"
              />
              <div class="tab-details ml-4">
                <div class="name font-semibold text-gray-900 dark:text-white">
                  {{ review.name }}
                </div>
                <div
                  class="date text-sm font-light text-gray-500 dark:text-gray-300"
                >
                  {{ review.date }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="testimonial p-8 border border-gray-200 dark:border-gray-700 rounded-lg flex-grow"
        >
          <div class="flex mb-4 justify-center">
            <svg
              v-for="n in 5"
              :key="n"
              :class="{
                'text-yellow-400': n <= reviews[selectedTab].stars,
                'text-gray-300': n > reviews[selectedTab].stars,
              }"
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.378 4.232a1 1 0 00.95.69h4.462c.969 0 1.371 1.24.588 1.81l-3.62 2.632a1 1 0 00-.364 1.118l1.378 4.232c.3.921-.755 1.688-1.54 1.118l-3.62-2.632a1 1 0 00-1.176 0l-3.62 2.632c-.785.57-1.84-.197-1.54-1.118l1.378-4.232a1 1 0 00-.364-1.118L2.98 9.66c-.783-.57-.381-1.81.588-1.81h4.462a1 1 0 00.95-.69l1.378-4.232z"
              />
            </svg>
          </div>
          <blockquote
            class="mx-auto max-w-2xl text-gray-500 dark:text-gray-400"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ reviews[selectedTab].title }}
            </h3>
            <p
              v-for="(paragraph, i) in reviews[selectedTab].text.split('\n')"
              :key="i"
              class="my-4"
            >
              {{ paragraph }}
            </p>
          </blockquote>
          <figcaption class="flex justify-center items-center space-x-3 mt-4">
            <img
              class="w-9 h-9 rounded-full"
              :src="reviews[selectedTab].profileImg"
              :alt="reviews[selectedTab].name"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>{{ reviews[selectedTab].name }}</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                {{ reviews[selectedTab].position }}
              </div>
            </div>
          </figcaption>
        </div>
      </div>
      <div class="text-center mt-8">
        <NuxtLink
          href="https://www.google.com/search?q=Elite+Euro+Motors%2C+505+Roper+Pkwy%2C+Ocoee%2C+FL+34761"
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-red-600 dark:text-white dark:border-red-400 dark:hover:text-white dark:hover:bg-red-700"
        >
          {{ $t("home.home.see_more") }}</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Review {
  id: string;
  profileImg: string;
  name: string;
  date: string;
  stars: number;
  text: string;
  title: string;
  position: string;
}

export default defineComponent({
  name: "Testimonials",
  setup() {
    const selectedTab = ref(0);

    const reviews: Review[] = [
      {
        id: "1",
        profileImg:
          "https://lh3.googleusercontent.com/a/ACg8ocKHel7VnFnfsSCVbHuFOQQOPHI7pklkgW_EJEhbukD150dP4w=s120-c-rp-mo-br100",
        name: "Matt Queen",
        date: "May 27, 2024",
        stars: 5,
        text: "Efficient, knowledgeable, clean, and trustworthy staff and establishment. This is where family owned businesses and experience make all the difference when getting your car serviced or repaired. Highly recommend and will continue to go to for my classic car needs.",
        title: "Speechless with how easy this was to integrate",
        position: "Developer at Open AI",
      },
      {
        id: "2",
        profileImg:
          "https://lh3.googleusercontent.com/a-/ALV-UjXh1aM4uPM6MBEs7a9cv94eP8pXydmuv9apQB7wpDxIaZUnB34=s120-c-rp-mo-br100",
        name: "Kristina Mcclung",
        date: "May 18, 2023",
        stars: 5,
        text: "This place gave me the peace of mind I needed about my vehicle. I had been having trouble with the AC and with stressed out about having to try and get it into the dealership and they took care of. It had me in and out in the same day and the pricing was very reasonable. I would recommend this place 100 million times over and over. Thank you all for your service.",
        title: "Solid foundation for any project",
        position: "Lead designer at Dropbox",
      },
      {
        id: "3",
        profileImg:
          "https://lh3.googleusercontent.com/a/ACg8ocL-EZG4W6QuZBWcoQPOxj2t9GmEpw3LrdUyIKt06cKmM_St1A=s120-c-rp-mo-br100",
        name: "Pablo Vegas",
        date: "December 30, 2022",
        stars: 5,
        text: "Went in for an AT solenoids replacement on my 2008 BMW 550i. Domingo was very honest and told me up front what could I expect from the work they did. Transmission issue was fixed. Happy customer.",
        title: "Mindblowing workflow and variants",
        position: "Software Engineer at Facebook",
      },
      {
        id: "4",
        profileImg:
          "https://lh3.googleusercontent.com/a/ACg8ocI4aixKEO8SE2ig0pxhfOIIGOloGvRbxWAwEXGIdDX7iBck7A=s120-c-rp-mo-br100",
        name: "Dennis Zavett",
        date: "December 7, 2022",
        stars: 5,
        text: "Efficient, honest, and straightforward about complete cost. Good job.",
        title: "Efficient Collaborating",
        position: "CTO at Google",
      },
      {
        id: "5",
        profileImg:
          "https://lh3.googleusercontent.com/a-/ALV-UjVTaw_nDXmG8_mAjbzDxUowDI3gc9cJytt4gRNICMw71rJOYY-3=s120-c-rp-mo-br100",
        name: "Charles Levin",
        date: "September 2, 2022",
        stars: 5,
        text: "I have been going to Elite Auto for many years. I have been driving my own cars for over 45 years. I have dealt with many auto repair entities over the years. Elite Auto is by far the most honorable, best performing place I have even experienced. In every way they are superior. Customer service is friendly and awesome. Actual work performed has ALWAYS been TOP NOTCH and NEVER A PROBLEM. On numerous occasions they have reminded me that service items were still under their warranty when I did not remember this at all. They always suggest ways and means of doing things that save me hundreds of dollars. They are about 60-70% lower cost than the Mercedes dealerships and 10x's more attentive. I cannot imagine anybody needing a Mercedes repaired going to anybody else than Elite. I am most thankful for you and your great service and always feel safe in your your hands. Thank you, Charles.",
        title: "Efficient Collaborating",
        position: "CTO at Google",
      },
    ];

    const selectTab = (index: number) => {
      selectedTab.value = index;
    };

    return {
      reviews,
      selectedTab,
      selectTab,
    };
  },
});
</script>

<style scoped></style>
