<template>
  <header
    :class="{ 'header-scrolled': scrolled }"
    class="main-header bg-[#ffffff] dark:bg-[#1d1d1d]"
  >
    <!-- Announcement Banner -->
    <div
      class="dark:bg-black bg-gray-300 text-center dark:text-white py-2 border-b border-gray-400 dark:border-red-600"
    >
      <p class="mx-3">{{ $t("home.navbar.banner_text") }}</p>
    </div>

    <!-- Top Navigation -->
    <div
      class="flex flex-wrap justify-between items-center px-4 py-2 border-b border-gray-700"
    >
      <!-- Left Section (Address, Email, Phone) -->
      <div
        class="flex flex-wrap items-center justify-center w-full lg:w-auto space-x-2"
      >
        <!-- Address -->
        <a
          href="https://maps.app.goo.gl/iZVsVauvrgdb2jUg6"
          target="_blank"
          class="flex items-center hover:bg-black hover:text-white px-4 py-2 rounded-full"
        >
          <svg
            class="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
          >
            <path
              fill="#9da1b3"
              d="m13.622,15.038c.123-.023.248-.038.378-.038h8c.129,0,.255.015.377.038l-3.67,3.67c-.378.377-1.036.377-1.414,0l-3.671-3.67Zm6.499,5.084c-.585.585-1.353.877-2.121.877s-1.536-.292-2.121-.877l-3.764-3.764c-.069.202-.115.416-.115.641v5c0,1.105.895,2,2,2h8c1.105,0,2-.895,2-2v-5c0-.226-.046-.439-.115-.642l-3.764,3.764Zm-3.05-17.193c-1.888-1.889-4.399-2.929-7.07-2.929S4.818,1.04,2.929,2.929C1.04,4.818,0,7.329,0,10s1.04,5.182,2.955,7.096l5.181,4.833c.708.661,1.864.159,1.864-.81v-4.118c0-.756.222-1.456.587-2.059-.195.023-.386.059-.587.059-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5c0,1.131-.392,2.164-1.028,3.003.01,0,.018-.003.028-.003h5.54c.3-.959.46-1.967.46-3,0-2.671-1.04-5.182-2.929-7.071Zm-7.071,4.071c-1.654,0-3,1.346-3,3s1.346,3,3,3,3-1.346,3-3-1.346-3-3-3Z"
            />
          </svg>
          <span class="hidden md:block">505 Roper Pkwy, Ocoee, FL 34761</span>
          <span class="md:hidden">Directions</span>
        </a>

        <!-- Email -->
        <a
          href="mailto:info@eliteeuromotors.com"
          target="_blank"
          class="flex items-center hover:bg-black hover:text-white px-4 py-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Filled"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            class="mr-2"
          >
            <path
              fill="#9da1b3"
              d="M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z"
            />
            <path
              fill="#9da1b3"
              d="M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z"
            />
          </svg>
          <span class="hidden md:block">info@eliteeuromotors.com</span>
          <span class="md:hidden">Email</span>
        </a>

        <!-- Phone Number -->
        <a
          href="tel:+13215271563"
          class="flex items-center hover:bg-black hover:text-white px-4 py-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            class="mr-2"
          >
            <path
              fill="#9da1b3"
              d="M23,11a1,1,0,0,1-1-1,8.008,8.008,0,0,0-8-8,1,1,0,0,1,0-2A10.011,10.011,0,0,1,24,10,1,1,0,0,1,23,11Zm-3-1a6,6,0,0,0-6-6,1,1,0,1,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0Zm2.183,12.164.91-1.049a3.1,3.1,0,0,0,0-4.377c-.031-.031-2.437-1.882-2.437-1.882a3.1,3.1,0,0,0-4.281.006l-1.906,1.606A12.784,12.784,0,0,1,7.537,9.524l1.6-1.9a3.1,3.1,0,0,0,.007-4.282S7.291.939,7.26.908A3.082,3.082,0,0,0,2.934.862l-1.15,1C-5.01,9.744,9.62,24.261,17.762,24A6.155,6.155,0,0,0,22.183,22.164Z"
            />
          </svg>
          <span class="hidden md:block">(321) 527-1563</span>
          <span class="md:hidden">Call</span>
        </a>
        <!-- Appointment Button Desktop -->
        <NuxtLink
          :to="localePath('/contact')"
          class="nav-item-bounce hidden lg:inline delay-200 text-white bg-black border border-white hover:border-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-4 py-2 text-center"
        >
          {{ $t("home.navbar.appointment") }}
        </NuxtLink>
      </div>

      <!-- Right Section (Language Selector, Support, etc.) -->
      <div
        class="flex items-center justify-between w-full mt-2 md:mt-0 md:w-auto md:ml-2"
      >
        <div class="flex items-center space-x-4">
          <NotificationsDropdown />
          <YourGarageDropdown />
          <DarkModeSwitcher @update:isDark="handleDarkModeUpdate" />
          <LanguageSelector />
        </div>

        <!-- Support Link
        <NuxtLink href="#" class="flex items-center ml-auto md:ml-4">
          {{ $t("home.navbar.support") }}
          <svg
            class="ml-2"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="20"
            height="20"
            x="0"
            y="0"
            viewBox="0 0 24 24"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <path
                d="M21 21.5V24H3v-2.5C3 19.019 5.019 17 7.5 17h9c2.481 0 4.5 2.019 4.5 4.5ZM6.872 4.027c1.529-1.433 3.531-2.141 5.63-2.011 3.924.254 6.999 3.669 6.999 7.774a3.212 3.212 0 0 1-3.209 3.209h-2.406a1.994 1.994 0 0 0-3.91.561 2 2 0 0 0 2 2c.538 0 1.025-.215 1.384-.561h2.932a5.215 5.215 0 0 0 5.209-5.209C21.5 4.634 17.604.342 12.63.021a9.41 9.41 0 0 0-7.126 2.548 9.535 9.535 0 0 0-2.99 6.432h2.003a7.42 7.42 0 0 1 2.355-4.973ZM15.1 11h1.368a.997.997 0 0 0 .997-.866 5.646 5.646 0 0 0-.091-1.831c-.444-2.079-2.131-3.756-4.213-4.184A5.51 5.51 0 0 0 6.502 9.5a5.48 5.48 0 0 0 1.52 3.792c.11-2.111 1.841-3.793 3.979-3.793 1.258 0 2.366.592 3.099 1.5Z"
                fill="#9da1b3"
                opacity="1"
                data-original="#000000"
              />
            </g>
          </svg>
        </NuxtLink> -->
      </div>
    </div>

    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-3xl p-4"
    >
      <NuxtImg
        provider="cloudflare"
        loading="lazy"
        src="/50490653-5765-4163-6f7a-5c4e4a960400/public"
        alt="Elite Euro Logo"
        class="hidden dark:block rounded-lg w-4/6 h-full md:w-1/2 lg:w-1/4"
      />
      <NuxtImg
        provider="cloudflare"
        loading="lazy"
        src="/35d4ffef-3a9e-4cc4-a5b6-86947beedc00/public"
        alt="Elite Euro Logo"
        class="dark:hidden rounded-lg w-4/6 h-full md:w-1/2 lg:w-1/4"
      />
      <div class="flex items-center space-x-3 md:space-x-3">
        <!-- Hamburger Toggle Mobile -->
        <button
          @click="toggleMenu"
          type="button"
          aria-label="Open Menu to see navigation links"
          title="Navigation menu toggle"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <!-- Nav Links -->
      <div
        :class="{ hidden: !menuOpen }"
        id="mega-menu-full"
        class="w-full lg:flex lg:w-auto lg:order-1 mt-4 lg:mt-0"
      >
        <ul
          class="flex flex-col p-4 border border-gray-100 rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:border-0"
        >
          <NavLink
            class="nav-item-bounce delay-300"
            href="/"
            :text="$t('home.navbar.home')"
          />
          <NavLink
            class="nav-item-bounce delay-500"
            href="/contact"
            :text="$t('home.navbar.contact')"
          />
          <NavLink
            class="nav-item-bounce delay-500"
            href="/services"
            :text="$t('home.navbar.services')"
          />
          <NavLink
            class="nav-item-bounce delay-500"
            href="/about"
            :text="$t('home.navbar.about')"
          />
          <NavLink
            class="nav-item-bounce delay-500"
            href="/careers"
            :text="$t('home.navbar.careers')"
          />
          <NavLink
            class="nav-item-bounce delay-500"
            href="/blog"
            :text="$t('home.navbar.blog')"
          />
          <NavLink
            class="nav-item-bounce delay-500"
            href="/account"
            :text="$t('home.navbar.account')"
          />

          <!-- Appointment Button Mobile -->
          <NuxtLink
            :to="localePath('/contact')"
            class="nav-item-bounce mt-4 delay-200 lg:hidden text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            {{ $t("home.navbar.appointment") }}
          </NuxtLink>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue";
