<template>
  <section class="machine">
    <h2 class="machineName">{{ machineName }}</h2>
    <p class="date">{{ infos.date }}</p>
    <div class="preview">
      <img src="../assets/img/treb.jpg">
    </div>
    <div class="infos">
      <div v-if="infos.personnes">
        <img class="icon" src="../assets/img/perso.svg">
        <p class="number">{{ infos.personnes }}</p>
        <p>Personnes pour fonctionner</p>
      </div>
      <div v-if="infos.contient">
        <img class="icon" src="../assets/img/perso.svg">
        <p class="number">{{ infos.contient }}</p>
        <p>Personnes à l'intérieur</p>
      </div>
      <div v-if="infos.poids">
        <img class="icon" src="../assets/img/poids.svg">
        <p class="number">{{ infos.poids }}</p>
        <p>Poids tirés <br> (en kg)</p>
      </div>
      <div v-if="infos.cadence">
        <img class="icon" src="../assets/img/time.svg">
        <p class="number">{{ infos.cadence }}</p>
        <p>Boulets tirés par heures</p>
      </div>
      <div v-if="infos.portee">
        <img class="icon" src="../assets/img/taille.svg">
        <p class="number">{{ infos.portee }}</p>
        <p>Portée de tir <br> (en mètre)</p>
      </div>
      <div v-if="infos.hauteur">
        <img class="icon" src="../assets/img/taille.svg">
        <p class="number">{{ infos.hauteur }}</p>
        <p>Hauteur <br> (en mètre)</p>
      </div>
    </div>
    <p class="text">{{ infos.text }}</p>
  </section>
</template>

<script>
import { getDataMachine } from '@/api/getData.js'

export default {
  name: 'MachinePage',
  data() {
    return {
      machineName: '',
      beginningText: "",
      infos: []
    };
  },
  methods: {
    fetchMachineData() {
      this.machineName = this.$route.params.name
    },
    async retrieveData() {
      this.infos = await getDataMachine(this.machineName)
    }
  },
  beforeMount() {
    this.fetchMachineData()
    this.retrieveData()
  }
}
</script>

  
<style scoped>
body {
  margin: 0 !important;
}

.machine {
  /* background: rgb(209, 112, 2); */
  position: relative;
  color: #382B09;
  padding: 4rem 2rem;


  background: no-repeat top url(../assets/img/machineFond.svg);
  background-size: contain;
  height: auto;
  /* height: 40vh; */
}

h2 {
  font-family: 'Germania one', sans-serif;
  font-size: 12vw;
}

p{
  margin: 0;
}

.date {
  font-family: 'Germania one', sans-serif;
  font-size: 5vw;
}

.preview {
  /* background-color: #382B09; */
  margin: 1rem 0;
  padding: 1rem 0.5rem;
  background: no-repeat url(../assets/img/cadre4-3.svg);
  background-size: contain;
  display: flex;
  justify-content: center;
}

.preview img {
  width: 50%;
}

.infos {
  display: flex;
  flex-wrap: wrap;
}

.infos div {
  display: flex;
  flex-wrap: wrap;
  width: 42%;
  margin: 2vw;
}

.infos p {
  font-size: 5vw;
  font-family: 'Germania one', sans-serif;
}

.infos .number {
  font-size: 11vw;
}

.icon {
  width: 13vw;
}

.text {
  margin: 2rem 1rem 10vh;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}
</style>