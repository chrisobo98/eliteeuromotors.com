<template>
  <div class="bg-login">
    <div
      class="flex justify-center max-w-4xl mx-auto items-center min-h-screen bg-cover bg-center"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-8 bg-black p-6 rounded-lg mx-8 my-8"
      >
        <!-- Left Side - Form -->
        <div class="max-w-md mx-auto flex flex-col min-h-full">
          <h1 class="text-3xl font-bold mb-2 text-white">{{ title }}</h1>
          <p v-if="subtitle" class="text-lg mb-4 text-white">{{ subtitle }}</p>
          <form @submit.prevent="handleSubmit">
            <div class="space-y-6">
              <InputText
                class="w-full"
                type="email"
                placeholder="Email"
                v-model="email"
              />
              <InputText
                class="w-full"
                type="password"
                placeholder="Password"
                v-model="password"
              />
              <BaseButton
                type="submit"
                class="w-full bg-gradient-to-r bg-red-500 hover:from-pink-600 hover:to-orange-600 text-white py-2 rounded-lg"
                :label="loading ? 'Loading...' : buttonText"
                :disabled="loading"
              />
            </div>
            <div class="text-center mt-4">
              <p class="text-sm text-white">
                {{ promptText }}
                <NuxtLink :to="linkTo" class="text-red-300 underline">{{
                  linkText
                }}</NuxtLink>
              </p>
            </div>
          </form>
          <!-- Back to Home Link -->
          <div class="text-center mt-auto">
            <NuxtLink
              to="/"
              class="text-white text-sm underline hover:text-red-300"
            >
              Back to homepage
            </NuxtLink>
          </div>
        </div>

        <!-- Right Side - Features/Info -->
        <div
          class="bg-gradient-to-r from-red-600 p-6 rounded-xl to-red-800 border border-gray-200 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 text-white p-8 rounded-lg shadow-md"
        >
          <h2 class="text-2xl font-bold mb-4">
            Create an account and use our premium features for free
          </h2>
          <ul class="space-y-4">
            <li class="flex items-center">
              <svg
                class="w-6 h-6 text-green-400 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Comprehensive service history at your fingertips
            </li>
            <li class="flex items-center">
              <svg
                class="w-6 h-6 text-green-400 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Exclusive access to maintenance reminders and updates
            </li>
            <li class="flex items-center">
              <svg
                class="w-6 h-6 text-green-400 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Streamlined appointment scheduling for quick service
            </li>
            <li class="flex items-center">
              <svg
                class="w-6 h-6 text-green-400 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Personalized vehicle insights and recommendations
            </li>
            <li class="flex items-center">
              <svg
                class="w-6 h-6 text-green-400 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              No credit/debit card required
            </li>
          </ul>
          <div class="mt-8">
            <!-- Star svg -->
            <div class="flex my-2">
              <Star class="mr-2" />
              <Star class="mx-2" />
              <Star class="mx-2" />
              <Star class="mx-2" />
              <HalfStar class="mx-2" />
            </div>
            <p class="text-lg font-bold mb-2">4.6 Rating</p>
            <p class="text-sm">Based on 50+ reviews</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "~/components/Base/BaseButton.vue";
import BaseCard from "~/components/Base/BaseCard.vue";
import Star from "~/assets/svg/Star.svg";
import HalfStar from "~/assets/svg/HalfStar.svg";
import InputText from "primevue/inputtext";

interface AuthFormProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  promptText: string;
  linkText: string;
  linkTo: string;
  linkClass: string;
  onSubmit: (email: string, password: string) => Promise<void>;
}

const props = defineProps<AuthFormProps>();

const supabase = useSupabaseClient();
const loading = ref(false);
const email = ref("");
const password = ref("");

async function handleSubmit() {
  loading.value = true;
  await props.onSubmit(email.value, password.value);
  loading.value = false;
}
</script>

<style scoped>
.bg-login {
  background-image: url("/assets/images/login_background.png");
  background-size: cover;
  background-position: center;
}
</style>
