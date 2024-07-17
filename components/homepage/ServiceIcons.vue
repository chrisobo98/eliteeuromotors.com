<template>
    <div class="service-icons-row bg-white dark:bg-[#1d1d1d]">
      <div
        class="service-icon"
        v-for="(service, index) in services"
        :key="index"
      >
        <div class="icon">
          <img
            loading="lazy"
            decoding="async"
            width="100"
            height="100"
            :src="service.src"
            :alt="service.alt"
            :title="service.title"
            class="service-icon-image"
          />
        </div>
        <div class="label">
          <h5 class="text-2xl">{{ service.label }}</h5>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const services = [
    {
      src: 'https://eliteeuromotors.com/wp-content/uploads/2024/04/auto-parts-icon-light-05@2x.png',
      alt: '',
      title: 'auto-parts-icon-light-05@2x',
      label: 'Repairs',
    },
    {
      src: 'https://eliteeuromotors.com/wp-content/uploads/2024/04/auto-parts-icon-light-01@2x.png',
      alt: '',
      title: 'auto-parts-icon-light-01@2x',
      label: 'Brakes',
    },
    {
      src: 'https://eliteeuromotors.com/wp-content/uploads/2024/04/auto-parts-icon-dark-04@2x.png',
      alt: '',
      title: 'auto-parts-icon-dark-04@2x',
      label: 'Fluids',
    },
    {
      src: 'https://eliteeuromotors.com/wp-content/uploads/2024/04/auto-parts-icon-light-03@2x.png',
      alt: '',
      title: 'auto-parts-icon-light-03@2x',
      label: 'Batteries',
    }
  ];
  </script>
  
  <style scoped>
  .service-icons-row {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .service-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    transform: scale(0.7);
  }
  .service-icon .icon {
    margin-bottom: 5px;
  }
  .service-icon .label h5 {
    margin: 0;
  }
  .service-icon-image {
  filter: invert(44%) sepia(9%) saturate(222%) hue-rotate(174deg) brightness(90%) contrast(86%);
}

  
  @media (prefers-color-scheme: dark) {
    .service-icon-image {
        filter: invert(44%) sepia(9%) saturate(222%) hue-rotate(174deg) brightness(90%) contrast(86%);
    }
  }
  </style>
  