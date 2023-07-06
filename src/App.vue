<template>
  <div class="app">
    <h1 v-if="data">{{ data.homeText }}</h1>
    <CardMachine v-for="machine in machines" :key="machine.name" :name="machine.name"></CardMachine>
    <CardQuestion v-for="question in questions" :key="question.question" :question="question.question" :proposals="question.proposals" :answer="question.answer" :explanationKO="question.explanationKO" :explanationOK="question.explanationOK"></CardQuestion>
  </div>
</template>

<script>
import { getData, getDataMachines, getDataQuestions } from '@/api/getData.js'
import CardMachine from '@/components/CardMachine.vue'
import CardQuestion from '@/components/CardQuestion.vue'

export default {
  name: 'App',
  components: {
    CardMachine, 
    CardQuestion
  },
  data() {
    return {
      data: [],
      machines: [],
      questions: []
    }
  },
  methods: {
    async retrieveData(){
      this.data = await getData(), 
      this.machines = await getDataMachines(), 
      this.questions = await getDataQuestions()
    }
  },
  beforeMount() {
    this.retrieveData()
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.app > *{
  margin: 2vh;
}
.button{
  cursor: pointer;
}

@media screen and (max-width: 1024px) {}
@media screen and (max-width: 768px) {}
</style>
