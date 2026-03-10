<script setup lang="ts">
import Finished from '~/components/Finished.vue'

definePageMeta({
  key: "index",
})

const meetingAtTs = useRuntimeConfig().public.meetingIn

const now = new Date()
const meetingAt = new Date(meetingAtTs)

const shouldShowTimer = computed(() => {
  return meetingAt > now
})

const hideDot = ref(false);
onMounted(() => {
  setInterval(() => {
    hideDot.value = !hideDot.value
  }, 1000)
})
</script>

<template>
  <div v-if="shouldShowTimer" flex="~ 1 col lg:content-between" justify-evenly text="center 5xl lg:8xl">
    <p>Our next meeting is:</p>
    <p font-mono>{{ meetingAt.toLocaleString() }}</p>
    <div>
      <p>Which is</p>
      <Timer :meetingAt="meetingAt" />
      <span id="clicking-dot" font-mono :hidden="hideDot">.</span>
    </div>

    <p text="xl lg:4xl">Thanks for waiting!</p>
  </div>
  <div v-else>
    <Finished />
  </div>
</template>
