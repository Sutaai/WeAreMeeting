<script setup lang="ts">
const t = useRuntimeConfig().public.meetingIn
</script>

<template>
  <div min-h-dvh>
    <Confused v-if="!t" />
    <NuxtLayout v-else>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
