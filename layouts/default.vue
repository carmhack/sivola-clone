<script setup lang="ts">
useHead({
  htmlAttrs: {
    'data-theme': 'light',
  }
})
</script>

<template>
  <div>
    <AppNavbar />
    <slot />
    <AppFooter />
  </div>
</template>