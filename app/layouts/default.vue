<script setup lang="ts">
import Menubar from 'primevue/menubar'
import type { MenuItem } from 'primevue/menuitem';

const menuItems: MenuItem[] = [
  {
    label: "Anniversaries",
    url: useRouter().resolve({ path: "/anniversaries" }).href
  },
  {
    label: "Meeting Counter",
    url: useRouter().resolve({ path: "/" }).href
  }
]
</script>

<template>
  <nav>
    <Menubar :model="menuItems" >
    </Menubar>
  </nav>
  <main m-8>
    <slot />
  </main>
</template>
