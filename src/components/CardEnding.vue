<template>
    <div v-if="endingText.losing" class="cardEnding">
        <p v-if="this.gameState === 'win'">{{ endingText.winning[stateOfText] }}</p>
        <p v-if="this.gameState === 'lose'">{{ endingText.losing[stateOfText] }}</p>
        <!-- <img class="bulle" src="../assets/img/bulle.svg"> -->
        <button v-on:click="continuePress()" class="button">Continuer</button>
        <!-- <img class="femme" src="../assets/img/femme.svg"> -->
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { getEndingData } from '@/api/getData.js';

export default {
    name: 'CardEnding',
    components: {},
    props: {},
    data() {
        return {
            endingText: [],
            stateOfText: 0
        }
    },
    computed: {
        ...mapState(['gameState']),
    },
    methods: {
        ...mapMutations(['setGameState']),
        ...mapMutations(['setNbSuccess']),
        ...mapMutations(['setActivQuestion']),
        continuePress() {
            if (this.stateOfText == 0 ){
                this.stateOfText = 1
            } else {
                this.setGameState("beginning")
                this.setNbSuccess(0)
                this.setActivQuestion(0)
            }
        },
        async retrieveData() {
            this.endingText = await getEndingData()
        }
    },
    beforeMount() {
        this.retrieveData()
    }
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

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}
</style>
  