<template>
  <section class="space-y-4 bg-white dark:bg-[#1d1d1d]">
    <div class="w-full md:w-9/12 mx-auto">
      <h1 class="text-4xl md:text-6xl font-bold ml-4 text-center md:text-left">
        {{ $t("account.profile") }}
      </h1>
      <hr class="my-6 mx-24 md:mx-2 border-gray-200 dark:border-gray-600" />
      <!-- Profile Picture and Edit Card -->
      <BaseCard>
        <div class="flex flex-col sm:flex-row items-center justify-between">
          <div
            class="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 text-center sm:text-left"
          >
            <img
              class="inline-block h-24 w-24 rounded-full ring-2 ring-white mx-auto sm:mx-0"
              src="https://i.ibb.co/TLxgMwW/T03-E1-AWDP-UF2-JJNFRS-f53e19ccd891-512.jpg"
              alt=""
            />
            <div class="mt-4 sm:mt-0">
              <h2 class="text-xl font-semibold">{{ personalInfo.fullName }}</h2>
              <p>{{ personalInfo.email }}</p>
              <p>{{ addressInfo.city }}, {{ addressInfo.state }}</p>
            </div>
          </div>
          <div class="mt-4 sm:mt-0">
            <div v-if="!editMode" class="grid grid-cols-2">
              <!-- Edit Button -->
              <button
                v-if="!editMode"
                class="flex items-center"
                @click="editMode = true"
              >
                <PencilSquareIcon class="h-5 w-5" />
                {{ $t("account.edit_button") }}
              </button>

              <!-- Sign Out Button -->
              <BaseButton
                type="submit"
                @click="signOut"
                class="col-span-1 my-3"
                :label="loading ? 'Loading' : $t('account.logout_button')"
                :disabled="loading"
              />
            </div>
            <!-- Save and Cancel Buttons -->
            <div v-else class="grid gap-4 lg:grid-cols-1 grid-cols-2">
              <BaseButton
                @click="updateProfile"
                label="Save"
                icon="check"
                type="submit"
              />
              <BaseButton
                @click="editMode = false"
                label="Cancel"
                icon="x-mark"
                type="reset"
              />
            </div>
          </div>
        </div>
      </BaseCard>

      <!-- Personal Information Card -->
      <BaseCard>
        <h3 class="text-lg font-semibold mb-4">
          {{ $t("account.personal_info.header") }}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EditableField
            v-for="(value, key) in personalInfo"
            :key="key"
            :field="key"
            :label="$t(`account.personal_info.${key}`)"
            :value="value"
            :editMode="editMode"
            @updateValue="updatePersonalInfo"
          />
        </div>
      </BaseCard>

      <!-- Address Information Card -->
      <BaseCard class="mb-0">
        <h3 class="text-lg font-semibold mb-4">
          {{ $t("account.personal_info.address.header") }}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EditableField
            v-for="(value, key) in addressInfo"
            :key="key"
            :field="key"
            :label="$t(`account.personal_info.address.${key}`)"
            :value="value"
            :editMode="editMode"
            @updateValue="updateAddressInfo"
          />
        </div>
      </BaseCard>
    </div>
  </section>
</template>

<script setup>
import BaseCard from "../components/Base/BaseCard.vue";
import BaseButton from "../components/Base/BaseButton.vue";
import EditableField from "../components/Base/EditableField.vue";
import { camelCaseToTitleCase } from "@/utils/utils.ts";
import { PencilSquareIcon } from "@heroicons/vue/24/solid";
import { ref, reactive, onMounted } from "vue";

const supabase = useSupabaseClient();
const user = useSupabaseUser().value;

useHead({
  title: 'Your Account | Manage Your Elite Euro Motors Profile',
  meta: [
    {
      name: 'description',
      content: 'Manage your Elite Euro Motors account, track your vehicle service history, and update your profile information to ensure seamless service experiences.'
    },
    {
      property: 'og:title',
      content: 'Manage Your Elite Euro Motors Account'
    },
    {
      property: 'og:description',
      content: 'Access and manage your Elite Euro Motors account, including service history, profile updates, and more for a tailored auto care experience.'
    },
    {
      property: 'og:image',
      content: 'https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/9cf2d13c-05cf-406a-8710-a496be9fb400/public'
    }
  ]
});

const editMode = ref(false);
const personalInfo = reactive({
  // Assume these are bound to form inputs
  username: "",
  fullName: "",
  email: user.email, // email is typically not editable
  website: "",
  avatar_url: "",
});
const addressInfo = reactive({
  country: "",
  city: "",
  state: "",
  address: "",
});

onMounted(async () => {
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

function toggleEdit() {
  editMode.value = !editMode.value;
}

async function signOut() {
  const { error } = await supabase.auth.signOut();
  await navigateTo({ path: "/login" });
}

function updatePersonalInfo(field, value) {
  personalInfo[field] = value;
}

function updateAddressInfo(field, value) {
  addressInfo[field] = value;
}

async function updateProfile() {
  try {
    const updates = {
      id: user.id,
      username: personalInfo.username,
      full_name: personalInfo.fullName,
      website: personalInfo.website,
      avatar_url: personalInfo.avatar_url,
      country: addressInfo.country,
      city: addressInfo.city,
      state: addressInfo.state,
      address: addressInfo.address,
      updated_at: new Date(),
    };
    const { error } = await supabase.from("profiles").upsert(updates, {
      returning: "minimal", // Don't return the updated values
    });
    if (error) throw error;
    editMode.value = false;
  } catch (error) {
    console.log(error);
  }
}

// A method to get a display name from a camelCase string
function getDisplayName(key) {
  return camelCaseToTitleCase(key);
}
</script>
