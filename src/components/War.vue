<template>
    <div class="war">
        <h1>A LA DECOUVERTE DES MACHINES DE GUERRE</h1>
        <img class="castle" src="../assets/img/chateau.svg">
        <div class="machines">
            <img class="machine" src="../assets/img/trebIso.svg">
            <img class="machine" src="../assets/img/trebIso.svg">
            <img class="machine" src="../assets/img/trebIso.svg">
        </div>
    </div>
</template>
 
<script>

export default {
    name: 'WarPage',
    props: {},
    components: {
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
    font-size: 2.7rem;
    margin: 2rem 1rem;
    color: #745A54;
}

.castle {
    position: absolute;
    top: 5rem;
    right: -5rem;
    width: 25rem;
}

.machines>img {
    position: absolute;
}

.machines .machine:nth-child(3) {
    top: 25rem;
    left: 3rem;
    width: 5rem;
}

.machines .machine:nth-child(2) {
    top: 33rem;
    left: 5rem;
    width: 6rem;
}

.machines .machine:nth-child(1) {
    top: 40rem;
    left: 12rem;
    width: 7rem;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}
</style>