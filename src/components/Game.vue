<template>
  <section class="Game">
    <CardQuestion class="questionsPart" v-if="questions[activQuestion]" v-model:activQuestion="activQuestion"
      :question="questions[activQuestion].question" :proposals="questions[activQuestion].proposals"
      :answer="questions[activQuestion].answer" :explanations="questions[activQuestion].explanations">
    </CardQuestion>
    <War class="warPart"></War>
  </section>
</template>
 
<script>
import { getDataQuestions } from '@/api/getData.js'
import CardQuestion from '@/components/CardQuestion.vue'
import War from '@/components/War.vue'

export default {
  name: 'QuestionManager',
  props: {},
  components: {
    CardQuestion,
    War
  },
  data() {
    return {
      questions: [],
      activQuestion: 0,
      nbQuestions: 0
    }
  },
  methods: {
    async retrieveData() {
      this.questions = await getDataQuestions()
      this.nbQuestions = this.questions.length
      console.log(this.nbQuestions)
    }
  },
  beforeMount() {
    this.retrieveData()
  }
}
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

.questionsPart {
  position: absolute;
  top: 20vw;
  left: 5vw;
  z-index: 1;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}
</style>