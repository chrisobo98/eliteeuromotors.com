<template>
  <section class="bg-white dark:bg-[#1d1d1d]">
    <div class=" w-11/12 md:w-8/12 mx-auto">
    <!-- Breadcrumbs -->
    <nav class="mb-4 flex rounded-2xl" aria-label="Breadcrumb">
      <ol
        class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
      >
        <li class="inline-flex items-center">
          <a
            href="#"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              class="me-2 h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
              />
            </svg>
            Home
          </a>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg
              class="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
            <span
              class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2"
              >Maintenance</span
            >
          </div>
        </li>
      </ol>
    </nav>
    <h1 class="text-6xl font-bold ml-4 mt-12 text-center md:text-left">
        Maintenance Scheduling
      </h1>
      <hr class="my-6 mx-24 md:mx-2 border-gray-200 dark:border-gray-600" />
    <div class="gap-8 lg:flex">
      <!-- Sidenav -->
      <aside
        id="sidebar"
        class="h-full w-80 hidden shrink-0 overflow-y-auto border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:block lg:rounded-lg"
      >
        <button
          id="dropdownUserNameButton"
          data-dropdown-toggle="dropdownUserName1"
          type="button"
          class="dark:hover-bg-gray-700 mb-3 flex w-full items-center justify-between rounded-lg bg-white p-2 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          <span class="sr-only">Open user menu</span>
          <div class="flex w-full items-center justify-between">
            <div class="flex items-center">
              <img
                src="https://i.ibb.co/TLxgMwW/T03-E1-AWDP-UF2-JJNFRS-f53e19ccd891-512.jpg"
                class="mr-3 h-8 w-8 rounded-md"
                alt="Bonnie avatar"
              />
              <div class="text-left">
                <div
                  class="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white"
                >
                  {{ user.email }}
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  user.username
                </div>
              </div>
            </div>
          </div>
        </button>

        <!-- User Info -->
        <div
          id="dropdownUserName1"
          class="z-10 hidden w-[294px] divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
          data-popper-placement="bottom"
        >
          <a
            href="#"
            class="flex items-center rounded px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="mr-3 h-8 w-8 rounded"
              alt="Michael avatar"
            />
            <div class="text-left">
              <div
                class="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white"
              >
                Flowbite LLC (Company)
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                company@flowbite.com
              </div>
            </div>
          </a>
        </div>

        <!-- User Info Bubble Links -->
        <div
          class="mb-4 w-full border-y border-gray-100 py-4 dark:border-gray-700"
        >
          <ul class="grid grid-cols-3 gap-2">
            <!-- Profile -->
            <li>
              <a
                href="#"
                class="group flex flex-col items-center justify-center rounded-xl bg-primary-50 p-2.5 hover:bg-primary-100 dark:bg-primary-900 dark:hover:bg-primary-800"
              >
                <span
                  class="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 group-hover:bg-primary-200 dark:bg-primary-800 dark:group-hover:bg-primary-700"
                >
                  <svg
                    class="h-5 w-5 text-primary-700 dark:text-primary-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </span>
                <span
                  class="text-sm font-medium text-primary-700 dark:text-primary-300"
                  >Profile</span
                >
              </a>
            </li>

            <!-- Gifts -->
            <li>
              <a
                href="#"
                class="group flex flex-col items-center justify-center rounded-xl bg-purple-50 p-2.5 hover:bg-purple-100 dark:bg-purple-900 dark:hover:bg-purple-800"
              >
                <span
                  class="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 dark:bg-purple-800 dark:group-hover:bg-purple-700"
                >
                  <svg
                    class="h-5 w-5 text-purple-600 dark:text-purple-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"
                    />
                  </svg>
                </span>
                <span
                  class="text-sm font-medium text-purple-600 dark:text-purple-300"
                  >Gifts</span
                >
              </a>
            </li>

            <!-- Wallet -->
            <li>
              <a
                href="#"
                class="group flex flex-col items-center justify-center rounded-xl bg-teal-50 p-2.5 hover:bg-teal-100 dark:bg-teal-900 dark:hover:bg-teal-800"
              >
                <span
                  class="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 group-hover:bg-teal-200 dark:bg-teal-800 dark:group-hover:bg-teal-700"
                >
                  <svg
                    class="h-5 w-5 text-teal-600 dark:text-teal-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                </span>
                <span
                  class="text-sm font-medium text-teal-600 dark:text-teal-300"
                  >Wallet</span
                >
              </a>
            </li>
          </ul>
        </div>

        <!-- Links -->
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="h-6 w-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
              <span class="ml-3">My vehicle</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="h-6 w-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                />
              </svg>
              <span class="ml-3 flex-1 whitespace-nowrap">Garage</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="h-6 w-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                />
              </svg>
              <span class="ml-3 flex-1 whitespace-nowrap">All vehicles</span>
            </a>
          </li>
        </ul>

        <!-- Links -->
        <ul
          class="mt-5 space-y-2 border-t border-gray-100 pt-5 dark:border-gray-700"
        >
          <li>
            <a
              href="#"
              class="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="h-6 w-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                />
              </svg>
              <span class="ml-3 flex-1 whitespace-nowrap">Settings</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group flex items-center rounded-lg p-2 text-base font-medium text-red-600 hover:bg-red-100 dark:text-red-500 dark:hover:bg-gray-700"
            >
              <svg
                class="h-6 w-6 flex-shrink-0 text-red-600 transition duration-75 dark:text-red-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                />
              </svg>
              <span class="ml-3 flex-1 whitespace-nowrap">Log out</span>
            </a>
          </li>
        </ul>
      </aside>

      <!-- Right content -->
      <form action="#">
        <div class="space-y-6 sm:space-y-8">
          <div class="card">
            <Stepper value="1" class="basis-[50rem]">
              <StepList>
                <Step value="1">Terms</Step>
                <Step value="2">Details</Step>
                <Step value="3">Confirm</Step>
              </StepList>
              <StepPanels>
                <StepPanel v-slot="{ activateCallback }" value="1">
                  <div class="flex flex-col h-auto">
                    <div class="bg-surface-50 dark:bg-surface-950">
                      <div class="space-y-6">
                        <div
                          class="mb-4 rounded-lg bg-primary-50 p-4 text-sm text-primary-800 dark:bg-gray-800 dark:text-primary-400 sm:text-base"
                          role="alert"
                        >
                          <!-- Past Appointments List -->
                          <AppointmentsList />
                          <p class="my-3 font-medium">
                            A minimum Charge of $139.00 will be charged for
                            inspecting/diagnosing a vehicle.

                            <br />If the customer declines the repair, the
                            minimum charged will have to be paid by the
                            customer.
                            <br />
                            Warranty covers material for OEM NEW parts only for
                            12 months/12,000 miles, whichever
                            <br />
                            comes first, unless otherwise stated on the repair
                            order.
                          </p>
                        </div>

                        <div
                          class="gap-4 sm:flex sm:items-center sm:justify-between"
                        >
                          <button
                            type="submit"
                            @click="activateCallback('2')"
                            class="mt-4 flex w-full items-center justify-center rounded-lg border border-primary-700 bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:border-primary-800 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-primary-700 dark:bg-primary-600 dark:hover:border-primary-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0 sm:w-auto"
                          >
                            Next: Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="2">
                  <div class="flex flex-col h-auto">
                    <div class="bg-surface-50 dark:bg-surface-950">
                      <div
                        class="mb-4 rounded-lg bg-primary-50 p-4 text-sm text-primary-800 dark:bg-gray-800 dark:text-primary-400 sm:text-base"
                      >
                        <h2 class="text-lg font-semibold mb-4">
                          Create Appointment
                        </h2>
                        <form
                          @submit.prevent="submitAppointment"
                          class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
                        >
                          <!-- Select Vehicle -->
                          <Dropdown
                            v-model="selectedVehicleId"
                            :options="vehicles"
                            optionLabel="name"
                            placeholder="Select a Vehicle"
                            class="col-span-4 lg:col-span-2"
                          />

                          <!-- Service Type -->
                          <Dropdown
                            v-model="appointmentData.serviceType"
                            :options="serviceTypes"
                            optionLabel="name"
                            class="col-span-4 lg:col-span-2"
                            placeholder="Select Service Type"
                          />

                          <!-- Preferred Time -->
                          <InputText
                            v-model="appointmentData.time"
                            class="col-span-4 lg:col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                            placeholder="Preferred Time (HH:MM)"
                          />

                          <!-- Preferred Date -->
                          <Calendar
                            class="col-span-4 lg:col-span-2"
                            v-model="appointmentData.date"
                            :showIcon="true"
                          />

                          <!-- Additional Information -->
                          <Textarea
                            v-model="appointmentData.info"
                            placeholder="Additional Information"
                            rows="3"
                            class="col-span-4 md:col-span-2 lg:col-span-2"
                          />

                          <!-- File Upload for Vehicle Images -->
                          <input
                            type="file"
                            @change="onFileChange"
                            accept="image/*"
                            class="col-span-4 lg:col-span-2"
                          />

                          <!-- Submit Button -->
                          <BaseButton
                            label="Schedule Appointment"
                            type="submit"
                            class="mt-auto col-span-4"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="flex pt-6 justify-between">
                    <button
                      type="submit"
                      @click="activateCallback('1')"
                      class="w-full mr-2 items-center justify-center rounded-lg border border-primary-700 bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:border-primary-800 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-primary-700 dark:bg-primary-600 dark:hover:border-primary-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0 sm:w-auto"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      @click="activateCallback('3')"
                      class="w-full ml-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                    >
                      Next
                    </button>
                  </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="3">
                  <div class="flex flex-col h-auto">
                    <div class="bg-surface-50 dark:bg-surface-950">
                      <div
                        class="mb-4 rounded-lg bg-primary-50 p-4 text-sm text-primary-800 dark:bg-gray-800 dark:text-primary-400 sm:text-base"
                        role="alert"
                      >
                        <!-- Past Appointments List -->
                        <AppointmentsList />
                        <p class="my-3 font-medium">
                          If you would like to confirm your appointment, please call us at '321-527-1563'
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="pt-6">
                    <button
                      type="submit"
                      @click="activateCallback('2')"
                      class="w-full mr-2 items-center justify-center rounded-lg border border-primary-700 bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:border-primary-800 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-primary-700 dark:bg-primary-600 dark:hover:border-primary-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0 sm:w-auto"
                    >
                      Back
                    </button>
                  </div>
                </StepPanel>
              </StepPanels>
            </Stepper>
          </div>
        </div>
      </form>
    </div>
  </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import BaseButton from "~/components/Base/BaseButton.vue";
