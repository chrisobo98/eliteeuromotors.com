<template>
    <section class="flex-auto bg-white dark:bg-[#1d1d1d]">
        <BackgroundImage
            backgroundImage="/9708b529-bedd-4d30-c137-b8349734da00/public" />
        <div class="w-11/12 md:w-9/12 mx-auto">
            <h2 class="text-4xl md:text-6xl text-center font-bold"> {{ $t("services.header") }}</h2>
            <p
                class="text-center py-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                {{ $t("services.description") }}
            </p>
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2
                        class="mb-4 text-4xl text-center md:text-left tracking-tight font-extrabold text-gray-900 dark:text-white">
                        {{ $t("services.comprehensive_auto_care.header") }}
                    </h2>
                    <p class="mb-4">
                        {{ $t("services.comprehensive_auto_care.description") }}
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-8">
                    <img class="w-full rounded-lg"
                        src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/7e16e5c3-584c-4067-14e1-ee943527f300/public"
                        alt="office content 1" />
                    <img class="mt-4 w-full lg:mt-10 rounded-lg"
                        src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/184e2808-840e-4dd0-7b5a-9358a9466f00/public"
                        alt="office content 2" />
                </div>
            </div>
            <!-- "Services" -->
            <div class="mx-auto w-full">
                <div class="relative">
                    <div class="mx-auto">
                        <div class="mx-auto grid grid-cols-1">
                            <div class="flex flex-col px-3 gap-16">
                                <div v-for="article in articles" :key="article.title"
                                    class="group relative flex flex-col items-start">
                                    <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                        <div
                                            class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-red-50 opacity-0 transition group-hover:scale-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50">
                                        </div>
                                        <p :href="article.link">
                                            <span
                                                class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                        <h2 class="relative text-4xl z-10">{{ article.title }}</h2>
                                        </p>
                                    </h2>
                                    <img :src="article.icon"
                                        class="object-cover h-60 rounded-2xl object-center w-full z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
                                    </img>
                                    <p class="relative z-10 my-2 text-lg text-zinc-600 dark:text-zinc-400">
                                        {{ article.description }}
                                    </p>
                                    <ul role="list" class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-5">
                                        <li v-for="service in article.services" :key="service" class="flex items-start">
                                            <svg class="w-5 h-5 text-primary-600 dark:text-primary-500"
                                                fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="ml-2">{{ service }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from 'vue-i18n';
import BackgroundImage from "../components/ui/BackgroundImage.vue";
const { t } = useI18n();

const articles = ref([
    {
        title: t("services.flex_service.header"),
        link: "#",
        icon: "https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/e07615dd-1cd8-4582-3a7c-f2d89ca94400/public",
        dateFormatted: "September 5, 2022",
        description: t("services.flex_service.description"),
        services: [
            t("services.services_list.engine_oil_change"),
            t("services.services_list.engine_filter_replacement"),
            t("services.services_list.brake_fluid_flush"),
            t("services.services_list.cabin_air_filter_replacement"),
            t("services.services_list.engine_air_filter_replacement"),
            t("services.services_list.spark_plug_replacement"),
            t("services.services_list.remote_control_key_battery_replacement"),
            t("services.services_list.vehicle_checkup"),
            t("services.services_list.fuel_filter_replacement"),
            t("services.services_list.brake_pad_replacement"),
            t("services.services_list.brake_rotor_replacement"),
            t("services.services_list.wiper_blade_insert_replacement"),
            t("services.services_list.tire_rotation"),
            t("services.services_list.tire_balancing"),
            t("services.services_list.wheel_alignment"),
            t("services.services_list.throttle_linkage_lubrication"),
            t("services.services_list.parking_brake_adjustment"),
            t("services.services_list.steering_play_inspection"),
            t("services.services_list.headlamp_and_exterior_lamp_inspection"),
            t("services.services_list.windshield_wiper_and_washer_system_inspection"),
            t("services.services_list.seat_belt_inspection"),
            t("services.services_list.axle_ball_joint_inspection"),
            t("services.services_list.fluid_level_checks_and_corrections"),
            t("services.services_list.dust_filter_replacement"),
            t("services.services_list.diesel_particulate_filter_inspection"),
        ],
    },
    {
        title: t("services.brake_pads_rotors_fluids_shocks.header"),
        link: "#",
        icon: "https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/123d3bf2-43fd-44fa-1685-859eb6474e00/public",
        dateFormatted: "September 5, 2022",
        description: t("services.brake_pads_rotors_fluids_shocks.description"),
        services: [
            t("services.brake_pads_rotors_fluids_and_shocks.tire_replacement"),
            t("services.brake_pads_rotors_fluids_and_shocks.brake_pad_replacement"),
            t("services.brake_pads_rotors_fluids_and_shocks.brake_rotor_resurfacing_or_replacement"),
            t("services.brake_pads_rotors_fluids_and_shocks.brake_fluid_flush"),
            t("services.brake_pads_rotors_fluids_and_shocks.brake_caliper_inspection_and_service"),
            t("services.brake_pads_rotors_fluids_and_shocks.brake_line_inspection_and_replacement"),
            t("services.brake_pads_rotors_fluids_and_shocks.wheel_bearing_inspection_and_replacement"),
            t("services.brake_pads_rotors_fluids_and_shocks.steering_linkage_inspection_and_adjustment"),
            t("services.brake_pads_rotors_fluids_and_shocks.suspension_system_inspection_and_repair"),
            t("services.brake_pads_rotors_fluids_and_shocks.shock_absorber_replacement"),
            t("services.brake_pads_rotors_fluids_and_shocks.control_arm_inspection_and_replacement"),
            t("services.brake_pads_rotors_fluids_and_shocks.cv_joint_inspection_and_replacement"),
            t("services.brake_pads_rotors_fluids_and_shocks.axle_shaft_inspection_and_replacement"),
            t("services.brake_pads_rotors_fluids_and_shocks.wheel_hub_inspection_and_replacement"),
            t("services.brake_pads_rotors_fluids_and_shocks.abs_diagnostics_and_repair"),
            t("services.brake_pads_rotors_fluids_and_shocks.traction_control_system_diagnostics_and_repair"),
            t("services.brake_pads_rotors_fluids_and_shocks.brake_drum_inspection_and_resurfacing_or_replacement"),
            t("services.brake_pads_rotors_fluids_and_shocks.brake_booster_inspection_and_repair"),
            t("services.brake_pads_rotors_fluids_and_shocks.parking_brake_adjustment"),
            t("services.brake_pads_rotors_fluids_and_shocks.tpms_diagnostics_and_repair"),
            t("services.brake_pads_rotors_fluids_and_shocks.wheel_speed_sensor_inspection_and_replacement"),
        ],
    },
    {
        title: t("services.general_repairs_tune_ups_oil_changes.header"),
        link: "#",
        icon: "https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/9cf2d13c-05cf-406a-8710-a496be9fb400/public",
        dateFormatted: "September 5, 2022",
        description: t("services.general_repairs_tune_ups_oil_changes.description"),
        services: [
            t("services.general_repairs_tune_ups_oil_changes.diagnostic_services"),
            t("services.general_repairs_tune_ups_oil_changes.engine_tune_ups"),
            t("services.general_repairs_tune_ups_oil_changes.oil_change_services"),
            t("services.general_repairs_tune_ups_oil_changes.fluid_checks_and_replacements"),
            t("services.general_repairs_tune_ups_oil_changes.filter_replacements"),
            t("services.general_repairs_tune_ups_oil_changes.spark_plug_inspection_and_replacement"),
            t("services.general_repairs_tune_ups_oil_changes.belt_and_hose_inspection"),
            t("services.general_repairs_tune_ups_oil_changes.battery_testing_and_maintenance"),
            t("services.general_repairs_tune_ups_oil_changes.emissions_system_inspection"),
            t("services.general_repairs_tune_ups_oil_changes.performance_evaluation_and_recommendations"),
            t("services.general_repairs_tune_ups_oil_changes.brake_inspection_and_repair"),
            t("services.general_repairs_tune_ups_oil_changes.tire_rotation_and_balancing"),
            t("services.general_repairs_tune_ups_oil_changes.wheel_alignment"),
            t("services.general_repairs_tune_ups_oil_changes.transmission_fluid_service"),
            t("services.general_repairs_tune_ups_oil_changes.cooling_system_flush"),
            t("services.general_repairs_tune_ups_oil_changes.air_conditioning_service"),
            t("services.general_repairs_tune_ups_oil_changes.suspension_system_inspection_and_repair"),
            t("services.general_repairs_tune_ups_oil_changes.steering_system_maintenance"),
            t("services.general_repairs_tune_ups_oil_changes.exhaust_system_inspection_and_repair"),
            t("services.general_repairs_tune_ups_oil_changes.electrical_system_diagnosis_and_repair"),
            t("services.general_repairs_tune_ups_oil_changes.ignition_system"),
            t("services.general_repairs_tune_ups_oil_changes.ignition_wires"),
            t("services.general_repairs_tune_ups_oil_changes.crankcase"),
            t("services.general_repairs_tune_ups_oil_changes.fuel_pump"),
            t("services.general_repairs_tune_ups_oil_changes.sensors"),
        ],
    },
]);
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
