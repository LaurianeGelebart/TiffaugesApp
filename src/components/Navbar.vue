<template>
  <nav>
    <button v-for="(page) in pages" :key="page" v-on:click="() => isActiv(page.name)">
      <img :src="page.src" :alt="page.alt">
    </button>
  </nav>
</template>

<script>
export default {
  name: 'NavbarMachine',
  props: {
    activPage: { type: String, required: true },
    pages: { type: Object, required: true },
  },
  emits: ["update:activPage"],
  data() {
    return {}
  },
  methods: {
    isActiv(page) {
      this.isOpen = false;
      this.$emit("update:activPage", page)
    }
  }
}
</script>

<style scoped>
button{
  border: none;
  width:5rem;
  margin: 0.5rem;
  cursor: pointer;
}
nav{
  position: fixed;
  bottom: 0;
  right: 0;
}
@media screen and (max-width: 1024px) {}
@media screen and (max-width: 768px) {}
</style>