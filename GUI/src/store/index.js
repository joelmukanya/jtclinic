import { createStore } from 'vuex'
import router from '@/router'

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
    setDentistPatients(state, value) {
      state.dentistPatients = value
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
      const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      };
      const result = await fetch("http://localhost:4000/clinic", {
        method: "GET",
        mode: 'no-cors',
        headers: header,
      }).then((res) => res.json()).
      then( data => {return data.data})
      .catch( err => console.log(err.message)); 
      console.log(result);
      if(result) context.commit('setDentistPatients', result);
      // const data = await res.data;
      // console.log(data);
      // if(data.length ) 
      // router.push({name: 'datanotfound'});
    }
  },
  modules: {
  }
})
