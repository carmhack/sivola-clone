<script setup>
const props = defineProps({
  value: Number,
  color: String,
})
</script>

<template>
  <div class="indicators mt-5">
    <div v-for="i in value" class="indicator active"></div>
    <div v-for="i in (5-value)" class="indicator"></div>
  </div>
</template>

<style scoped>
.indicators {
  display: flex;
  gap: 10px;
}
.indicator {
  width: 100px;
  height: 5px;
  border-radius: 12px;
}
.active {
  background-color: v-bind(color);
}
</style>