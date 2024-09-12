<template>
  <section
    class="bg-white dark:bg-[#1d1d1d] text-center flex flex-col items-center justify-center"
  >
    <div class="my-20">
      <h1 class="text-4xl md:text-6xl font-bold">
        {{ $t("contact.confirmation.success") }}
      </h1>
      <p class="text-lg text-gray-500 dark:text-gray-400">
        {{ $t("contact.confirmation.description") }}
      </p>
      <NuxtLink :to="localePath('/')" class="text-red-600">
        {{ $t("contact.confirmation.back_home") }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const localePath = useLocalePath();
</script>

<style scoped>
/* Tailwind should handle the styling */
</style>
