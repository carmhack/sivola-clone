<script setup>
const route = useRoute();
const client = useSupabaseClient();
const travel = ref({});

async function getTravel(travelSlug) {
  const { data } = await client.from("travels")
  .select(`
    *,
    coordinator:coordinators (
      id,
      name,
      surname
    ),
    itineraries:itineraries (
      day,
      title,
      description
    ),
    rankings:travels_tags (
      value,
      tag: tags (
        name,
        label
      )
    )
  `)
  .eq('slug', travelSlug)
  .single();
  travel.value = data;
}

const coverImagePath = computed(() => {
  return `url(${travel.value.cover_image})`
})

const rankings = computed(() => {
  return travel.value.rankings?.map(item => ({ value: item.value, name: item.tag.name, label: item.tag.label }))
})

const itineraries = computed(() => {
  return travel.value.itineraries?.toSorted((a, b) => {
    if (a.day < b.day) {
      return -1;
    } else if (a.day > b.day) {
      return 1;
    } else {
      return 0;
    }
  })
})

onMounted(() => {
  getTravel(route.params.slug);
})
</script>

<template>
  <section class="my-hero hero mt-4 is-large">
    <div class="hero-body is-flex is-justify-content-start is-align-items-flex-end">
      <h1 class="title is-1 has-text-white">{{ travel.title }}</h1>
    </div>
  </section>
  <section class="section has-background-light">
    <p class="is-size-3">{{ travel.subtitle }}</p>
  </section>
  <section class="section mx-4 has-background-white">
    <TravelRankingGrid :data="rankings" />
    <div class="box has-background-white-ter">
      <p class="is-size-4"><span class="has-text-weight-bold">Viaggio aperto per:</span> {{ travel.min_age }} - {{ travel.max_age }} anni</p>
    </div>
    <p class="is-size-5">{{ travel.description }}</p>
  </section>
  <section class="itinerary section mx-4">
    <p class="title is-3">Itinerario di viaggio</p>
    <NuxtImg class="itinerary-image" :src="`${travel.itinerary_image}`" :alt="`Itinerario per ${travel.title}`" />
    <TravelItineraryDay v-for="item in itineraries" :data="item" />
  </section>
</template>

<style scoped>
.my-hero {
  background-image: v-bind(coverImagePath);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.itinerary-image {
  border-radius: 10px;
  box-shadow: 0 2px 24px 0 hsla(0,0%,76.9%,.5);
}
</style>