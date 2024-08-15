<template>
  <section class="bg-white dark:bg-[#1d1d1d]">
    <BackgroundImage
      backgroundImage="https://eliteeuromotors.com/wp-content/uploads/2024/04/pexels-skylar-kang-6044744-scaled.jpg"
    />
    <!-- About Us -->
    <div class="w-11/12 md:w-9/12 mx-auto">
      <h2 class="text-6xl text-center font-bold">About Us</h2>
      <p
        class="text-center py-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        Have a question about your vehicle? Need to schedule an appointment or
        get a quote? We're here to help! Fill out the contact form below, and
        one of our expert technicians will get back to you promptly. Whether
        you're experiencing issues with your car or just need routine
        maintenance, we're dedicated to providing top-notch service and ensuring
        your European vehicle runs smoothly.
      </p>
      <div
        class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
      >
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2
            class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            Our Story
          </h2>
          <p class="mb-4">
            Under new ownership since 2013, EEM has significantly evolved to
            offer comprehensive services. These services notably include vehicle
            alignment and programming, coupled with a reduced turnaround time.
            This evolution is supported by substantial investments in equipment,
            a robust OEM parts inventory, and the recruitment of a team of
            highly skilled mechanics. As a result, our service range has become
            more extensive than ever.
          </p>
          <p class="mb-4">
            At EEM, we’re more than just a car shop – we’re a closely-knit
            family of car enthusiasts. We take immense pride in our work and
            consistently strive to exceed expectations with every vehicle that
            graces our doors.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
          <img
            class="w-full rounded-lg"
            src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/5a33f575-c0f2-477a-e3f5-89c2ccf3ee00/public"
            alt="office content 1"
          />
          <img
            class="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/17b42c84-455d-45f5-cdc9-86ddabb75a00/public"
            alt="office content 2"
          />
        </div>
      </div>

      <!-- Focus on customer satisfaction -->
      <div class="py-8 px-4 mx-auto sm:py-16 lg:px-6">
        <div class="mx-auto px-4 text-center md:text-left">
          <h2 class="text-4xl font-bold mb-4">
            Focus on customer satisfaction
          </h2>
          <p
            class="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-12"
          >
            Furthermore, with a steadfast focus on customer satisfaction and a
            commitment to quality, we persistently continue to grow and evolve.
            Meanwhile, we’re building lasting relationships within our community
            and beyond, one customer at a time.
          </p>
          <div class="flex flex-col md:flex-row gap-4">
            <div>
              <p class="text-gray-500 dark:text-gray-400">
                With a legacy of serving thousands of satisfied customers, EEM
                European Auto Services is passionately fueled by a relentless
                pursuit of automotive perfection. Indeed, our unwavering
                commitment to excellence is evident in every facet of our
                operations. For instance, from hand-selecting the finest quality
                parts to delivering unparalleled service experiences, our valued
                clientele can always expect the best.
              </p>
            </div>
            <div>
              <p class="text-gray-500 dark:text-gray-400">
                Celebrating over three decades of operation, EEM European Auto
                Services proudly traces its roots back to a modest family-owned
                enterprise. Throughout this extensive journey, not only have we
                flourished into a premier destination for premium auto parts and
                accessories, but we have also steadfastly maintained our
                dedication to quality and customer satisfaction. In doing so, we
                have solidified our position as a trusted authority in the
                automotive industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Images -->
      <div class="mt-16 sm:mt-20">
        <div
          class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8"
        >
          <div
            v-for="image in images"
            :key="image.src"
            class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800"
            :class="image.rotateClass"
          >
            <img
              :src="image.src"
              alt=""
              loading="lazy"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Why Choose Us -->
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div>
          <h2
            class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            Why Choose Us
          </h2>
          <div
            class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0"
          >
            <div>
              <div
                class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
              >
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Wide Selection
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                At our shop, we boast a wide selection of services tailored to
                meet all your automotive needs, from routine maintenance to
                complex repairs, ensuring that we can address any issue your
                vehicle may encounter.
              </p>
            </div>
            <div>
              <div
                class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
              >
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Family Owned
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                As a family-owned business, we prioritize building long-lasting
                relationships with our customers, providing personalized service
                and attention to detail that you won’t find at larger corporate
                establishments.
              </p>
            </div>
            <div>
              <div
                class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
              >
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Satisfaction Guaranteed
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Your satisfaction is our top priority. We strive to exceed your
                expectations with every service we provide, ensuring that you
                leave our shop feeling confident and satisfied with the quality
                of our work.
              </p>
            </div>
            <div>
              <div
                class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
              >
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Fair Prices
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                We believe in transparency and fairness, which is why we offer
                competitive and transparent pricing for all our services. You
                can trust that you’ll receive honest and upfront pricing without
                any hidden fees or surprises.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ -->
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2
          class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Frequently asked questions
        </h2>
        <div
          class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2"
        >
          <div>
            <div class="mb-10">
              <h3
                class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
              >
                <svg
                  class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                What do you mean by "Figma assets"?
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                You will have access to download the full Figma project
                including all of the pages, the components, responsive pages,
                and also the icons, illustrations, and images included in the
                screens.
              </p>
            </div>
            <div class="mb-10">
              <h3
                class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
              >
                <svg
                  class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                What does "lifetime access" exactly mean?
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Once you have purchased either the design, code, or both
                packages, you will have access to all of the future updates
                based on the roadmap, free of charge.
              </p>
            </div>
            <div class="mb-10">
              <h3
                class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
              >
                <svg
                  class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                How does support work?
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                We're aware of the importance of well qualified support, that is
                why we decided that support will only be provided by the authors
                that actually worked on this project.
              </p>
              <p class="text-gray-500 dark:text-gray-400">
                Feel free to
                <a
                  href="#"
                  class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  target="_blank"
                  rel="noreferrer"
                  >contact us</a
                >
                and we'll help you out as soon as we can.
              </p>
            </div>
            <div class="mb-10">
              <h3
                class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
              >
                <svg
                  class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                I want to build more than one project. Is that allowed?
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                You can use Windster for an unlimited amount of projects,
                whether it's a personal website, a SaaS app, or a website for a
                client. As long as you don't build a product that will directly
                compete with Windster either as a UI kit, theme, or template,
                it's fine.
              </p>
              <p class="text-gray-500 dark:text-gray-400">
                Find out more information by
                <a
                  href="#"
                  class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >reading the license</a
                >.
              </p>
            </div>
          </div>
          <div>
            <div class="mb-10">
              <h3
                class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
              >
                <svg
                  class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                What does "free updates" include?
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                The free updates that will be provided is based on the
                <a
                  href="#"
                  class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >roadmap</a
                >
                that we have laid out for this project. It is also possible that
                we will provide extra updates outside of the roadmap as well.
              </p>
            </div>
            <div class="mb-10">
              <h3
                class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
              >
                <svg
                  class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                What does the free version include?
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                The
                <a
                  href="#"
                  class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >free version</a
                >
                of Windster includes a minimal style guidelines, component
                variants, and a dashboard page with the mobile version alongside
                it.
              </p>
              <p class="text-gray-500 dark:text-gray-400">
                You can use this version for any purposes, because it is
                open-source under the MIT license.
              </p>
            </div>
            <div class="mb-10">
              <h3
                class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
              >
                <svg
                  class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                What is the difference between Windster and Tailwind UI?
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Although both Windster and Tailwind UI are built for integration
                with Tailwind CSS, the main difference is in the design, the
                pages, the extra components and UI elements that Windster
                includes.
              </p>
              <p class="text-gray-500 dark:text-gray-400">
                Additionally, Windster is a project that is still in
                development, and later it will include both the application,
                marketing, and e-commerce UI interfaces.
              </p>
            </div>
            <div class="mb-10">
              <h3
                class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white"
              >
                <svg
                  class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Can I use Windster in open-source projects?
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Generally, it is accepted to use Windster in open-source
                projects, as long as it is not a UI library, a theme, a
                template, a page-builder that would be considered as an
                alternative to Windster itself.
              </p>
              <p class="text-gray-500 dark:text-gray-400">
                With that being said, feel free to use this design kit for your
                open-source projects.
              </p>
              <p class="text-gray-500 dark:text-gray-400">
                Find out more information by
                <a
                  href="#"
                  class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >reading the license</a
                >.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import BackgroundImage from "../components/ui/BackgroundImage.vue";

