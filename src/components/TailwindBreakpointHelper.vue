<template>
  <div
    v-if="mode !== 'production'"
    class="fixed bottom-0 left-0 flex bg-gray-800 text-xs font-mono font-bold text-white items-center"
    title="'This indicates the current breakpoint'"
  >
    <!-- Active Breakpoint Indicator -->
    <div class="p-2 flex items-center justify-center bg-gray-700 sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 2xl:bg-blue-500">
      <div class="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">al</div>
      <div class="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">sm</div>
      <div class="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div>
      <div class="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">lg</div>
      <div class="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</div>
      <div class="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">2xl</div>
    </div>
    <!-- /Active Breakpoint Indicator -->

    <div class="p-2 bg-gray-700 text-text-0" :title="`The application is running in ${mode} mode`">
      {{ mode }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    mode() {
      return process.env.NODE_ENV;
    },
  },
};
</script>

<style lang="scss" scoped></style>
