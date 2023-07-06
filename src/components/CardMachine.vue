<template>
  <div class="cardMachine">
    <h2>{{ name }}</h2>
    <img :src="image">
  </div>
</template>

<script>
export default {
  name: 'CardMachine',
  components: {},
  props: {
    name: { type: String, required: true }, 
    image: { type: String, default: () => "./treb.jpg" },
  },
  data() {
    return {}
  },
  methods: {},
  beforeMount() {}
}
</script>
  
<style scoped>
.cardMachine{
  background-color: cadetblue;
}
img{
  width: 40vw;
}
@media screen and (max-width: 1024px) {}
@media screen and (max-width: 768px) {}
</style>
  