<template>
    <!-- Appointment Form -->
    <CreateAppointmentForm />

    <!-- Appointment Calendar Area -->
    <!-- <AppointmentCalendar class="col-span-4 lg:col-span-3" /> -->

    <!-- Service Documentations -->
    <!-- <ServiceDocumentation class="col-span-4 lg:col-span-2" /> -->
</template>

<script setup>
import CreateAppointmentForm from "../components/Maintenance/CreateAppointmentForm.vue";
import AppointmentCalendar from "../components/Maintenance/AppointmentCalendar.vue";
import ServiceDocumentation from "../components/Maintenance/ServiceDocumentation.vue";
</script>

<style>
.quick-actions {
  /* Add styling for buttons here */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
