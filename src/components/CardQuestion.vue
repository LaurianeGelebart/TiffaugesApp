<template>
  <div class="cardQuestion">
    <div v-if="state === 'question'" class="question">
      <p class="textQuestion">{{ question }}</p>
      <button v-for="(proposal) in proposals" class="button proposal" :key=proposal v-on:click="checkAnswer(proposal)">{{
        proposal }}</button>
    </div>
    <div v-if="state === 'OK' || state === 'KO'" class="OK">
      <h2>{{ state }}</h2>
      <p v-if="state === 'OK'">{{ explanations.OK }}</p>
      <p v-if="state === 'KO'">{{ explanations.KO }}</p>
      <button v-on:click="continuePress()" class="button">Continuer</button>
    </div>
    <img class="bulle" src="../assets/img/bulle.svg">
  </div>
</template>

<script>
export default {
  name: 'CardQuestion',
  components: {},
  props: {
    question: { type: String, required: true },
    proposals: { type: Object, required: true },
    answer: { type: String, required: true },
    explanations: { type: Object, required: true },
    activQuestion: { type: Number, required: true }
  },
  emits: ["update:activQuestion"],
  data() {
    return {
      state: "question"
    }
  },
  methods: {
    checkAnswer(userAnswer) {
      console.log(userAnswer)
      if (userAnswer == this.answer) this.correctAnswer()
      else this.wrongAnswer()
    },
    correctAnswer() {
      this.state = "OK"
    },
    wrongAnswer() {
      this.state = "KO"
    },
    continuePress() {
      this.state = 'question'
      this.$emit("update:activQuestion", this.activQuestion + 1)
    }
  },
  beforeMount() { }
}
</script>
  
<style scoped>
.cardQuestion {
  background: center no-repeat url(../assets/img/cadre.svg);
  height: 60vh;
  width: 90vw;
  margin: 2rem auto;
}
.textQuestion{
  margin: 6rem 3rem 2rem;  
  font-size: 1.3rem;
}
.proposal{
  margin: 0.5rem 3rem;  
  font-size: 1.3rem;
  width: 10rem;
  height: 3rem;
}
.bulle{
  width: 10rem;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}
</style>
  