<script setup lang="ts">
const props = defineProps<{
  data: any
}>();
</script>

<template>
  <section class="section">
    <div class="columns">
      <div v-for="item in data" class="column is-12-mobile is-6-tablet">
        <TravelPreview :data="item" />
      </div>
    </div>
  </section>
</template>