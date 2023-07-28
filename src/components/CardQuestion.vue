<template>
  <div class="cardQuestion">
    <p class="textQuestion">{{ question }}</p>
    <!-- <div v-if="image" class="preview"> -->
    <img v-if="image" class="imageQuestion" :src="'./img/' + image">
    <!-- </div> -->
    <audio v-if="audio" controls>
      <source :src="'./audio/' + audio" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <!-- <img class="bulle" src="../assets/img/bulle.svg"> -->
    <div class="proposals">
      <button v-for="(proposal) in proposals" class="button proposal" :key=proposal v-on:click="checkAnswer(proposal)">{{
        proposal }}</button>
    </div>
    <!-- <img class="femme" src="../assets/img/femme.svg"> -->
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'CardQuestion',
  components: {},
  props: {
    question: { type: String, required: true },
    proposals: { type: Object, required: true },
    answer: { type: String, required: true },
    image: { type: String, required: false },
    audio: { type: String, required: false }
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(['setGameState']),
    checkAnswer(userAnswer) {
      if (userAnswer === this.answer) {
        this.setGameState("OK");
      } else {
        this.setGameState("KO");
      }
    }
  },
  beforeMount() { }
};
</script>

  
<style scoped>
.cardQuestion {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.textQuestion {}

.proposal {
  width: 40vw;
  height: 6vh;
}

.bulle {
  width: 30vw;
  float: right;
  margin: -1rem 0 0;
}

.preview {
  background-color: #382B09;
  padding: 1rem 0.5rem;
  background: no-repeat url(../assets/img/cadre4-3.svg);
  background-size: contain;
  display: flex;
  justify-content: center;
}

.imageQuestion {
  width: 80%;
}

.femme {
  width: 32vh;
  position: absolute;
  bottom: -25vh;
  right: -30vw;
}

audio {
  width: 80%;
}

.proposals {
  margin: auto 0;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}
</style>
  