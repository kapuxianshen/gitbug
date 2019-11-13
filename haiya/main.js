import Vue from 'vue'
import App from './App'
import store from './vuex/index'
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'
import * as custom from './filters/custom'//添加filters筛选器
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})
const app = new Vue({
    ...App
})
app.$mount()
