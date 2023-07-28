<template>
  <nav>
    <router-link to="/Tiffauges/" v-for="(page) in pages" :key="page" v-on:click="() => isActiv(page.name)"
      class="navLink">
      <img :src="page.src" :alt="page.alt">
    </router-link>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'NavbarMachine',
  props: {
    pages: { type: Object, required: true },
  },
  data() {
    return {}
  },
  methods: {
    ...mapMutations(['setActivPage']),
    isActiv(page) {
      this.isOpen = false
      this.setActivPage(page)
    }
  }
}
</script>

<style scoped>
.navLink {
  border: none;
  margin: 0.5rem;
  cursor: pointer;
  z-index: 1;
}

.navLink img {
  width: 5rem;
}

nav {
  position: fixed;
  bottom: 0;
  right: 0;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}
</style>