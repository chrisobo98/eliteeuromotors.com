<template>
  <section class="bg-white dark:bg-[#1d1d1d]">
    <div class="w-full md:w-9/12 mx-auto">
      <h1 class="text-6xl font-bold ml-4 mt-12 text-center md:text-left">Your vehicle: 2023 Mazda CX-30</h1>
      <hr class='my-6 mx-24 md:mx-2 border-gray-200 dark:border-gray-600' />
    <div class="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <ServiceHistoryCard />
      <ServiceHistoryCard />
      <VehiclePerformanceCard />
      <ServiceHistoryCard />
      <ServiceHistoryCard />
      <VehiclePerformanceCard />
      <!-- <ServiceHistoryCard class="col-span-1 lg:col-span-2" />
    <VehiclePerformanceCard /> -->
    </div>
  </div>
  </section>
</template>

<script setup lang="ts">
import ServiceHistoryCard from "../components/Dashboard/ServiceHistoryCard.vue";
import VehiclePerformanceCard from "../components/Dashboard/VehiclePerformanceCard.vue";
</script>
