<script setup lang="ts">
const t = useRuntimeConfig().public.meetingIn
</script>

<template>
  <div>
    <Confused v-if="!t" />
    <NuxtPage v-else />
  </div>
</template>
