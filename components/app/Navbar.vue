<script setup>
const isOpen = ref(false);
</script>

<template>
  <nav class="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" href="/">
        <NuxtImg src="/assets/si-vola-logo-black.png" alt="Logo Si Vola" />
      </NuxtLink>

      <a @click="isOpen = !isOpen" role="button" :class="`navbar-burger ${isOpen ? 'is-active' : ''}`" aria-label="menu" aria-expanded="false" data-target="navbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar" :class="`navbar-menu ${isOpen ? 'is-active' : ''}`">
      <div class="navbar-start">
        <NuxtLink to="/viaggi" class="navbar-item">
          viaggi
        </NuxtLink>

        <NuxtLink to="/coordinatori" class="navbar-item">
          coordinatori
        </NuxtLink>

        <NuxtLink to="/faq" class="navbar-item">
          about
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>