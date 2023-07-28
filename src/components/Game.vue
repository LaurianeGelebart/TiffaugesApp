<template>
  <section class="Game">
    <PanelsManager class="panel" v-if="this.gameState !== 'attaque' && this.gameState !== 'recommence'">
    </PanelsManager>
    <War :isPlayed="isPlayed" class="warPart"></War>
  </section>
</template>

<script>
import PanelsManager from '@/components/PanelsManager.vue'
import War from '@/components/War.vue'
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'QuestionManager',
  props: {},
  components: {
    PanelsManager,
    War
  },
  data() {
    return {
      isPlayed: false,
      delayDuration: 2000,
    }
  },
  computed: {
    ...mapState(['gameState']),
    ...mapState(['nbSuccess']),
  },
  methods: {
    ...mapMutations(['setGameState']),
    ...mapMutations(['setNbSuccess']),
  },
  watch: {
    gameState(newValue) {
      if (newValue === "attaque") {
        this.isPlayed = true
        setTimeout(() => {
          this.isPlayed = false
          let state
          this.setNbSuccess(this.nbSuccess + 1)
          if (this.nbSuccess >= 5) {
            state = "win"
          }
          else {
            state = "question"
          }
          setTimeout(() => {
            this.setGameState(state)
          }, this.delayDuration)
        }, this.delayDuration)
      } else {
        this.isPlayed = false
      }
    },
  },
  beforeMount() {
  }
};
</script>

  
<style scoped>
.Game {
  height: 100vh;
  width: 100vw;
  position: relative;
}

.warPart {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.panel {
  position: absolute;
  top: 20vw;
  left: 5vw;
  z-index: 1;
}


@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}
</style>