const images = [
  {
    src: "https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/5a33f575-c0f2-477a-e3f5-89c2ccf3ee00/public",
    rotateClass: "rotate-2",
  },
  {
    src: "https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/5a33f575-c0f2-477a-e3f5-89c2ccf3ee00/public",
    rotateClass: "-rotate-2",
  },
  {
    src: "https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/5a33f575-c0f2-477a-e3f5-89c2ccf3ee00/public",
    rotateClass: "rotate-2",
  },
  {
    src: "https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/5a33f575-c0f2-477a-e3f5-89c2ccf3ee00/public",
    rotateClass: "-rotate-2",
  },
  {
    src: "https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/5a33f575-c0f2-477a-e3f5-89c2ccf3ee00/public",
    rotateClass: "rotate-2",
  },
];
</script>

<style scoped>
.card-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
}

.card-wrapper::before {
  content: "";
  position: absolute;
  left: -65%;
  top: -65%;
  height: 300%;
  width: 250%;
  background: conic-gradient(
    rgba(255, 0, 0, 0.668) 0deg,
    rgba(255, 25, 25, 0.4) 0deg,
    transparent 80deg
  );
  animation: border-spin 5s linear infinite;
}

.card-content {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 1rem;
}

@-moz-keyframes border-spin {
  from {
    -moz-transform: rotate(0deg);
  }

  to {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes border-spin {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes border-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
