<template>
    <div class="home">
        <Game v-if="activPage === 'Game'"></Game>
        <GalleryMachine v-if="activPage === 'Machines'"></GalleryMachine>
    </div>
</template>

<script>
import GalleryMachine from '@/components/GalleryMachine.vue'
import Game from '@/components/Game.vue'
import { mapState } from 'vuex';

export default {
    name: 'HomePage',
    components: {
        GalleryMachine,
        Game
    },
    props: {
        pages: { type: Object, required: true }
    },
    data() {
        return {
            homeText: ""
        }
    },
    computed: {
        ...mapState(['activPage']),
    },
    methods: {},
    beforeMount() { }
}
</script>

<style>
.home {
    background: no-repeat top url(../assets/img/backgroundWar.svg);
    background-size: cover;
    height: auto;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}
</style>
