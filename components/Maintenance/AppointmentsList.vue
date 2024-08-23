<template>
  <h2 class="text-lg font-semibold mb-2">
    {{ $t("maintenanceScheduling.scheduled_appointments") }}
  </h2>
  <Accordion class="bg-black rounded-3xl">
    <AccordionTab :header="$t('maintenanceScheduling.future_appointments')">
      <Accordion v-model="futureActiveIndex">
        <AccordionTab
          v-for="(appointment, index) in futureAppointments"
          :key="appointment.id"
          :header="$t('maintenanceScheduling.appointment_on') + appointment.date"
        >
          <AppointmentDetails
            :appointment="appointment"
            :showImage="showImage"
          />
        </AccordionTab>
      </Accordion>
      <div class="mt-4" v-if="futureAppointments.length === 0">
        <p> {{ $t("maintenanceScheduling.no_future_appointments") }}</p>
      </div>
    </AccordionTab>
    <AccordionTab :header="$t('maintenanceScheduling.past_appointments')">
      <Accordion v-model="pastActiveIndex" class="my-4">
        <AccordionTab
          v-for="(appointment, index) in pastAppointments"
          :key="appointment.id"
          :header="$t('maintenanceScheduling.appointment_on') + appointment.date"
        >
          <AppointmentDetails
            :appointment="appointment"
            class="mt-8"
            :showImage="showImage"
          />
        </AccordionTab>
      </Accordion>
      <div class="mt-4" v-if="pastAppointments.length === 0">
        <p> {{ $t("maintenanceScheduling.no_past_appointments") }}</p>
      </div>
    </AccordionTab>
  </Accordion>

  <vue-easy-lightbox
    :visible="visible"
    :imgs="[selectedImage]"
    @hide="visible = false"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import VueEasyLightbox from "vue-easy-lightbox";
import AppointmentDetails from "~/components/Maintenance/AppointmentDetails.vue";

const supabase = useSupabaseClient();
const pastAppointments = ref([]);
const futureAppointments = ref([]);
const futureActiveIndex = ref(null); // Manage open tab state for future appointments
const pastActiveIndex = ref(null); // Manage open tab state for past appointments
const visible = ref(false);
const selectedImage = ref("");

const showImage = (url) => {
  console.log(selectedImage)
  selectedImage.value = url;
  visible.value = true;
};

onMounted(async () => {
  await fetchAppointments();
});

async function fetchAppointments() {
  let { data: appointments, error } = await supabase
    .from("appointments")
    .select("*");

  if (error) {
    console.error("Error fetching appointments:", error);
    return;
  }

  const today = new Date();
  pastAppointments.value = appointments.filter(
    (appointment) => new Date(appointment.date) < today
  );
  futureAppointments.value = appointments.filter(
    (appointment) => new Date(appointment.date) >= today
  );
}
</script>

<style scoped>
/* Add additional styles if needed */
</style>
