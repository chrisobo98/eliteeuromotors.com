<template>
  <section class="bg-white dark:bg-[#1d1d1d]">
    <BackgroundImage
      backgroundImage="https://eliteeuromotors.com/wp-content/uploads/2024/04/pexels-skylar-kang-6044744-scaled.jpg"
    />
    <!-- About Us -->
    <div class="w-11/12 md:w-9/12 mx-auto">
      <h2 class="text-4xl md:text-6xl text-center font-bold">
        {{ $t("about.header") }}
      </h2>
      <p
        class="text-center py-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        {{ $t("about.description") }}
      </p>
      <div
        class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
      >
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2
            class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            {{ $t("about.our_story.header") }}
          </h2>
          <p class="mb-4">
            {{ $t("about.our_story.description") }}
          </p>
          <p class="mb-4">
            {{ $t("about.our_story.family") }}
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
            {{ $t("about.focus_customer_satisfaction.header") }}
          </h2>
          <p
            class="font-light text-gray-500 sm:text-lg dark:text-gray-400 my-4"
          >
            {{ $t("about.focus_customer_satisfaction.description") }}
          </p>
          <div class="flex flex-col md:flex-row gap-4">
            <div>
              <p
                class="font-light text-gray-500 sm:text-lg dark:text-gray-400 my-4"
              >
                {{ $t("about.legacy.description") }}
              </p>
            </div>
            <div>
              <p
                class="font-light text-gray-500 sm:text-lg dark:text-gray-400 my-4"
              >
                {{ $t("about.legacy.history") }}
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
            {{ $t("about.why_choose_us.header") }}
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
                {{ $t("about.why_choose_us.wide_selection_header") }}
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                {{ $t("about.why_choose_us.wide_selection") }}
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
                {{ $t("about.why_choose_us.family_owned_header") }}
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                {{ $t("about.why_choose_us.family_owned") }}
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
                {{ $t("about.why_choose_us.satisfaction_guaranteed_header") }}
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                {{ $t("about.why_choose_us.satisfaction_guaranteed") }}
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
                {{ $t("about.why_choose_us.fair_prices_header") }}
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                {{ $t("about.why_choose_us.fair_prices") }}
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
