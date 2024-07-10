<template>
  <section class="bg-white dark:bg-[#1d1d1d]">
    <div class="mx-auto w-11/12">
      <h2 class="text-6xl font-bold">Popular Products & Services</h2>

      <!-- Featured Products/Services -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <ServiceCard
          imgSrc="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/c52e6c7a-c35b-4bdb-e20c-d123fb58ee00/public"
          imgAlt="Tire Repair & Replacement" title="Tire Repair & Replacement" overlayClass="bg-black bg-opacity-50" />
        <ServiceCard
          imgSrc="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/b4636af8-73c7-4a5c-d435-3387fbb50500/public"
          imgAlt="General Inspections" title="General Inspections" overlayClass="bg-red-600 bg-opacity-80" />
        <ServiceCard
          imgSrc="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/23e68b9c-7813-4b6c-9794-52a1d5194500/public"
          imgAlt="Regular Service" title="Regular Service" overlayClass="bg-white bg-opacity-80"
          textClass="text-black" />
      </div>

      <!-- Additional Details -->
      <div class="grid grid-cols-1 col-span-4 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <DetailCard iconClass="fas fa-tools text-red-500" title="Hardware"
          description="From cutting-edge engine components to stylish body kits, we’ve got the perfect accessories to take your vehicle to the next level. Explore our diverse range of hardware options and give your car the upgrade it deserves. Visit us now and experience automotive excellence!" />
        <DetailCard iconClass="fas fa-car text-red-500" title="Accessories"
          description="Discover an extensive selection of high-quality automotive accessories to enhance your driving experience. From performance upgrades to eye-catching aesthetics, we offer everything you need to customize your vehicle and make it truly yours. Browse our wide range of accessories and unlock the full potential of your car today!" />
        <DetailCard iconClass="fas fa-clipboard-check text-red-500" title="Inspections"
          description="Discover our wide range of accessories that will elevate your driving experience to new heights. From stylish exterior upgrades to cutting-edge technology enhancements, we have everything you need to personalize and enhance your European car." />
        <DetailCard iconClass="fas fa-car-battery text-red-500" title="Batteries"
          description="Experience our meticulous approach in checking batteries, tires, and other essential components to ensure optimal performance and safety. Trust us to go above and beyond to keep your vehicle running smoothly." />
      </div>

      <div class="flex items-center justify-between gap-4">
        <h2 class="text-6xl font-semibold text-gray-900 dark:text-white">
          More Automotive Tech Services
        </h2>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <AllServicesSection v-for="(service, index) in services" :key="index" :title="service.title"
          :iconPath="service.iconPath" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ServiceCard from "@/components/ui/ServiceCard.vue";
import DetailCard from "@/components/ui/DetailCard.vue";
import AllServicesSection from "@/components/ui/AllServicesSection.vue";

interface Service {
  title: string;
  iconPath: string;
}

const services: Service[] = [
  {
    title: "Parts Sales",
    iconPath:
      "M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z",
  },
  {
    title: "Fuel System Services",
    iconPath:
      "M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z",
  },
  {
    title: "Electrical System Services",
    iconPath:
      "M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4",
  },
  {
    title: "Transmission Services",
    iconPath:
      "M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z",
  },
  {
    title: "Diagnostic Services",
    iconPath:
      "M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
  {
    title: "Maintenance Services",
    iconPath:
      "M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z",
  },
  {
    title: "Repair Services",
    iconPath:
      "M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z",
  },
  {
    title: "Battery Services",
    iconPath:
      "M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z",
  },
  {
    title: "Brake Services",
    iconPath:
      "M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z",
  },
  {
    title: "Customization Services",
    iconPath:
      "M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z",
  },
];
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>
