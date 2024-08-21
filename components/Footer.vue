<template>
  <footer class="antialiased bg-white dark:bg-[#1d1d1d]">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <!-- Top Bar -->
      <div
        class="border-b border-gray-100 py-6 dark:border-gray-700 md:py-8 lg:py-16"
      >
        <!-- Items Start -->
        <div class="items-start gap-6 md:gap-8 lg:flex 2xl:gap-24">
          <div
            v-for="section in sections"
            :key="section.title"
            class="min-w-0 flex-1 my-3 mx-3"
          >
            <h3 class="mb-4 text-2xl font-bold uppercase">
              {{ section.title }}
            </h3>
            <ul class="space-y-3">
              <li v-for="link in section.links" :key="link.text">
                <NuxtLink
                  :href="link.href"
                  :title="link.title"
                  class="dark:hover:text-white"
                  >{{ link.text }}</NuxtLink
                >
              </li>
            </ul>
          </div>
          <!-- Email Section -->
          <div class="mt-6 w-full md:mt-8 lg:mt-0 lg:max-w-lg">
            <div class="space-y-5 rounded-lg bg-gray-50 p-6 dark:bg-gray-700">
              <NuxtLink
                href="/login"
                title="Login or Sign Up"
                class="text-base font-medium text-red-700 underline hover:no-underline dark:text-red-500"
              >
                {{ $t("home.footer.sign_in_or_create_account") }}
              </NuxtLink>

              <hr class="border-gray-200 dark:border-gray-600" />

              <form action="#">
                <div class="items-end space-y-4 sm:flex sm:space-y-0">
                  <div class="relative mr-3 w-full sm:w-96 lg:w-full">
                    <label
                      for="email"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {{ $t("home.footer.get_latest_deals") }}
                    </label>
                    <input
                      class="block w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-red-500 dark:focus:ring-red-500 sm:w-96 lg:w-full"
                      :placeholder="$t('home.footer.enter_email')"
                      type="email"
                      id="email"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="w-full cursor-pointer border border-gray-500 rounded-lg bg-red-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-red-600 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    >
                      {{ $t("home.footer.subscribe") }}
                    </button>
                  </div>
                </div>
              </form>

              <hr class="border-gray-200 dark:border-gray-600" />

              <div class="flex space-x-4">
                <NuxtLink
                  to="https://www.facebook.com/eliteeuromotors"
                  class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </NuxtLink>
                <!-- Add more social media icons if needed -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="py-6 md:py-8">
        <div
          class="gap-4 space-y-5 xl:flex xl:items-center xl:justify-between xl:space-y-0"
        >
          <NuxtImg
            provider="cloudflare"
            loading="lazy"
            src="50490653-5765-4163-6f7a-5c4e4a960400/public"
            :alt="$t('home.footer.elite_euro_logo')"
            class="rounded-lg w-4/6 h-full md:w-1/2 lg:w-1/4"
          />

          <ul
            class="flex flex-wrap items-center gap-4 text-sm xl:justify-center"
          >
            <li v-for="policy in policies" :key="policy.text">
              <a
                :href="policy.href"
                :title="policy.title"
                class="font-medium hover:underline"
                >{{ policy.text }}</a
              >
            </li>
          </ul>

          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ $t("home.footer.copyright") }}
            <a href="https://christopherbermudez.com/" class="hover:underline">Christopher Bermudez</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

const sections = computed(() => [
  {
    title: t("home.footer.company"),
    links: [
      { text: t("home.footer.about"), href: "#", title: t("home.footer.about") },
      { text: t("home.footer.premium"), href: "#", title: t("home.footer.premium") },
      { text: t("home.footer.blog"), href: "#", title: t("home.footer.blog") },
      { text: t("home.footer.affiliate_program"), href: "#", title: t("home.footer.affiliate_program") },
      { text: t("home.footer.get_coupon"), href: "#", title: t("home.footer.get_coupon") },
    ],
  },
  {
    title: t("home.footer.your_garage"),
    links: [
      { text: t("home.footer.my_vehicle"), href: "#", title: t("home.footer.my_vehicle") },
      { text: t("home.footer.maintenance"), href: "#", title: t("home.footer.maintenance") },
      { text: t("home.footer.notifications"), href: "#", title: t("home.footer.notifications") },
      { text: t("home.footer.profile"), href: "#", title: t("home.footer.profile") },
      { text: t("home.footer.garage"), href: "#", title: t("home.footer.garage") },
    ],
  },
]);

const policies = computed(() => [
  { text: t("home.footer.legal_notice"), href: "#", title: t("home.footer.legal_notice") },
  { text: t("home.footer.product_listing_policy"), href: "#", title: t("home.footer.product_listing_policy") },
  { text: t("home.footer.terms_of_use"), href: "#", title: t("home.footer.terms_of_use") },
]);
</script>

<style scoped>
/* Add any additional styles you need here */
</style>
