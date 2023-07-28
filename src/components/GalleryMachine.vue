<template>
  <section class="GalleryMachine">
    <div class="content">
      <h2 class="titleGuide">Guide des machines</h2>
      <div class="gallery">
        <router-link v-for="machine in machines" :key="machine.name" :to="{
          name: 'Machine',
          params: {
            name: machine.name
          }
        }">
          <!-- <p class="presentationASupprimer">{{machine.name}}</p> -->
          <img class="cardMachine" :src="'./img/cardMachine/' + machine.img">
        </router-link>
      </div>
    </div>
  </section>
</template>
 
<script>
import { getGalleryMachines } from '@/api/getData.js'

export default {
  name: 'GalleryMachine',
  props: {},
  components: {
  },
  data() {
    return {
      machines: []
    }
  },
  methods: {
    async retrieveData() {
      this.machines = await getGalleryMachines()
    }
  },
  beforeMount() {
    this.retrieveData()
  }
}
</script>
  
<style scoped>
.GalleryMachine {
  background: no-repeat center url(../assets/img/guideFond.svg);
  background-size: cover;
  height: auto;
  min-height: 150vh;
  /* min-height: 50vh; */
  /* background: rgb(209, 112, 2); */
}

.titleGuide {
  font-family: 'Germania one', sans-serif;
  font-size: 2.5rem;
  width: 60%;
  color: #382B09;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  padding: 1vh 0 7vh;
  align-self: center;
  width: auto;
}

.cardMachine {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 32vw;
  padding: 0.7rem;
}

/* .presentationASupprimer {
  background: #382B09;
  width: 20vh;
  height: 20vh;
  margin: 2rem;
} */

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}
</style>