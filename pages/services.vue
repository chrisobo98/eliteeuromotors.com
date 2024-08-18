<template>
    <section class="flex-auto bg-white dark:bg-[#1d1d1d]">
        <BackgroundImage
            backgroundImage="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/586040af-b4c2-42ef-3991-fce8dadd2200/public" />
        <div class="w-11/12 md:w-9/12 mx-auto">
            <h2 class="text-4xl md:text-6xl text-center font-bold">European Car Services</h2>
            <p
                class="text-center py-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                Have a question about your vehicle? Need to schedule an appointment or
                get a quote? We're here to help! Fill out the contact form below, and
                one of our expert technicians will get back to you promptly. Whether
                you're experiencing issues with your car or just need routine
                maintenance, we're dedicated to providing top-notch service and ensuring
                your European vehicle runs smoothly.
            </p>
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2
                        class="mb-4 text-4xl text-center md:text-left tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Our Story
                    </h2>
                    <p class="mb-4">
                        Under new ownership since 2013, EEM has significantly evolved to offer
                        comprehensive services. These services notably include vehicle
                        alignment and programming, coupled with a reduced turnaround time.
                        This evolution is supported by substantial investments in equipment, a
                        robust OEM parts inventory, and the recruitment of a team of highly
                        skilled mechanics. As a result, our service range has become more
                        extensive than ever.
                    </p>
                    <p class="mb-4">
                        At EEM, we’re more than just a car shop – we’re a closely-knit family
                        of car enthusiasts. We take immense pride in our work and consistently
                        strive to exceed expectations with every vehicle that graces our
                        doors.
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-8">
                    <img class="w-full rounded-lg"
                        src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/ddb514c3-8821-4767-9489-913a300f0d00/public"
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
                                <article v-for="article in articles" :key="article.title"
                                    class="group relative flex flex-col items-start">
                                    <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                        <div
                                            class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-red-50 opacity-0 transition group-hover:scale-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50">
                                        </div>
                                        <a :href="article.link">
                                            <span
                                                class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                            <h2 class="relative text-4xl z-10">{{ article.title }}</h2>
                                        </a>
                                    </h2>
                                    <img :src="article.icon"
                                        class="object-cover h-60 rounded-2xl object-center w-full z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
                                    </img>
                                    <p class="relative z-10 mt-2 text-lg text-zinc-600 dark:text-zinc-400">
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
                                    <div aria-hidden="true"
                                        class="relative z-10 mt-4 flex items-center text-sm font-medium text-red-500">
                                        Read More
                                        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"
                                            class="ml-1 h-4 w-4 stroke-current">
                                            <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                </article>
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
import BackgroundImage from "../components/ui/BackgroundImage.vue";
const articles = ref([
    {
        title: "FLEX SERVICE, MAINTENANCE, & ULTIMATE CARE",
        link: "#",
        icon: "https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/e07615dd-1cd8-4582-3a7c-f2d89ca94400/public",
        dateFormatted: "September 5, 2022",
        description: `At our shop, we understand the intricacies of maintaining luxury vehicles like Mercedes-Benz and BMW. Our expert technicians are trained to perform a comprehensive range of services outlined in the manufacturer’s maintenance schedules. Whether it’s the meticulous A Service or the thorough B Service for Mercedes-Benz vehicles, or the BMW Ultimate Care program, we adhere strictly to manufacturer specifications and guidelines. From routine tasks like engine oil changes and filter replacements to more specialized services like brake fluid flushes and cabin air filter replacements, we ensure every aspect of your vehicle’s maintenance is handled with precision and care. Our commitment to excellence extends to tire rotations, wheel alignments, and thorough vehicle checkups, ensuring your car performs at its peak for years to come.

At our shop, we go beyond just servicing your vehicle—we provide peace of mind. With our adherence to manufacturer maintenance schedules and utilization of genuine parts, you can trust that your Mercedes-Benz or BMW is receiving the highest standard of care. Whether you’re due for an A Service, B Service, or BMW Ultimate Care, we’ve got you covered. Our attention to detail encompasses everything from brake pad replacements to spark plug changes, ensuring every component is in optimal condition. With our expertise in wheel alignments, tire rotations, and thorough inspections, you can drive away knowing your luxury vehicle is in top-notch condition, delivering the performance and reliability you expect.`,
        services: [
            "Engine oil change",
            "Engine filter replacement",
            "Brake fluid flush",
            "Cabin air filter replacement",
            "Engine air filter replacement",
            "Spark plug replacement",
            "Remote control/key battery replacement",
            "Vehicle checkup",
            "Fuel filter replacement (Diesel engines only)",
            "Brake pad replacement",
            "Brake rotor replacement",
            "Wiper blade insert replacement",
            "Tire rotation",
            "Tire balancing",
            "Wheel alignment",
            "Throttle linkage lubrication",
            "Parking brake adjustment",
            "Steering play inspection",
            "Headlamp and exterior lamp inspection",
            "Windshield wiper and washer system inspection",
            "Seat belt inspection",
            "Axle ball joint inspection",
            "Fluid level checks and corrections",
            "Dust filter replacement",
            "Diesel particulate filter inspection (BMW Diesel engines)"
        ],

    },
    {
        title: "BRAKE PADS, ROTORS, FLUIDS AND SHOCKS",
        link: "#",
        icon: "https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/123d3bf2-43fd-44fa-1685-859eb6474e00/public",
        dateFormatted: "September 5, 2022",
        description: `During a 4-wheel alignment, our expert technician will use state-of-the-art computerized technology to measure the camber, caster, and toe. He will then adjust those angles (when applicable) to match vehicle manufacturer specifications, ensuring a smooth ride, even tire wear, and efficient fuel economy. A front-end alignment and rear-end alignment will be completed during a 4-wheel alignment service.`,
        services: [
            "Tire replacement",
            "Brake pad replacement",
            "Brake rotor resurfacing or replacement",
            "Brake fluid flush",
            "Brake caliper inspection and service",
            "Brake line inspection and replacement",
            "Wheel bearing inspection and replacement",
            "Steering linkage inspection and adjustment",
            "Suspension system inspection and repair",
            "Shock absorber replacement",
            "Control arm inspection and replacement",
            "CV joint inspection and replacement",
            "Axle shaft inspection and replacement",
            "Wheel hub inspection and replacement",
            "Anti-lock braking system (ABS) diagnostics and repair",
            "Traction control system diagnostics and repair",
            "Brake drum inspection and resurfacing or replacement",
            "Brake booster inspection and repair",
            "Parking brake adjustment",
            "Tire pressure monitoring system (TPMS) diagnostics and repair",
            "Wheel speed sensor inspection and replacement"
        ],
    },
    {
        title: "GENERAL REPAIRS, TUNE-UPS & OIL CHANGES",
        link: "#",
        icon: "https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/9cf2d13c-05cf-406a-8710-a496be9fb400/public",
        dateFormatted: "September 5, 2022",
        description: `Complete Vehicle Repair, including Diagnostics. We are equipped with the latest and most up-to-date diagnostic tools necessary to understand and repair the true problems of your vehicles. At Elite Euro Motors we use Original Equipment Manufacturer (OEM) parts for repairing and servicing your auto. You can rest assured that once your vehicle comes to our shop, we will provide you with an Honest Diagnosis, a True Estimate of the cost associated with repairing it, and an efficient lead time to get it back to your driving pleasure.`,
        services: [
            "Diagnostic Services",
            "Engine Tune-Ups",
            "Oil Change Services",
            "Fluid Checks and Replacements",
            "Filter Replacements",
            "Spark Plug Inspection and Replacement",
            "Belt and Hose Inspection",
            "Battery Testing and Maintenance",
            "Emissions System Inspection",
            "Performance Evaluation and Recommendations",
            "Brake Inspection and Repair",
            "Tire Rotation and Balancing",
            "Wheel Alignment",
            "Transmission Fluid Service",
            "Cooling System Flush",
            "Air Conditioning Service",
            "Suspension System Inspection and Repair",
            "Steering System Maintenance",
            "Exhaust System Inspection and Repair",
            "Electrical System Diagnosis and Repair",
            "Ignition system",
            "Ignition wires",
            "Crankcase",
            "Fuel pump",
            "Water pump",
            "Sensors (such as an o2 sensor)"
        ],

    },
]);
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
