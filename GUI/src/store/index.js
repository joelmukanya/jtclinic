import { createStore } from 'vuex'
import router from '@/router'
import axios from 'axios';

// URL:
const clinicUrl = "http://localhost:4000/clinic";

export default createStore({
  state: {
    dentistPatients: null,
    dentists: null,
    patients: null 
  },
  getters: {
    getDentistPatients: state => state.dentistPatients,
    getDentists: state => state.dentists,
    getPatients: state => state.patients
  },
  mutations: {
    setDentistPatients(state, values) {
      state.dentistPatients = values
    },
    setDentists(state, value) {
      state.dentists = value
    },
    setPatients(state, value) {
      state.patients = value
    }
  },
  actions: {
    fetchDentistPatients: async (context)=> {
      let result = await axios.get(clinicUrl);
      let { data } = await result.data;
      if(data){
        context.commit('setDentistPatients', data)
      } else {
        router.push({name: 'datanotfound'});
      }
      
    }
  },
  modules: {
  }
})
