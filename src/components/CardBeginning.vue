<template>
  <div class="cardBeginning">
    <p>{{ beginningText }}</p>
    <!-- <img class="bulle" src="../assets/img/bulle.svg"> -->
    <button v-on:click="attackPress()" class="button">
      <img src="../assets/img/catapulte.svg">
      <p>Attaquer</p>
    </button>
    <button v-on:click="guidePress()" class="button">
      <img src="../assets/img/guideIcon.svg">
      <p>Guide des machines</p>
    </button>
    <!-- <img class="femme" src="../assets/img/femme.svg"> -->
  </div>
</template>

<script>
import { getBeginnigData } from '@/api/getData.js';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'cardBeginning',
  components: {},
  props: {},
  data() {
    return {
      beginningText: ""
    }
  },
  computed: {
    ...mapState(['gameState'])
  },
  methods: {
    ...mapMutations(['setGameState']),
    ...mapMutations(['setActivPage']),
    attackPress() {
      this.setGameState("question")
    },
    guidePress() {
      this.setActivPage("Machines")
    },
    async retrieveData() {
      this.beginningText = await getBeginnigData()
    }
  },
  beforeMount() {
    this.retrieveData()
  }
}
</script>


<style scoped>
.bulle {
  width: 30vw;
  float: right;
  margin: -1rem 0 2rem;
}

.femme {
  width: 32vh;
  position: absolute;
  bottom: -20vh;
  right: -30vw;
}

button {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 2vw 3vw;
  height: 7vh;
  height: auto;
  width: 50vw;
  font-size: 6vw;
}

button img {
  width: 15vw;
}

button p {
  padding: 0 3vw;
  font-family: 'Germania one';
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}
</style>
