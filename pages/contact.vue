<template>
  <div>
    <BackgroundImage
      background-image="/f42d59bb-6667-4b8a-36e1-9fd06fbdc100/public"
    />
    <section class="bg-white dark:bg-[#1d1d1d]">
      <div class="w-full md:w-9/12 px-4 md:px-0 mx-auto rounded-lg">
        <h1 class="text-4xl md:text-6xl text-center font-bold">
          {{ $t("contact.contact.header") }}
        </h1>
        <p class="text-center py-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          {{ $t("contact.contact.description") }}
        </p>
        <ShopmonkeyWorkRequestForm />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BackgroundImage from "@/components/ui/BackgroundImage.vue";
import ShopmonkeyWorkRequestForm from "@/components/ShopmonkeyWorkRequestForm.vue";

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

</script>
