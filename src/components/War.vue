<template>
    <div class="war">
        <h1>A LA DECOUVERTE<br>DES MACHINES<br>DE GUERRE</h1>
        <img class="castle" :src="'./img/castle/0.svg'">
        <img class="castle" :src="'./img/castle/' + nbSuccess + '.svg'">
        <!-- <img class="fumee playFumee" :src="'./img/fumee.svg'"> -->
        <div :class="['explosion', { 'playExplosion': isPlayed }]"></div>
        <div class="machines">
            <!-- <div id="likes" :class="['treb', 'div', { 'play': isPlayed }]"></div> -->
            <div :class="['treb', { 'playTrebuchet': isPlayed }]"></div>
            <!-- <div id="likes" :class="['treb', 'div', { 'play': isPlayed }]"></div> -->
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'WarPage',
    props: {
        isPlayed: { type: Boolean, required: true }
    },
    computed: {
        ...mapState(['gameState']),
        ...mapState(['nbSuccess']),
    },
    data() {
        return {}
    },
    methods: {
    },
    beforeMount() {
    }
}
</script>

  
<style scoped>
.war {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
}

h1 {
    width: 75%;
    font-family: 'Germania one', sans-serif;
    font-size: 10vw;
    margin: 2rem 1rem;
    color: #745A54;
}

.castle {
    position: absolute;
    top: 5rem;
    right: -10vh;
    width: 47vh;
}

.machines>img {
    position: absolute;
}

.treb {
    position: absolute;
    display: block;
    background: url("@/assets/img/animations.png") 0 0 no-repeat;
    width: 245.28px;
    height: 305px;
}

.explosion {
    position: absolute;
    top: 28vh;
    left: 20vw;
    display: block;
    background: url("@/assets/img/anim_explosion2.png") 0 0 no-repeat;
    width: 219px;
    height: 179px;
    opacity: 0;
}

.fumee {
    position: absolute;
    top: 28vh;
    left: 42vw;
    width: 2vh;
}

.machines .treb:nth-child(3) {
    top: 25rem;
    left: 3rem;
}

.machines .treb:nth-child(2) {
    top: 33rem;
    left: 5rem;
}

.machines .treb:nth-child(1) {
    top: 42vh;
    right: 16vh;
}

.playTrebuchet {
    animation: runGif steps(6) 0.5s;
    animation-delay: 0.5s;
}

.playExplosion {
    animation: runGifDisapeard steps(6) 0.5s;
    animation-delay: 1.5s;
}

.playFumee {
    animation: fumee-anim 1s infinite ease-in-out ;
    animation-delay: 1s;
}

@keyframes fumee-anim {
    0% {
        transform: scaleX(1);
    }
    20% {
        transform: scaleX(-1);
    }
    60% {
        transform: scaleX(-1);
    }
    80% {
        transform: scaleX(1);
    }
    100% {
        transform: scaleX(1);
    }
}

@keyframes runGif {
    0% {
        background-position: 0%;
    }
    100% {
        background-position: 100%;
    }
}

@keyframes runGifDisapeard {
    0% {
        opacity: 0;
        background-position: 0%;
    }
    5% {
        opacity: 1;
    }
    95% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        background-position: 100%;
    }
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}
</style>