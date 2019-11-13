import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const state = {
  account:'1111',//账号
}
const store = new Vuex.Store({
  strict: debug,
  state,
  getters,
  mutations,
  actions,
})

export default store
