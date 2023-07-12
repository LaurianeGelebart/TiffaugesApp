<template>
  <section class="GalleryMachine">
    <CardMachine v-for="machine in machines" :key="machine.name" :name="machine.name"></CardMachine>
  </section>
</template>
 
<script>
import { getDataMachines } from '@/api/getData.js'
import CardMachine from '@/components/CardMachine.vue'

export default {
  name: 'GalleryMachine',
  props: {},
  components: {
    CardMachine
  },
  data() {
    return {
      machines: []
    }
  },
  methods: {
    async retrieveData(){
      this.machines = await getDataMachines()
    }
  },
  beforeMount() {
    this.retrieveData()
  }
}
</script>
  
<style scoped>
@media screen and (max-width: 1024px) {}
@media screen and (max-width: 768px) {}
</style>