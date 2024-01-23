<template>
  <appHeader />
  <slot />
  <appfooter />
</template>

<script setup lang="ts">
//@ import Components:
import appHeader from '@/components/inc/appHeader.vue';
import appfooter from '@/components/inc/appfooter.vue';
</script>

<style lang="scss" scoped>
// @use "@/assets/sass/helpers/mixins" as *;
// @use "@/assets/sass/helpers/functions" as *;
</style>
