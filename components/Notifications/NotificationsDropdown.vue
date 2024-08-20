<template>
    <div class="relative z-50" @click.outside="handleClickOutside">
      <!-- Notifications Button -->
      <button
        type="button"
        @click="toggleDropdown"
        class="relative p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
      >
        <span class="sr-only">View notifications</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 14 20"
        >
          <path
            d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"
          />
        </svg>
  
        <!-- Red circle for unread notifications -->
        <span
          v-if="unreadNotifications > 0"
          class="absolute top-0 right-0 inline-flex items-center justify-center h-3 w-3 p-1 mt-1 bg-red-600 text-white text-xs font-bold leading-none rounded-full transform translate-x-1/2 -translate-y-1/2"
        ></span>
      </button>
  
      <!-- Dropdown menu -->
      <div
        v-if="showDropdown"
        class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-200"
      >
        <div
          class="py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-t-lg"
        >
          Notifications
        </div>
  
        <div v-if="notifications.length > 0">
          <a
            v-for="notification in notifications"
            :key="notification.id"
            href="#"
            class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
          >
            <div class="pl-3 w-full">
              <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                {{ notification.message }}
              </div>
              <div class="text-xs font-medium text-primary-700 dark:text-primary-400">
                {{ new Date(notification.created_at).toLocaleString() }}
              </div>
            </div>
          </a>
        </div>
  
        <div v-else class="py-6 px-4 text-center text-gray-500 dark:text-gray-400">
          No new notifications
        </div>
  
        <NuxtLink
          href="/notifications"
          class="block py-2 text-base font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline rounded-b-lg"
        >
          <div class="inline-flex items-center">
            <svg
              aria-hidden="true"
              class="mr-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"
              />
            </svg>
            View all
          </div>
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  
  const showDropdown = ref(false);
  const notifications = ref([]);
  const unreadNotifications = ref(0);
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();
  
  const toggleDropdown = async () => {
    showDropdown.value = !showDropdown.value;
  
    if (showDropdown.value && user.value) {
      await fetchNotifications();
    }
  };
  
  async function fetchNotifications() {
    const { data, error } = await supabase
      .from("notifications")
      .select("*")
      .eq("user_id", user.value.id)
      .order("created_at", { ascending: false });
  
    if (error) {
      console.error("Error fetching notifications:", error);
    } else {
      notifications.value = data;
      // Count unread notifications
      unreadNotifications.value = data.filter(
        (notification) => notification.status === "unread"
      ).length;
      console.log(notifications.value); // Check if data is being fetched correctly
    }
  }
  
  // TODO we use this in YOUR GARAGE DROPDOWN as well make composable later **
  function handleClickOutside(event) {
    const dropdownElement = document.querySelector(".relative.z-50");
    if (dropdownElement && !dropdownElement.contains(event.target)) {
      showDropdown.value = false;
    }
  }
  
  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
    fetchNotifications(); // Fetch notifications on mount to display the red dot immediately
  });
  
  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
  });
  </script>
  