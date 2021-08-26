<script setup>
import { reactive, ref } from "vue";
import SimpleButton from "@/components/common/SimpleButton.vue";
let count = ref(0);

function increment() {
  count.value++;
}
</script>

<template>
  <div class="max-w-screen-xl px-8 mx-auto flex">
    <div class="text-5xl w-24 h-24 grid place-items-center shadow rounded-sm">{{ count }}</div>
    <SimpleButton @click.prevent="increment">Increment</SimpleButton>
  </div>
</template>