import { defineComponent } from "vue";
import YourGarageDropdown from "~/components/ui/YourGarageDropdown.vue";
import LanguageSelector from "~/components/ui/LanguageSelector.vue";
import DarkModeSwitcher from "~/components/effects/DarkModeSwitcher.vue";
import NotificationsDropdown from "~/components/Notifications/NotificationsDropdown.vue";
import NavLink from "~/components/ui/NavLink.vue";
import DropdownItem from "~/components/ui/DropdownItem.vue";

export default defineComponent({
  components: {
    LanguageSelector,
    DarkModeSwitcher,
    NavLink,
    DropdownItem,
    YourGarageDropdown,
  },
  setup() {
    const localePath = useLocalePath();

    const isDropdownOpen = reactive({
      language: false,
      location: false,
      account: false,
      allCategories: false,
      garage: false,
    });

    const imageSrc = computed(() =>
      !isDark.value
        ? "50490653-5765-4163-6f7a-5c4e4a960400/public"
        : "/35d4ffef-3a9e-4cc4-a5b6-86947beedc00/public"
    );

    const scrolled = ref(false);
    const menuOpen = ref(false);
    const megaMenuOpen = ref(false);
    const isDark = ref(false);

    const handleScroll = () => {
      scrolled.value = window.scrollY > 50;
    };

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const toggleMegaMenu = () => {
      megaMenuOpen.value = !megaMenuOpen.value;
    };

    const handleDarkModeUpdate = (value: boolean) => {
      isDark.value = !isDark.value;
    };

    const toggleDropdown = (dropdown: keyof typeof isDropdownOpen) => {
      isDropdownOpen[dropdown] = !isDropdownOpen[dropdown];
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      localePath,
      isDropdownOpen,
      scrolled,
      menuOpen,
      megaMenuOpen,
      toggleDropdown,
      toggleMenu,
      toggleMegaMenu,
      isDark,
      imageSrc,
      handleDarkModeUpdate,
    };
  },
});
</script>

<style scoped>
.main-header {
  transition: background-color 0.3s ease, color 0.3s ease;
  top: 0;
  z-index: 50;
}

.nav-item-bounce {
  transition: color 0.3s ease;
  /* Ensure text color transition is smooth */
}

@keyframes bounce-once {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

.logo-bounce {
  animation: bounce-once 1s ease;
  animation-fill-mode: forwards;
}

.nav-item-bounce {
  animation: bounce-once 1s ease;
  animation-fill-mode: forwards;
}
</style>
