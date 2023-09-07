import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedPlace: null
  },
  mutations: {
    SET_SELECTED_PLACE(state, selectedPlace) {
      state.selectedPlace = selectedPlace;
    },
  },
  actions: {
    setSelectedPlace({ commit }, selectedPlace) {
      commit('SET_SELECTED_PLACE', selectedPlace);
    },
  },
  modules: {
  }
})
