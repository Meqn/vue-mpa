import Vue from 'vue'
import Vuex from 'vuex'
import AppConf from '@portal/app.config.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logo: {
      url: AppConf.logo_url || '',
      text: AppConf.logo_text || ''
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
