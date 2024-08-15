<template>
  <section class="bg-white dark:bg-[#1d1d1d]">
    <div class="w-full md:w-9/12 mx-auto">
      <h1 class="text-6xl font-bold ml-4 mt-12 text-center md:text-left">
        My Garage
      </h1>
      <hr class="my-6 mx-24 md:mx-2 border-gray-200 dark:border-gray-600" />
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <!-- Vehicle Overview Card -->
        <VehicleOverviewCard class="col-span-2" />

        <!-- Maintenance History Card -->
        <MaintenanceHistoryCard class="col-span-2 lg:col-span-1" />

        <!-- Insurance Details Card -->
        <InsuranceDetailsCard class="col-span-2 lg:col-span-1" />

        <!-- Fuel Tracking Card -->
        <FuelTrackingCard class="row-span-1 col-span-2 lg:col-span-1" />

        <!-- Registration Information Card -->
        <RegistrationInfoCard class="col-span-2 lg:col-span-1" />

        <!-- Performance Information Card -->
        <PerformanceStatsCard class="col-span-2 lg:col-span-1" />

        <!-- Safety Recall Information Card -->
        <SafetyRecallNoticesCard class="col-span-2 lg:col-span-1" />

        <!-- Expense Tracker Information Card -->
        <ExpenseTrackerCard class="col-span-2 lg:col-span-1" />

        <!-- Customization Information Card -->
        <CustomizationAndAccesories class="col-span-2 lg:col-span-1" />

        <!-- Resale Value Information Card -->
        <ResaleValueEstimator class="col-span-2 lg:col-span-1" />
      </div>
    </div>
  </section>
</template>

<script setup>
import VehicleOverviewCard from "~/components/Garage/VehicleOverviewCard.vue";
import MaintenanceHistoryCard from "~/components/Garage/MaintenanceHistoryCard.vue";
import FuelTrackingCard from "~/components/Garage/FuelTrackingCard.vue";
import InsuranceDetailsCard from "~/components/Garage/InsuranceDetailsCard.vue";
import RegistrationInfoCard from "~/components/Garage/RegistrationInfoCard.vue";
import CustomizationAndAccesories from "~/components/Garage/CustomizationAndAccesories.vue";
import ExpenseTrackerCard from "~/components/Garage/ExpenseTrackerCard.vue";
import ResaleValueEstimator from "~/components/Garage/ResaleValueEstimator.vue";
import SafetyRecallNoticesCard from "~/components/Garage/SafetyRecallNoticesCard.vue";
import PerformanceStatsCard from "~/components/Garage/PerformanceStatsCard.vue";
</script>
