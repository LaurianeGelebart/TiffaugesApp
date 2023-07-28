<template>
  <div class="panelsManager">
    <div class="content" v-if="questions[activQuestion]">
      <CardQuestion v-if="this.gameState === 'question'" class="question" :question="questions[activQuestion].question"
        :proposals="questions[activQuestion].proposals" :answer="questions[activQuestion].answer"
        :image="questions[activQuestion].image" :audio="questions[activQuestion].audio"></CardQuestion>
      <CardResponse v-if="this.gameState === 'OK' || gameState === 'KO'" class="OK"
        :explanations="questions[activQuestion].explanations" :nbQuestions="nbQuestions"></CardResponse>
      <CardBeginning v-if="this.gameState === 'beginning'"></CardBeginning>
      <CardEnding v-if="this.gameState === 'win' || this.gameState === 'lose'"></CardEnding>
    </div>
  </div>
</template>

<script>
import { getDataQuestions } from "@/api/getData.js";
import { mapState } from 'vuex';
import CardQuestion from "@/components/CardQuestion.vue";
import CardResponse from "@/components/CardResponse.vue";
import CardBeginning from "@/components/CardBeginning.vue";
import CardEnding from "@/components/CardEnding.vue";

export default {
  name: "PanelsManager",
  components: {
    CardQuestion,
    CardResponse,
    CardBeginning,
    CardEnding
  },
  props: {},
  data() {
    return {
      questions: [],
      nbQuestions: 0
    };
  },
  computed: {
    ...mapState(['gameState']),
    ...mapState(['activQuestion'])
  },
  methods: {
    async retrieveData() {
      this.questions = await getDataQuestions()
      this.nbQuestions = this.questions.length
    }
  },
  beforeMount() {
    this.retrieveData()
  }
};
</script>

  
<style scoped>
.panelsManager {
  background: center no-repeat url(../assets/img/cadreQuestion.svg);
  height: 65vh;
  width: 90vw;
  margin: 4vh auto;
}

.content {
  padding: 10vh 10vw 0 13vw;
  height: calc(100% - 14vh);
  width: calc(100% - 25vw);
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}
</style>
  