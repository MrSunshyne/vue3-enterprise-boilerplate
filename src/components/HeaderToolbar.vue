<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="bg-green-600">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between border-b border-green-500 lg:border-none">
        <div class="flex items-center">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <CodeIcon class="text-white inline-block w-16 h-16" />
          </a>
          <div class="hidden ml-10 space-x-8 lg:block">
            <router-link v-for="link in navigation" :key="link.name" :to="link.to" class="text-base font-medium text-white hover:text-green-50">
              {{ link.name }}
            </router-link>
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <SimpleButton href="https://github.com/MrSunshyne/vue3-enterprise-boilerplate">
            <span>Star on Github</span>
            <StarIcon class="inline-block w-6 h-6" />
          </SimpleButton>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <router-link v-for="link in navigation" :key="link.name" :to="link.to" class="text-base font-medium text-white hover:text-green-50">
          {{ link.name }}
        </router-link>
      </div>
    </nav>
  </header>
</template>



<script setup>
import { StarIcon } from "@heroicons/vue/outline";
import { CodeIcon } from "@heroicons/vue/solid";
import SimpleButton from "@/components/common/SimpleButton.vue";

const navigation = [
  { name: "Home", to: { name: "home" } },
  { name: "About", to: { name: "about" } },
];
</script>
 