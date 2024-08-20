<script setup lang="ts">
const props = defineProps<{
  data: any
}>()

const imagePath = computed(() => {
  return `url(${props.data.cover_image})`;
})
</script>

<template>
  <div class="travel-preview is-flex is-flex-direction-column is-justify-content-flex-end has-text-white">
    <p class="travel-title is-size-3 has-text-weight-bold" @click="navigateTo(`/viaggi/${data.slug}`)">{{ data.title }}</p>
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <span class="is-size-5">{{ data.duration }} giorni</span>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
        <span class="is-size-4 has-text-weight-bold">{{ data.price }} €</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.travel-preview {
  height: 400px;
  background-image: v-bind(imagePath);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 12px;
  border-radius: 6px;
}
.travel-title {
  cursor: pointer;
}
</style>