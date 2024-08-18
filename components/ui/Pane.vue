<template>
  <div
    :class="[
      'cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all',
      isActive ? 'active min-h-48 md:min-h-14' : '',
    ]"
    @click="handleClick"
  >
    <div
      :class="[
        'absolute background bg-center bg-cover bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10',
        `bg-${color}-500`,
      ]"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <div
      class="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"
    ></div>
    <div
      class="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30"
    >
      <div
        :class="[
          'bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full',
          `text-${color}-500`,
          'w-10',
        ]"
      >
        <svg
          class="w-5 h-5 mt-2 text-gray-500 dark:text-white mb-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path :d="iconClass" />
        </svg>
      </div>
      <div
        class="content flex flex-col justify-center leading-tight text-white whitespace-pre"
      >
        <div
          class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8"
        >
          {{ title }}
        </div>
        <div
          class="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8"
        >
          {{ subtitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch } from "vue";

const props = defineProps({
  iconClass: {
    type: String,
    default: false,
  },
  color: {
    type: String,
    default: "red",
  },
  title: {
    type: String,
    default: "Title",
  },
  subtitle: {
    type: String,
    default: "Subtitle content",
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:activePane"]);

const handleClick = () => {
  emit("update:activePane");
};
</script>

<style scoped>
.pane.active {
  flex-grow: 100;
  max-width: 100%;
}

.pane.active .content > * {
  opacity: 1;
  transform: translateX(0);
}

.pane.active .shadow {
  opacity: 0.75;
  transform: translateY(0);
}
</style>
