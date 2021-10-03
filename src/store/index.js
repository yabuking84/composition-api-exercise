import {createStore} from "vuex"
import createPersistedState from "vuex-persistedstate"


export const store = createStore({
  plugins: [
    createPersistedState({
      storage: window.localStorage,
    })
  ],
  state: {
    data1: null,
  },
  mutations:{
    SET_DATA1: (state,payload)=>{
      state.data1 = payload
    }
  },
  getters: {
    data1: (state)=>{
      return state.data1
    }
  },
  actions: {
    setData1: (context,payload)=>{
      console.log('SET_DATA1');
      context.commit('SET_DATA1',payload);
    },
  }
})