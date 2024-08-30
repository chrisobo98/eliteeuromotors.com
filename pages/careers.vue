<template>
  <section class="bg-white dark:bg-[#1d1d1d]">
    <BackgroundImage
      backgroundImage="/a41f1742-7c6b-4b42-87ae-d41ffb03bb00/public"
    />
    <div class="w-11/12 md:w-9/12 mx-auto">
      <!-- We're hiring text -->
      <h2 class="text-4xl md:text-6xl text-center">
        {{ $t("careers.header") }}
      </h2>
      <p
        class="text-center py-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        {{ $t("careers.description") }}
        <br />
        <br />
        {{ $t("careers.role_importance") }}
      </p>
      <!-- <BaseButton
        target="_blank"
        rel="noreferrer"
        href="https://jobs.lever.co/clearbit"
        >View Openings</BaseButton
      > -->

      <!-- We're a family owned business -->
      <div
        class="md:grid-cols-2 lg:gap-x-16 grid w-11/12 mx-auto items-center grid-cols-1 gap-4"
      >
        <div
          class="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
        >
          <div class="mr-auto place-self-center lg:col-span-12">
            <h2 class="text-3xl mb-8">
              {{ $t("careers.family_owned") }}
            </h2>
            <a
              class="group block no-underline transition-all duration-200 ease-in-out"
              href="https://www.google.com/maps/place/548+Market+St,+San+Francisco,+CA+94104"
              target="_blank"
              rel="noreferrer"
            >
              <GoogleMap />

              <span class="block h-auto pt-8"
                ><h3
                  class="text-navy-400 mb-2 text-lg font-semibold leading-none tracking-wider uppercase"
                >
                  {{ $t("careers.location.header") }}
                </h3>
                <address class="mb-3 not-italic">
                  <span class="block">{{
                    $t("careers.location.address")
                  }}</span>
                </address>
                <span class="block ml-auto"
                  ><BaseButton
                    class="group-hover text-white font-medium transition-all duration-200 ease-in-out"
                    >{{ $t("careers.location.directions") }}</BaseButton
                  ></span
                ></span
              ></a
            >
          </div>
        </div>
        <div class="mx-auto overflow-hidden rounded-lg mb-8 shadow-xl">
          <img
            src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/f14cb177-4ccf-4adf-da06-daadf361d100/public"
            alt="office photo"
            class="object-cover h-[40rem] w-auto"
          />
        </div>
      </div>

      <!-- description, responsibilities, etc. -->
      <div class="block w-11/12 mx-auto">
        <h2 class="text-left text-3xl md:text-5xl my-3 mt-8">
          {{ $t("careers.job_description.header") }}
        </h2>
        <p
          class="mb-3 text-left font-light text-gray-500 sm:text-lg dark:text-gray-400 my-4"
        >
          {{ $t("careers.job_description.description") }}
        </p>
        <h2 class="text-left text-3xl md:text-5xl my-3 mt-8">
          {{ $t("careers.responsibilities.header") }}
        </h2>
        <p
          class="text-left font-light text-gray-500 sm:text-lg dark:text-gray-400 my-4"
        >
          {{ $t("careers.responsibilities.description") }}
        </p>
        <h2 class="text-left text-3xl md:text-5xl my-3 mt-8">
          {{ $t("careers.qualifications.header") }}
        </h2>
        <p
          class="text-left font-light text-gray-500 sm:text-lg dark:text-gray-400 my-4"
        >
          {{ $t("careers.qualifications.description") }}
        </p>
        <!-- <BaseButton
          href="https://jobs.lever.co/clearbit"
          class="text-white"
          target="_blank"
          rel="noreferrer"
        >
          {{ $t("careers.apply_now") }}
        </BaseButton> -->
      </div>
    </div>
  </section>
</template>

<script setup type="ts">
import BaseButton from "../components/ui/BaseButton.vue";
import BackgroundImage from "../components/ui/BackgroundImage.vue";
import GoogleMap from '../components/homepage/GoogleMap.vue'

useHead({
  title: 'Careers | Join the Elite Euro Motors Team',
  meta: [
    {
      name: 'description',
      content: 'Explore exciting career opportunities at Elite Euro Motors. Join our team of experts dedicated to providing top-tier European auto care in Ocoee, FL.'
    },
    {
      property: 'og:title',
      content: 'Careers at Elite Euro Motors'
    },
    {
      property: 'og:description',
      content: 'Looking for a rewarding career in European auto care? Join Elite Euro Motors and become part of a team committed to excellence in Ocoee, FL.'
    },
    {
      property: 'og:image',
      content: 'https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/123d3bf2-43fd-44fa-1685-859eb6474e00/public'
    }
  ]
});

</script>
