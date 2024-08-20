<script setup>
const props = defineProps({
  data: Object,
})
</script>

<template>
  <div class="box has-text-centered">
    <p class="ranking-value"><span class="ranking-current-value">{{ data.value }}</span>/5</p>
    <p class="ranking-label">{{ data.label }}</p>
    <TravelRankingIndicators :value="data.value" :color="RankingColor[data.name]" />
  </div>
</template>

<style scoped>
.ranking-value {
  color: gray;
  font-weight: 700;
}
.ranking-current-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: black;
}
.ranking-label {
  font-weight: 700;
}
</style>