import AppointmentsList from "../components/Maintenance/AppointmentsList.vue";
import Stepper from "primevue/stepper";
import StepList from "primevue/steplist";
import StepPanels from "primevue/steppanels";
import StepItem from "primevue/stepitem";
import Step from "primevue/step";
import StepPanel from "primevue/steppanel";

const user = useSupabaseUser().value;
const supabase = useSupabaseClient();

const selectedVehicleId = ref(null);
const appointmentData = ref({
  vehicleVin: "",
  serviceType: null,
  date: null,
  time: "",
  info: "",
  imageUrl: "",
});

const vehicles = ref([]);
const serviceTypes = ref([
  { id: "s1", name: "Oil Change" },
  { id: "s2", name: "Brake Inspection and Repair" },
  { id: "s3", name: "Tire Rotation and Alignment" },
  { id: "s4", name: "Engine Diagnostic" },
  { id: "s5", name: "Transmission Service" },
  { id: "s6", name: "Pre-Purchase Inspection" },
  { id: "s7", name: "Service A (Basic Maintenance)" },
  { id: "s8", name: "Service B (Advanced Maintenance)" },
  { id: "s9", name: "Service Light Reset" },
  { id: "s10", name: "Electrical System Diagnostic" },
]);

watch(selectedVehicleId, (newValue) => {
  const vehicle = vehicles.value.find((v) => v.id === newValue.id || "");
  console.log(vehicle);
  appointmentData.value.vehicleVin = vehicle ? vehicle.vin : "";
  console.log("Selected VIN:", appointmentData.value.vehicleVin);
});

