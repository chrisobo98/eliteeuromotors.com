<template>
  <BackgroundImage
    backgroundImage="/f42d59bb-6667-4b8a-36e1-9fd06fbdc100/public"
  />
  <section class="bg-white dark:bg-[#1d1d1d]">
    <form @submit.prevent="handleSubmit" class="w-9/12 mx-auto rounded-lg">
      <!-- contact.Contact Header -->
      <h2 class="text-4xl md:text-6xl text-center font-bold">
        {{ $t("contact.contact.header") }}
      </h2>
      <p
        class="text-center py-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        {{ $t("contact.contact.description") }}
      </p>

      <!-- Submit Form Fields -->
      <div v-for="field in fields" :key="field.id" class="mb-5">
        <label :for="field.id" class="block mb-2 font-medium">{{
          field.label
        }}</label>
        <div
          v-if="
            field.type === 'text' ||
            field.type === 'email' ||
            field.type === 'url'
          "
          class="relative"
        >
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <component :is="field.icon" class="w-5 h-5" />
          </div>
          <input
            :type="field.type"
            :id="field.id"
            v-model="form[field.id as keyof FormData]"
            :placeholder="field.placeholder"
            class="bg-gray-200 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5"
            required
          />
        </div>
        <div v-else>
          <textarea
            :id="field.id"
            v-model="form[field.id as keyof FormData]"
            :placeholder="field.placeholder"
            rows="4"
            class="block p-2.5 w-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg border border-gray-100 dark:border-gray-600 focus:ring-red-500 focus:border-red-500"
            required
          ></textarea>
        </div>
      </div>

      <!-- Submit Form Button -->
      <div class="text-right">
        <BaseButton type="submit" class="text-white" :disabled="loading">
          <!-- If the button is loading -->
          <template v-if="loading">
            <svg
              aria-hidden="true"
              role="status"
              class="inline w-4 h-4 me-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Loading...
          </template>
          <!-- not loading/finished loading -->
          <template v-else> {{ $t("contact.contact.submit") }} </template>
        </BaseButton>
      </div>
    </form>

    <!-- Successfully sent notification -->
    <Notification
      v-if="notification.show"
      :message="notification.message"
      :type="notification.type"
      :duration="5000"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emailjs from "emailjs-com";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  IdentificationIcon,
  WrenchIcon,
} from "@heroicons/vue/24/solid";
import BaseButton from "@/components/ui/BaseButton.vue";
import BackgroundImage from "@/components/ui/BackgroundImage.vue";
import Notification from "@/components/effects/MessageSentNotification.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

useHead({
  title: 'Contact Us | Get in Touch with Elite Euro Motors',
  meta: [
    {
      name: 'description',
      content: 'Need assistance? Contact Elite Euro Motors in Ocoee, FL for expert European auto care. Reach out to schedule an appointment, ask a question, or learn more about our services.'
    },
    {
      property: 'og:title',
      content: 'Contact Elite Euro Motors'
    },
    {
      property: 'og:description',
      content: 'Get in touch with Elite Euro Motors in Ocoee, FL for all your European auto service needs. Our team is here to assist you.'
    },
    {
      property: 'og:image',
      content: 'https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/7e16e5c3-584c-4067-14e1-ee943527f300/public'
    }
  ]
});

interface Field {
  id: keyof FormData;
  label: string;
  type: string;
  placeholder: string;
  icon: any;
}

interface NotificationData {
  show: boolean;
  message: string;
  type: "success" | "error";
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  vin: string;
  make_model: string;
  issue_description: string;
  service_request: string;
  details: string;
}

const fields: Field[] = [
  {
    id: "name",
    label: t("contact.contact.name_header"),
    type: "text",
    placeholder: t("contact.contact.name"),
    icon: UserIcon,
  },
  {
    id: "email",
    label: t("contact.contact.email_header"),
    type: "email",
    placeholder: t("contact.contact.email"),
    icon: EnvelopeIcon,
  },
  {
    id: "phone",
    label: t("contact.contact.phone_header"),
    type: "tel",
    placeholder: t("contact.contact.phone"),
    icon: PhoneIcon,
  },
  {
    id: "vin",
    label: t("contact.contact.vin_header"),
    type: "text",
    placeholder: t("contact.contact.vin"),
    icon: IdentificationIcon,
  },
  {
    id: "make_model",
    label: t("contact.contact.make_model_header"),
    type: "text",
    placeholder: t("contact.contact.make_model"),
    icon: WrenchIcon,
  },
  {
    id: "issue_description",
    label: t("contact.contact.issue_description_header"),
    type: "textarea",
    placeholder: t("contact.contact.issue_description"),
    icon: null,
  },
  {
    id: "service_request",
    label: t("contact.contact.service_request_header"),
    type: "textarea",
    placeholder: t("contact.contact.service_request"),
    icon: null,
  },
  {
    id: "details",
    label: t("contact.contact.other_details_header"),
    type: "textarea",
    placeholder: t("contact.contact.other_details"),
    icon: null,
  },
];

const form = ref<FormData>({
  name: "",
  email: "",
  phone: "",
  vin: "",
  make_model: "",
  issue_description: "",
  service_request: "",
  details: "",
});

const loading = ref(false);
const notification = ref<NotificationData>({
  show: false,
  message: "",
  type: "success",
});

const handleSubmit = () => {
  loading.value = true;
  notification.value.show = false;
  const templateParams = {
    name: form.value.name,
    email: form.value.email,
    phone: form.value.phone,
    vin: form.value.vin,
    make_model: form.value.make_model,
    issue_description: form.value.issue_description,
    service_request: form.value.service_request,
    details: form.value.details,
  };

  const config = useRuntimeConfig();

  const EmailJsServiceID = config.public.EmailJsServiceID;
  const EmailJsTemplateID = config.public.EmailJsTemplateID;
  const EmailJsUserID = config.public.EmailJsUserID;

  emailjs
    .send(
      EmailJsServiceID, // Replace with your EmailJS Service ID
      EmailJsTemplateID, // Replace with your EmailJS Template ID
      templateParams,
      EmailJsUserID // Replace with your EmailJS User ID
    )
    .then(
      (response) => {
        loading.value = false;
        notification.value = {
          show: true,
          message: "Message sent successfully.",
          type: "success",
        };
        clearForm();
      },
      (error) => {
        loading.value = false;
        notification.value = {
          show: true,
          message: "Message sending failed.",
          type: "error",
        };
      }
    );
};

const clearForm = () => {
  form.value = {
    name: "",
    email: "",
    phone: "",
    vin: "",
    make_model: "",
    issue_description: "",
    service_request: "",
    details: "",
  };
};
</script>

<style scoped>
/* No additional styles needed as Tailwind handles everything */
</style>
