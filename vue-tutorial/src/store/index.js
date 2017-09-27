/**
 * Created by dell on 2017/9/25.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
  totalTime:0,
  list:[]
}
export default new Vuex.Store({
  state,
  actions,
  mutations
})
