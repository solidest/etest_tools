import Vue from 'vue'
import Vuex from 'vuex'
import data_format from './modules/data_format'
import tool_icons from './modules/tool_icons'
import state_code from './modules/state_code'
import net_tool from './modules/net_tool'

const {
  ipcRenderer
} = window.require('electron')
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    last_tip: {
      tip: false,
      tip_msg: '',
      tip_type: 'info'
    },
  },
  mutations: {
    setMsgInfo: function (state, msg) {
      state.last_tip.tip_msg = msg
      state.last_tip.tip_type = 'info'
      state.last_tip.tip = true
    },
    setMsgSuccess: function (state, msg) {
      state.last_tip.tip_msg = msg
      state.last_tip.tip_type = 'success'
      state.last_tip.tip = true
    },
    setMsgError: function (state, msg) {
      state.last_tip.tip_msg = msg
      state.last_tip.tip_type = 'error'
      state.last_tip.tip = true
    },
    clearMsg: function (state) {
      state.last_tip.tip_msg = '$'
      state.last_tip.tip = false
    },
  },
  actions: {
    async db_load(_, opt) {
        return await ipcRenderer.invoke('db_load', opt);
    },
    async db_list(_, opt) {
        return await ipcRenderer.invoke('db_list', opt)
    },
    async db_save(_, opt) {
      return await ipcRenderer.invoke('db_save', opt)
    },
    async db_update(_, opt) {
      return await ipcRenderer.invoke('db_update', opt)
    },
  },
  modules: {
    data_format,
    tool_icons,
    state_code,
    net_tool
  },
})

