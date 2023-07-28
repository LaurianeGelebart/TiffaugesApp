import { createStore } from 'vuex';

const store = createStore({
  state: {
    gameState: 'beginning',
    activQuestion: 0,
    nbSuccess: 0,
    activPage: "Game"
  },
  mutations: {
    setGameState(state, newState) {
      state.gameState = newState;
    },
    setActivQuestion(state, newQuestion) {
      state.activQuestion = newQuestion;
    },
    setNbSuccess(state, newNb) {
      state.nbSuccess = newNb;
    },
    setActivPage(state, newPage) {
      state.activPage = newPage;
    },
  },
});

export default store;
