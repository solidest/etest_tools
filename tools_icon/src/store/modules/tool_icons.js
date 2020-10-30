const state = () => ({

  icon: '',
  icolor: undefined,
  input: '',
  sort: false,
  page: 1,
  per:'50'
})

const mutations = {
  icon(state, value) {
    state.icon = value
  },
  icolor(state, value) {
    state.icolor = value
  },
  input(state, value) {
    state.input = value == null ? "" : value
  },
  sort(state, value) {
    state.sort = value
  },
  page(state, value) {

    state.page = value
  },
  per(state, value) {
   
    state.per = value
  },
}

export default {
  namespaced: true,
  state,
  mutations
}