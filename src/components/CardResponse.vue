<template>
    <div class="cardResponse">
        <p v-if="this.gameState === 'OK'">{{ explanations.OK }}</p>
        <p v-if="this.gameState === 'KO'">{{ explanations.KO }}</p>
        <!-- <img class="bulle" src="../assets/img/bulle.svg"> -->
        <img v-if="explanations.image" class="imageQuestion" :src="'./img/' + explanations.image">
        <button v-on:click="continuePress()" class="button">Continuer</button>
        <!-- <img class="femme" src="../assets/img/femme.svg"> -->
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'CardResponse',
    components: {},
    props: {
        explanations: { type: Object, required: true },
        nbQuestions: { type: Number, required: true },
    },
    data() {
        return {}
    },
    computed: {
        ...mapState(['gameState']),
        ...mapState(['activQuestion'])
    },
    methods: {
        ...mapMutations(['setGameState']),
        ...mapMutations(['setActivQuestion']),
        continuePress() {
            if (this.nbQuestions <= this.activQuestion + 1) {
                this.setGameState("lose")
            } else {
                this.setActivQuestion(this.activQuestion + 1)
                if (this.gameState === "OK") {
                    this.setGameState("attaque")
                } else {
                    this.setGameState("question")
                }
            }
        }
    },
    beforeMount() { }
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

.imageQuestion {
    width: 80%;
}

.cardResponse {
    height: 100%;
    display: flex;
    flex-direction: column;
}

button {
    margin: auto 0;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}
</style>
  