onMounted(async () => {
  await fetchVehicles();
  if (user) {
    await fetchProfile();
  }
});

async function fetchProfile() {
  try {
    let { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id) // Make sure to only fetch the profile of the logged-in user.
      .single(); // Ensures that only one record is returned (or null if not found).;
    if (error) throw error;

    if (data) {
      // Assign data to the reactive objects
      personalInfo.username = data.username || "";
      personalInfo.fullName = data.full_name || "";
      personalInfo.website = data.website || "";
      personalInfo.avatar_url = data.avatar_url || "";

      // Address Info
      addressInfo.country = data.country || "";
      addressInfo.city = data.city || "";
      addressInfo.state = data.state || "";
      addressInfo.address = data.address || "";
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("loading done");
  }
}

async function fetchVehicles() {
  const { data, error } = await supabase
    .from("vehicles")
    .select("id, make, model, year, vin")
    .eq("user_id", user.id);

  if (error) {
    console.error("Error fetching vehicles:", error.message);
  } else {
    vehicles.value = data.map((vehicle) => ({
      ...vehicle,
      name: `${vehicle.make} ${vehicle.model} - ${vehicle.year}`,
    }));
  }
}

const onFileChange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const fileName = `${user.id}/${file.name}`;

  const { data, error } = await supabase.storage
    .from("Customer-Images")
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.error("Error uploading file:", error.message);
  } else {
    const filePath = data.fullPath; // Get the file path from the response data
    const publicURL = `https://kunszttmzmezybptbfbj.supabase.co/storage/v1/object/public/${filePath}`;
    appointmentData.value.imageUrl = publicURL;
    console.log("Public URL:", publicURL);
  }
};

const submitAppointment = async () => {
  try {
    const { data, error } = await supabase.from("appointments").insert([
      {
        user_id: user.id,
        vehicle_vin: appointmentData.value.vehicleVin,
        service_type: appointmentData.value.serviceType.name,
        date: appointmentData.value.date,
        time: appointmentData.value.time,
        info: appointmentData.value.info,
        image_url: appointmentData.value.imageUrl,
      },
    ]);

    if (error) {
      console.error("Error creating appointment:", error.message);
    } else {
      console.log("Appointment created successfully:", data);
      resetForm();
    }
  } catch (error) {
    console.error("Error submitting appointment:", error);
  }
};

const resetForm = () => {
  selectedVehicleId.value = null;
  appointmentData.value = {
    vehicleVin: "",
    serviceType: null,
    date: null,
    time: "",
    info: "",
    imageUrl: "",
  };
};
</script>
