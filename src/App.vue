<template>
  <div class="app">
    <!-- <h1 v-if="homeText">{{ homeText }}</h1> -->
    <Game v-if="activPage==='Game'" ></Game>
    <GalleryMachine v-if="activPage==='Machines'" ></GalleryMachine>
    <Navbar v-model:activPage="activPage" :pages="pages"></Navbar>
  </div>
</template>

<script>
import { getHomeData } from '@/api/getData.js'
import GalleryMachine from '@/components/GalleryMachine.vue'
import Game from '@/components/Game.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    GalleryMachine,
    Game, 
    Navbar
  },
  data() {
    return {
      homeText: "",
      pages: [ {
        "name": "Game",
        "src": "./img/icons/war.svg",
        "alt": "Bouton d'accès au jeu"
      },{
        "name": "Machines",
        "src": "./img/icons/infos.svg",
        "alt": "Bouton d'accès aux informations machines"
      }
      ],
      activPage: "Game",
    }
  },
  methods: {
    async retrieveData() {
      this.homeText = await getHomeData()
    }
  },
  beforeMount() {
    this.retrieveData()
  }
}
</script>

<style>
@font-face {
  font-family: 'Germania one';
  src: url('./assets/fonts/GermaniaOne-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Batang';
  src: url('./assets/fonts/Batang-Regular.ttf') format('truetype');
}

* {
  margin: 0;
  padding: 0;
  /* font-family: 'Germania one', sans-serif; */
  font-family: 'Batang', serif;
}

body{
  width: 100vw;
  height: 100vh;
  background-color: #f1d8b2;
  color: black;
}

.button {
  cursor: pointer;
  border: none;
  background-color: #745A54;
  color: white;
  font-family: 'Germania one', sans-serif;
  font-size: 2rem;
  width: 15rem;
  height: 4rem;
  /* padding: 1rem; */
}


@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}</style>
