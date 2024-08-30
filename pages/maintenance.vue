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

useHead({
  title: 'Maintenance | Expert European Auto Care Services',
  meta: [
    {
      name: 'description',
      content: 'Keep your European vehicle in peak condition with our expert maintenance services at Elite Euro Motors. From routine checks to comprehensive care, we ensure your car performs at its best.'
    },
    {
      property: 'og:title',
      content: 'Maintenance Services at Elite Euro Motors'
    },
    {
      property: 'og:description',
      content: 'Trust Elite Euro Motors for all your European vehicle maintenance needs. Our skilled technicians provide top-tier service to keep your car running smoothly.'
    },
    {
      property: 'og:image',
      content: 'https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/7e16e5c3-584c-4067-14e1-ee943527f300/public'
    }
  ]
});

</script>

<style>
.quick-actions {
  /* Add styling for buttons here */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
