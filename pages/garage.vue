<template>
  <section class="bg-white dark:bg-[#1d1d1d]">
    <div class="w-full md:w-9/12 mx-auto pt-12">
      <h1 class="text-4xl md:text-6xl font-bold ml-4 text-center md:text-left">
        {{ $t("garagePage.your_garage") }}
      </h1>
      <hr class="my-6 mx-24 md:mx-2 border-gray-200 dark:border-gray-600" />
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <!-- Vehicle Model and VIN Entry -->
        <BaseCard class="space-y-4 col-span-1">
          <h2 class="text-lg font-semibold">
            {{ $t("garagePage.add_vehicle") }}
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-3">
            <InputText
              :placeholder="$t('garagePage.vehicle_vin')"
              v-model="vehicleVIN"
              class="col-span-3"
            />
            <BaseButton @click="checkVIN" class="col-span-3 sm:col-start-2">
              {{ $t("garagePage.check_vin") }}
            </BaseButton>
          </div>
          <img
            class="rounded-3xl"
            :src="vehicleDetails.vehicle_image"
            alt="image description"
          />
        </BaseCard>

        <!-- Manually Add Vehicle Details -->
        <BaseCard class="space-y-4 col-span-1 lg:col-span-2">
          <h2 class="text-lg font-semibold">
            {{ $t("garagePage.vehicle_details") }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputText
              :placeholder="$t('garagePage.make')"
              v-model="vehicleDetails.Make"
            />
            <InputText
              :placeholder="$t('garagePage.model')"
              v-model="vehicleDetails.Model"
            />
            <InputText
              :placeholder="$t('garagePage.year')"
              v-model="vehicleDetails.ModelYear"
            />
            <BaseButton @click="saveVehicle" class="md:col-span-2">{{
              $t("garagePage.save_vehicle")
            }}</BaseButton>
          </div>
        </BaseCard>

        <!-- Existing Vehicles List -->
        <BaseCard class="space-y-4 col-span-1 lg:col-span-3">
          <h2 class="text-lg font-semibold mb-4">
            {{ $t("garagePage.existing_vehicles") }}
          </h2>
          <ul>
            <li
              v-for="vehicle in vehicles"
              :key="vehicle.id"
              class="flex justify-between items-center p-4 border rounded-lg my-2 py-2"
            >
              <span @click="selectVehicle(vehicle)" style="cursor: pointer"
                >{{ vehicle.make }} {{ vehicle.model }} -
                {{ vehicle.year }}</span
              >
              <button
                @click="confirmDelete(vehicle.id)"
                class="rounded bg-red-500 hover:bg-red-700 text-white p-1"
              >
                <span class="pi pi-times"></span>
              </button>
            </li>
          </ul>
        </BaseCard>

        <!-- Vehicle Details Modal -->
        <Dialog
          v-model:visible="vehicleModalVisible"
          :modal="true"
          header="Vehicle Details"
        >
          <div v-if="selectedVehicle">
            <ul>
              <li v-for="(value, key) in selectedVehicle" :key="key">
                <strong
                  >{{
                    key.replace(/_/g, " ").replace(/(?:^|\s)\S/g, function (a) {
                      return a.toUpperCase();
                    })
                  }}:</strong
                >
                {{ value || "N/A" }}
              </li>
            </ul>
          </div>
        </Dialog>

        <!-- Delete Confirmation Dialog -->
        <Dialog
          v-model:visible="deleteDialogVisible"
          :modal="true"
          :style="{ width: '25rem' }"
          :header="$t('confirmDelete.confirm_delete')"
        >
          <span class="p-text-secondary block mb-5">{{
            $t("confirmDelete.type_delete_to_confirm")
          }}</span>
          <div class="flex align-items-center gap-3 mb-3">
            <InputText v-model="deleteConfirmationText" class="flex-auto" />
          </div>

          <template #footer>
            <div class="flex justify-content-end gap-2">
              <Button
                type="button"
                :label="$t('confirmDelete.cancel')"
                severity="secondary"
                @click="cancelDelete"
              ></Button>
              <Button
                :label="$t('confirmDelete.delete')"
                type="button"
                :disabled="deleteConfirmationText.toLowerCase() !== 'delete'"
                @click="performDelete"
              ></Button>
            </div>
          </template>
        </Dialog>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import BaseButton from "~/components/ui/BaseButton.vue";
import BaseCard from "~/components/Base/BaseCard.vue";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import axios from "axios";

const user = useSupabaseUser().value;
const supabase = useSupabaseClient();
// const imageUrl = ref('');
const vehicleModalVisible = ref(false);
const selectedVehicle = ref(null);
const deleteDialogVisible = ref(false);
const deleteConfirmationText = ref("");
const vehicleToDelete = ref(null);
const vehicles = ref([]);
const vehicleVIN = ref("");
const vinValid = ref(false);

useHead({
  title: "Your Garage | Manage Your Vehicles at Elite Euro Motors",
  meta: [
    {
      name: "description",
      content:
        "Access and manage your vehicle information with Elite Euro Motors. Keep track of service history, schedule maintenance, and ensure your European car receives the best care.",
    },
    {
      property: "og:title",
      content: "Manage Your Vehicles at Elite Euro Motors",
    },
    {
      property: "og:description",
      content:
        "Keep your European vehicle in top condition with Elite Euro Motors. Manage your garage, track service history, and schedule maintenance with ease.",
    },
    {
      property: "og:image",
      content:
        "https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/184e2808-840e-4dd0-7b5a-9358a9466f00/public",
    },
  ],
});

const vehicleDetails = reactive({
  make: "",
  model: "",
  year: "",
  vehicle_image: "https://i.ibb.co/c3BnpVj/elementor-placeholder-image.webp",
  air_bag_loc_curtain: "",
  air_bag_loc_front: "",
  air_bag_loc_side: "",
  body_class: "",
  displacement_cc: "",
  displacement_ci: "",
  displacement_l: "",
  doors: "",
  drive_type: "",
  engine_configuration: "",
  engine_cylinders: "",
  engine_hp: "",
  engine_kw: "",
  engine_model: "",
  fuel_type_primary: "",
  gvwr: "",
  make: "",
  make_id: "",
  manufacturer: "",
  manufacturer_id: "",
  model: "",
  model_id: "",
  model_year: "",
  other_restraint_system_info: "",
  plant_city: "",
  plant_country: "",
  plant_state: "",
  seat_belts_all: "",
  series: "",
  tpms: "",
  transmission_style: "",
  vin: "",
  valve_train_design: "",
  vehicle_descriptor: "",
  vehicle_type: "",
  // other details
});

onMounted(async () => {
  await fetchVehicles();
});

// const handleImageUploaded = (imageUrl) => {
//   console.log("Received image URL:", imageUrl);
//   imageUrl.value = url;  // Store the received URL in the reactive property
// }

async function fetchVehicles() {
  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("user_id", user.id);

  if (error) {
    console.error("Error fetching vehicles:", error.message);
    return;
  }

  vehicles.value = data;
}

const checkVIN = async () => {
  const options = {
    method: "GET",
    url: "https://cis-vin-decoder.p.rapidapi.com/vinDecode",
    params: { vin: vehicleVIN.value },
    headers: {
      "X-RapidAPI-Key": "a0a95ce2fdmsheede7e89e16b23cp179677jsncff46452df5d",
      "X-RapidAPI-Host": "cis-vin-decoder.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    if (response.data) {
      // Response data from checkVIN API
      const spec = response.data.data;
      Object.keys(spec).forEach((key) => {
        vehicleDetails[key] = spec[key];
      });

      vinValid.value = true; // VIN is valid

      // Ensure we have the necessary details to form a valid search string
      const make = vehicleDetails.Make || "Unknown Make";
      const model = vehicleDetails.Model || "Unknown Model";
      const year = vehicleDetails.ModelYear || "Unknown Year";
      const vehicleString = `Transparent ${make} ${model} ${year}`;

      const imageOptions = {
        method: "POST",
        url: "https://google-api31.p.rapidapi.com/imagesearch",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "a0a95ce2fdmsheede7e89e16b23cp179677jsncff46452df5d",
          "X-RapidAPI-Host": "google-api31.p.rapidapi.com",
        },
        data: {
          text: vehicleString,
          safesearch: "off",
          region: "wt-wt",
          color: "",
          size: "",
          type_image: "",
          layout: "",
          max_results: 1,
        },
      };

      const imageResponse = await axios.request(imageOptions);
      vehicleDetails.vehicle_image =
        imageResponse.data.result?.[0]?.image || null;
    } else {
      vinValid.value = false; // VIN is not valid
    }
  } catch (error) {
    console.error(error);
  }
};

