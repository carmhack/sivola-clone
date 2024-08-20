<script setup>
const props = defineProps({
  data: Object
})

const isVisible = ref(false);
</script>

<template>
  <div class="itinerary-day">
    <div class="day-header">
      <span class="day-number">{{ data.day }}</span>
      <span class="day-title ml-3">{{ data.title }}</span>
      <button class="toggle" @click="isVisible = !isVisible">
        <span class="icon is-medium">
          <i v-if="!isVisible" class="fas fa-2x fa-plus"></i>
          <i v-else class="fas fa-2x fa-minus"></i>
        </span>
      </button>
    </div>
    <transition name="fade">
      <div v-if="isVisible" class="day-description">
        {{ data.description }}
      </div>
    </transition>
  </div>
</template>

<style scoped>
.itinerary-day {
  background-color: #f0f0f0;
  padding: 12px 24px;
  margin: 12px 0;
  border-radius: 12px;
}
.day-header {
  display: flex;
  align-items: center;
}
.day-number {
  flex-basis: 5%;
  font-size: 2.4rem;
  font-weight: bold;
}
.day-title {
  flex-basis: 90%;
  font-size: 1.4rem;
  font-weight: bold;
}
.toggle {
  flex-basis: 5%;
}
.day-description {
  font-size: 1.2rem;
  color: #797979;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  max-height: 0;
  transform: scaleY(0);
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
  max-height: 1000px; /* Imposta un'altezza massima sufficiente per il contenuto */
  transform: scaleY(1);
  overflow: hidden;
}
</style>