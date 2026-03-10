<script setup lang="ts">
definePageMeta({
  key: "anniversaries",
})

import Timeline from 'primevue/timeline';
import { formatTimeAgo, formatDate } from '@vueuse/core';

const anniversaries = [
  {
    date: new Date(2026, 1, 16),
    text: "We've met!",
    desc: "On February 16, 2026, Chara and Anna met on Taimi. We ended up on Discord and added Alfie a bit later."
  },
  {
    date: new Date(2026, 1, 28),
    text: "We've <i>actually</i> met!",
    desc: "On February 28, 2026, we met in person for the first time in Colmar."
  },
  {
    date: new Date(2026, 2, 7, 18, 0, 0),
    text: "Meeting again??",
    desc: "On March 7, 2026, Anna came to see Alfie & Chara at their house. Bet she'll be stunned!"
  },
  {
    date: new Date(2026, 2, 18),
    text: "Challenge of a life - Chara edition",
    desc: "On March 18, 2026, Chara is getting her operation. We wish you luck and a good recovery, babe!"
  }
];
</script>

<template>
  <Timeline :value="anniversaries">
    <template #opposite="slotProps">
      <small>{{ formatDate(slotProps.item.date, "D MMMM YYYY") }}</small>
    </template>
    <template #content="slotProps" >
      <div max-w-md>
        <p v-html="slotProps.item.text" text-xl></p>
        <small block my-2>{{ formatTimeAgo(slotProps.item.date) }}</small>
        <p mb-4>{{ slotProps.item.desc }}</p>
      </div>
    </template>
  </Timeline>
</template>
