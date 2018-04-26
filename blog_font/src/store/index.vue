import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)
import api from '../fetch/api.js'
import * as types from './type.js';
console.log(types);
const FETCH_LOADING = 'FETCH_LOADING';
export default new Vuex.Store({
   state:{
     fetchLoading: false
   },
   getters:{
    fetchLoading: state => state.fetchLoading
   },
   actions:{
    FETCH_LOADING({
         commit
         }, res) {
         commit(types.FETCH_LOADING, res)
    }
   },
   mutations:{
    [types.FETCH_LOADING] (state, res) {
     state.fetchLoading = res
     }
   }
})
