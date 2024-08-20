<script setup>
import TravelRanking from './Ranking.vue';

const props = defineProps({
  data: Array
})
</script>

<template>
  <div class="columns is-multiline">
    <div v-for="item in data" class="column is-4 is-offset-1">
      <TravelRanking :data="item" />
    </div>
  </div>
</template>

<style scoped></style>