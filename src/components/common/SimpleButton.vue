<template>
  <div class="inline-flex ml-3 rounded-md shadow">
    <a
      v-if="props.href"
      target="_blank"
      :href="props.href"
      class="
        inline-flex
        items-center
        justify-center
        px-5
        py-3
        text-base
        font-medium
        leading-6
        text-green-600
        transition
        duration-150
        ease-in-out
        bg-white
        border border-transparent
        rounded-md
        hover:text-green-500
        focus:outline-none
      "
    >
      <slot v-if="$slots.default" />
      <div v-else>{{ defaultText }}</div>
    </a>
    <button
      v-else
      class="
        inline-flex
        items-center
        justify-center
        px-5
        py-3
        text-base
        font-medium
        leading-6
        text-green-600
        transition
        duration-150
        ease-in-out
        bg-white
        border border-transparent
        rounded-md
        hover:text-green-500
        focus:outline-none
      "
    >
      <slot v-if="$slots.default" />
      <div v-else>{{ defaultText }}</div>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    default: "#",
  },
});

let defaultText = "Click me";
</script>
