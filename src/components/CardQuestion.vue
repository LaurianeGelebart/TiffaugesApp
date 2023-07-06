<template>
  <div class="cardQuestion">
    <div v-if="state === 'question'" class="question">
      <h2>{{ question }}</h2>
      <h3 v-for="(proposal) in proposals" class="button proposal" :key=proposal v-on:click="checkAnswer(proposal)">{{ proposal }}</h3>
    </div>
    <div v-if="state === 'OK' || state === 'KO'" class="OK">
      <h2>{{ state }}</h2>
      <p v-if="state === 'OK'">{{ explanationOK }}</p>
      <p v-if="state === 'KO'">{{ explanationKO }}</p>
      <h3 v-on:click="() => this.state='question'" class="button">Continuer</h3>
    </div>
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
    explanationKO: { type: String, required: true }, 
    explanationOK: { type: String, required: true }
  },
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
    }
  },
  beforeMount() {}
}
</script>
  
<style scoped>
.cardQuestion{
  background-color: rgb(126, 197, 176);
  height: auto;
}
@media screen and (max-width: 1024px) {}
@media screen and (max-width: 768px) {}
</style>
  