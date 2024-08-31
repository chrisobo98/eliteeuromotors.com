<template>
  <section>
    <div class="slider-container">
      <p class="uppercase sm:text-lg text-gray-600 dark:text-gray-300 my-4">
        {{ $t("home.home.servicing_since_2007") }}
      </p>
      <div class="slider">
        <div class="slide-track">
          <div v-for="(image, index) in images" :key="index" class="slide">
            <NuxtImg
              provider="cloudflare"
              :src="image"
              class="h-[130px] w-auto"
              alt="logo"
            />
          </div>
          <!-- Duplicate the images to create an infinite scroll effect -->
          <div
            v-for="(image, index) in images"
            :key="`duplicate-${index}`"
            class="slide"
          >
            <NuxtImg
              provider="cloudflare"
              loading="lazy"
              :src="image"
              class="h-[130px] w-auto"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const images = [
  "/278a51e2-5d13-4ffc-b330-772269890800/public",
  "/75c38cae-35ed-451a-970b-a3ad1eb3f400/public",
  "/ba3c4279-cbbe-4f71-2d4a-fae155965f00/public",
  "/25c54c18-c29c-4ed7-0297-08b97f130c00/public",
  "/553d47af-fc45-492b-58c8-61ac53912900/public",
];
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(
      calc(-250px * 5)
    ); /* Adjust based on the number of images */
  }
}
.slider-container {
  text-align: center;
  margin: auto;
}
.slider {
  height: 150px;
  margin-top: 20px;
  overflow: hidden;
  position: relative;
}
.slider::before,
.slider::after {
  content: "";
  height: 150px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slide-track {
  display: flex;
  animation: scroll 40s linear infinite;
}
.slide {
  flex: 0 0 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
}
</style>
