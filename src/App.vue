<template>
  <div class="app">
    <div v-if="isPreloaded">
      <router-view :pages="pages" @hook:mounted="scrollToTop"></router-view>
      <Navbar :pages="pages"></Navbar>
    </div>
    <div class="loader-container" v-if="!isPreloaded">
      <p class="loading-text">A la découverte des machines de guerre</p>
      <!-- <p class="loading-text">-Chateau de Tiffauges-</p> -->
      <div class="loader">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <!-- <img src="./assets/img/vendee.svg"> -->
    </div>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      isPreloaded: false,
      homeText: "",
      pages: [{
        "name": "Game",
        "src": "./img/icons/war.svg",
        "alt": "Bouton d'accès au jeu"
      }, {
        "name": "Machines",
        "src": "./img/icons/infos.svg",
        "alt": "Bouton d'accès aux informations machines"
      }
      ]
    }
  },
  methods: {
    scrollToTop() {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, 100);
    },
    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async preloadImages() {
      const imageUrls = [
        "./img/icons/war.svg",
        "./img/icons/infos.svg",
        "./img/castle/0.svg",
        "./img/castle/1.svg",
        "./img/castle/2.svg",
        "./img/castle/3.svg",
        "./img/castle/4.svg",
        "./img/castle/5.svg",
        "./img/cardMachine/drawingArbalete.svg",
        "./img/cardMachine/drawingBeffroi.svg",
        "./img/cardMachine/drawingBelier.svg",
        "./img/cardMachine/drawingBombarde.svg",
        "./img/cardMachine/drawingBricole.svg",
        "./img/cardMachine/drawingCatapulte.svg",
        "./img/cardMachine/drawingCouillard.svg",
        "./img/cardMachine/drawingFauconneau.svg",
        "./img/cardMachine/drawingGrue.svg",
        "./img/cardMachine/drawingMangonneau.svg",
        "./img/cardMachine/drawingTrebuchet.svg",
        // "../assets/img/machineFond.svg",
      ];

      const preloadPromises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      await this.delay(50000);

      return Promise.all(preloadPromises);
    }

  },
  beforeMount() {
    this.preloadImages().then(() => {
      this.isPreloaded = true;
    })
      .catch((error) => {
        console.error("Erreur lors du préchargement des images :", error);
      });
  },
};
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
  font-family: 'Batang', serif;
}

html,
body {
  scroll-behavior: smooth;
}

body {
  width: 100vw;
  min-height: 100vh;
  background-color: #f1d8b2;
  color: black;
}

a {
  text-decoration: none;
}


p {
  font-size: 4vw;
  /* align-self: center; */
  margin-bottom: 1vh;
}

.button {
  cursor: pointer;
  border: none;
  background-color: #745A54;
  color: white;
  font-family: 'Germania one', sans-serif;
  font-size: 2.5vh;
  width: 45vw;
  height: 15vw;
  margin: 0.7vh;
}

.button p {
  font-size: 2.8vh;
  margin: auto;
}

.content {
  padding: 5vh;
  position: relative;
  overflow: hidden;
}

@keyframes fillAnimation {
  0% {
    width: 100%;
  }

  50% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}

.loader-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

.loading-text {
  font-family: 'Germania one', sans-serif;
  font-size: 10vw;
  color: #745A54;
  position: relative;
  text-align: center;
  z-index: 2;
}

.loader-container *{
  margin: 2vh;
}

@keyframes blink {

  0%,
  100% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
}

.loader {
  display: flex;
}

.dot {
  width: 12px;
  height: 12px;
  margin: 0 6px;
  border-radius: 50%;
  background-color: #745A54;
  animation: blink 3s infinite;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}</style>
