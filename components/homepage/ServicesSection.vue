<template>
  <section class="bg-white dark:bg-[#1d1d1d]">
    <div class="mx-auto w-11/12">
      <h2 class="text-6xl text-center font-bold">Popular Products & Services</h2>

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
      <div class="grid grid-cols-1 col-span-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DetailCard iconClass="m23.121,18.879l-7.68-7.681-1.411,1.398-5.01-5.01V3.422L3.129.025.044,3.109l3.398,5.891h4.164l5.003,5.003-1.431,1.417,7.7,7.701c.567.566,1.32.879,2.122.879s1.555-.312,2.121-.879c1.17-1.17,1.17-3.072,0-4.242Zm-14.768-3.455l1.424-1.424-2.009-2.009L.879,18.879c-1.17,1.17-1.17,3.072,0,4.242.567.566,1.32.879,2.122.879s1.555-.312,2.121-.879l5.465-5.465-2.233-2.233Zm14.766-11.366c.558,1.077.841,2.235.841,3.442,0,2.549-1.281,4.803-3.231,6.158l-5.281-5.281-1.412,1.397-3.017-3.017V2.355c1.368-1.446,3.297-2.355,5.44-2.355,1.181,0,2.318.272,3.381.811l.319.162-3.574,3.614c-.781.781-.781,2.047,0,2.828.781.781,2.047.781,2.828,0l3.573-3.612.132.256Z" title="Hardware"
          description="From cutting-edge engine components to stylish body kits, we’ve got the perfect accessories to take your vehicle to the next level. Explore our diverse range of hardware options and give your car the upgrade it deserves. Visit us now and experience automotive excellence!" />
        <DetailCard iconClass="M21,5h3a3.488,3.488,0,0,1-6.31,0H6.31A3.488,3.488,0,0,1,0,5H3V2H0A3.488,3.488,0,0,1,6.31,2H17.69A3.488,3.488,0,0,1,24,2H21Zm.757,7.832A12.58,12.58,0,0,1,23,18.267V22H21v2H16V22H8v2H3V22H1V18.267a12.58,12.58,0,0,1,1.243-5.435L4.1,8.979A3.517,3.517,0,0,1,7.255,7h9.49A3.517,3.517,0,0,1,19.9,8.979ZM5.5,16h0A1.5,1.5,0,0,0,4,17.5H4A1.5,1.5,0,0,0,5.5,19h0A1.5,1.5,0,0,0,7,17.5H7A1.5,1.5,0,0,0,5.5,16Zm13.007-3L17.2,10.283a.5.5,0,0,0-.45-.283H7.255a.5.5,0,0,0-.45.283L5.493,13ZM18.5,16h0A1.5,1.5,0,0,0,17,17.5h0A1.5,1.5,0,0,0,18.5,19h0A1.5,1.5,0,0,0,20,17.5h0A1.5,1.5,0,0,0,18.5,16Z" title="Accessories"
          description="Discover an extensive selection of high-quality automotive accessories to enhance your driving experience. From performance upgrades to eye-catching aesthetics, we offer everything you need to customize your vehicle and make it truly yours. Browse our wide range of accessories and unlock the full potential of your car today!" />
        <DetailCard iconClass="m11,23c0,.553-.448,1-1,1h-5c-2.757,0-5-2.243-5-5V5.001C0,2.244,2.242,0,4.999,0h10.001c2.757,0,5,2.242,5,4.999v2c0,.553-.448,1-1,1s-1-.447-1-1v-2c0-1.654-1.346-3-3-3H4.999c-1.654,0-3,1.347-3,3.001v13.999c0,1.654,1.346,3,3,3h5c.552,0,1,.447,1,1Zm12.553.553c-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.666-2.666c-.981.698-2.177,1.113-3.473,1.113-3.314,0-6-2.686-6-6s2.686-6,6-6,6,2.686,6,6c0,1.296-.415,2.492-1.113,3.473l2.666,2.666c.391.391.391,1.023,0,1.414Zm-6.573-5.227l2.703-2.614c.398-.383.412-1.016.029-1.414-.382-.399-1.015-.41-1.414-.029l-2.713,2.624c-.143.142-.378.143-.522,0l-1.132-1.108c-.395-.386-1.028-.379-1.414.016-.387.395-.38,1.027.015,1.414l1.132,1.108c.459.449,1.062.674,1.664.674s1.201-.225,1.653-.671ZM7,5h-2c-.552,0-1,.447-1,1s.448,1,1,1h2c.552,0,1-.447,1-1s-.448-1-1-1Zm0,10h-2c-.552,0-1,.447-1,1s.448,1,1,1h2c.552,0,1-.447,1-1s-.448-1-1-1Zm4-10c-.552,0-1,.447-1,1s.448,1,1,1h4c.552,0,1-.447,1-1s-.448-1-1-1h-4Zm-4,5h-2c-.552,0-1,.447-1,1s.448,1,1,1h2c.552,0,1-.447,1-1s-.448-1-1-1Z" title="Inspections"
          description="Discover our wide range of accessories that will elevate your driving experience to new heights. From stylish exterior upgrades to cutting-edge technology enhancements, we have everything you need to personalize and enhance your European car." />
        <DetailCard iconClass="M21,5.127V4a2,2,0,0,0-2-2H15a2,2,0,0,0-2,2V5H11V4A2,2,0,0,0,9,2H5A2,2,0,0,0,3,4V5.127A4.006,4.006,0,0,0,0,9v8a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A4.006,4.006,0,0,0,21,5.127ZM9,13H5a1,1,0,0,1,0-2H9A1,1,0,0,1,9,13Zm10,0H18v1a1,1,0,0,1-2,0V13H15a1,1,0,0,1,0-2h1V10a1,1,0,0,1,2,0v1h1A1,1,0,0,1,19,13Z" title="Batteries"
          description="Experience our meticulous approach in checking batteries, tires, and other essential components to ensure optimal performance and safety. Trust us to go above and beyond to keep your vehicle running smoothly." />
      </div>

        <h2 class="text-6xl text-center font-semibold text-gray-900 dark:text-white">
          More Automotive Tech Services
        </h2>

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
