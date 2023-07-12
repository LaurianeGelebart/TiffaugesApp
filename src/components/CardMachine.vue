<template>
  <div class="cardMachine">
    <img :src="image">
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'CardMachine',
  components: {},
  props: {
    name: { type: String, required: true }, 
    image: { type: String, default: () => "./img/dessinTreb.svg" },
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30vw;
  padding: 1rem;
}
img{
  width: 100%;
}
h2{
  font-family: 'Germania one', sans-serif;
  color:rgb(48, 35, 30) ;
  width: 100%;
  text-align: center;
}
@media screen and (max-width: 1024px) {}
@media screen and (max-width: 768px) {}
</style>
  