async function saveVehicle() {
  try {
    const updates = {
      user_id: user.id,
      make: vehicleDetails.Make,
      model: vehicleDetails.Model,
      year: vehicleDetails.ModelYear,
      air_bag_loc_curtain: vehicleDetails.AirBagLocCurtain,
      air_bag_loc_front: vehicleDetails.AirBagLocFront,
      air_bag_loc_side: vehicleDetails.AirBagLocSide,
      body_class: vehicleDetails.BodyClass,
      displacement_cc: vehicleDetails.DisplacementCC,
      displacement_ci: vehicleDetails.DisplacementCI,
      displacement_l: vehicleDetails.DisplacementL,
      doors: vehicleDetails.Doors,
      drive_type: vehicleDetails.DriveType,
      engine_configuration: vehicleDetails.EngineConfiguration,
      engine_cylinders: vehicleDetails.EngineCylinders,
      engine_hp: vehicleDetails.EngineHP,
      engine_kw: vehicleDetails.EngineKw,
      engine_model: vehicleDetails.EngineModel,
      fuel_type_primary: vehicleDetails.FuelTypePrimary,
      gvwr: vehicleDetails.GVWR,
      make_id: vehicleDetails.MakeID,
      manufacturer: vehicleDetails.Manufacturer,
      manufacturer_id: vehicleDetails.ManufacturerId,
      model_id: vehicleDetails.ModelID,
      model_year: vehicleDetails.ModelYear,
      other_restraint_system_info: vehicleDetails.OtherRestraintSystemInfo,
      plant_city: vehicleDetails.PlantCity,
      plant_country: vehicleDetails.PlantCountry,
      plant_state: vehicleDetails.PlantState,
      seat_belts_all: vehicleDetails.SeatBeltsAll,
      series: vehicleDetails.Series,
      tpms: vehicleDetails.TPMS,
      transmission_style: vehicleDetails.TransmissionStyle,
      vin: vehicleDetails.VIN,
      valve_train_design: vehicleDetails.ValveTrainDesign,
      vehicle_descriptor: vehicleDetails.VehicleDescriptor,
      vehicle_type: vehicleDetails.VehicleType,
      vehicle_image: vehicleDetails.vehicle_image,
    };

    const { error } = await supabase.from("vehicles").upsert(updates, {
      returning: "minimal", // Don't return the updated values
    });
    if (error) throw error;
  } catch (error) {
    console.error(error);
  } finally {
    await fetchVehicles();
  }
}

function confirmDelete(id) {
  vehicleToDelete.value = id;
  deleteDialogVisible.value = true;
}

const selectVehicle = (vehicle) => {
  selectedVehicle.value = vehicle;
  vehicleModalVisible.value = true;
};

function cancelDelete() {
  deleteDialogVisible.value = false;
  deleteConfirmationText.value = "";
  vehicleToDelete.value = null;
}

async function performDelete() {
  if (deleteConfirmationText.value.toLowerCase() === "delete") {
    const { error } = await supabase
      .from("vehicles")
      .delete()
      .match({ id: vehicleToDelete.value });
    if (!error) {
      await fetchVehicles(); // Refetch the vehicles list to update UI
      cancelDelete();
    } else console.error("Error deleting vehicle:", error);
  }
}
</script>
