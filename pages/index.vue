<script setup>
const client = useSupabaseClient();
const travels = ref([]);

async function getTravels() {
  const { data } = await client.from("travels").select("*");
  travels.value = data;
}

onMounted(() => {
  getTravels();
})
</script>

<template>
  <section class="my-hero hero is-large">
    <div class="hero-body has-text-centered">
      <h1 class="my-title title is-1 has-text-white">Travelling the human way</h1>
    </div>
  </section>
  <TravelGrid :data="travels" />
</template>

<style scoped>
.my-hero {
  background-image: url('/assets/si-vola-viaggi-10.jpg');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  .my-title {
    font-size: 4rem;
  }
}
</style>