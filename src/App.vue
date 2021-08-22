<template>
  <div>
    <HeaderToolbar />

    <main>
      <router-view v-slot="{ Component, route }">
        <transition name="slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <TailwindBreakpointHelper />
  </div>
</template>

<script setup>
import TailwindBreakpointHelper from "@/components/TailwindBreakpointHelper.vue";
import HeaderToolbar from "@/components/HeaderToolbar.vue";
</script>
