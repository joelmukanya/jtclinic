import { createStore } from 'vuex'

export default createStore({
  state: {
    dentistPatients: null,
    dentists: null,
    patients: null 
  },
  getters: {
    getDentistPatients() {
      return state.dentistPatients
    },
    getDentists() {
      return state.dentists
    },
    getPatients() {
      return state.patients
    }
  },
  mutations: {
    setDentistPatients(state, value) {
      state.dentistPatients = value
    },
    setDentists(state, value) {
      state.dentists = value
    },
    setDentists(state, value) {
      state.patients = value
    }
  },
  actions: {
  },
  modules: {
  }
})
