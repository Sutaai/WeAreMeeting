<script setup lang="ts">
import { UseTimeAgo } from '@vueuse/components';

defineProps<{
  meetingAt: Date
}>();
</script>

<template>
  <UseTimeAgo v-slot="{ timeAgo }" :time="meetingAt" :show-second="true">
    <span font-mono>{{ timeAgo }}</span>
  </UseTimeAgo>
</template>
