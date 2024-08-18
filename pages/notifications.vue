<template>
  <section class="space-y-4 bg-white dark:bg-[#1d1d1d]">
    <div class="w-full md:w-8/12 mx-auto">
      <div class="px-4">
        <h1 class="text-4xl md:text-6xl text-center md:text-left font-bold mt-8">Notifications</h1>
        <div v-if="notifications.length > 0" class="flex justify-between items-center mb-4">
          <span>
            You have {{ notifications.length }} unviewed notification(s)
          </span>
          <BaseButton label="Mark all as read" @click="markAllAsRead" />
        </div>
        <div v-else class="text-center text-gray-500 mt-12 dark:text-gray-400">
          No notifications to display.
        </div>
      </div>
      <hr
        class="my-6 mx-24 md:mx-2 border-gray-200 dark:border-gray-600"
      />

      <div class="space-y-4">
        <BaseCard
          v-for="notification in notifications"
          :key="notification.id"
          class="p-4"
        >
          <div
            class="flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div class="flex items-center space-x-3 mb-2 md:mb-0">
              <span class="icon">
                <component :is="notification.icon"></component>
              </span>
              <div>
                <p class="font-bold">{{ notification.title }}</p>
                <p class="text-sm">{{ notification.message }}</p>
                <p class="text-xs text-gray-500">
                  {{ new Date(notification.created_at).toLocaleString() }}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <BaseButton
                v-if="notification.state === 'reschedule'"
                label="Reschedule"
                class="bg-blue-500 hover:bg-blue-700"
              />
              <BaseButton
                v-if="notification.state === 'reply'"
                label="Reply"
                class="bg-green-500 hover:bg-green-700"
              />
              <BaseButton
                label="Delete"
                class="col-span-1 bg-red-500 hover:bg-red-700"
                @click="deleteNotification(notification.id)"
              />
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
// Existing imports and setup...
import { ref, onMounted } from "vue";
import BaseCard from "@/components/Base/BaseCard.vue";
import BaseButton from "@/components/Base/BaseButton.vue";

const notifications = ref([]);

const supabase = useSupabaseClient();
const user = useSupabaseUser().value;

onMounted(async () => {
  if (user) {
    await fetchNotifications();
  }
});

async function fetchNotifications() {
  const { data, error } = await supabase
    .from("notifications")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching notifications:", error);
  } else {
    notifications.value = data;
  }
}

async function markNotificationAsRead(id) {
  const { error } = await supabase
    .from("notifications")
    .update({ status: "read" })
    .eq("id", id);

  if (error) {
    console.error("Error marking notification as read:", error);
  } else {
    // Update the local state
    const notification = notifications.value.find((n) => n.id === id);
    if (notification) {
      notification.status = "read";
    }
  }
}

async function deleteNotification(id) {
  const { error } = await supabase
    .from("notifications")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting notification:", error);
  } else {
    notifications.value = notifications.value.filter(
      (n) => n.id !== id
    );
  }
}

async function markAllAsRead() {
  const { error } = await supabase
    .from("notifications")
    .update({ status: "read" })
    .eq("user_id", user.id)
    .eq("status", "unread");

  if (error) {
    console.error("Error marking all as read:", error);
  } else {
    notifications.value = notifications.value.map((n) => ({
      ...n,
      status: "read",
    }));
  }
}
</script>
