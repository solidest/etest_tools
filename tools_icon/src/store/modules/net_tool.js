let item = {
  bind: false,
  ms: 1000,
  dk: '',
  yczjip: '192.168.10.154',
  yczjdk: 8080,
  xylx: 'UDP',
  zjdz: '',
  jieshouleixing: 1,
  fasongleixing: 1,
  ipdz: [],
  push: "",
  jsdata: "",
  rizhi: true,
  huanhang: true,
  baocun: false,
  jiexizhuanyifu: true,
  zidonghuiche: true,
  zdfasong: false,
  zidong: false,
  zidongfasong: undefined,
  clentip: [{ip:'All',value:''}],
  changeip: '',
  socket: {},

}
const state = () => ({
  items: [item, item, item, item, item],
  select: 0
})
const mutations = {
  setItem(state, info) {
    state.items = info;
  },
  xylx(state, v) {

    state.items[state.select].xylx = v
  },
  ipdz(state, v) {
    state.items.map((item, i) => {
      state.items[i].ipdz = v
    })
  },
  zjdz(state, v) {
    state.items[state.select].zjdz = v
  },
  dk(state, v) {
    state.items[state.select].dk = v
  },
  bind(state, v) {
    state.items[state.select].bind = v
  },
  jieshouleixing(state, v) {
    state.items[state.select].jieshouleixing = v
  },
  fasongleixing(state, v) {
    state.items[state.select].fasongleixing = v
  },
  rizhi(state, v) {
    state.items[state.select].rizhi = v
  },
  jiexizhuanyifu(state, v) {
    state.items[state.select].jiexizhuanyifu = v
  },
  huanhang(state, v) {
    state.items[state.select].huanhang = v
  },
  zidonghuiche(state, v) {
    state.items[state.select].zidonghuiche = v
  },
  baocun(state, v) {
    state.items[state.select].baocun = v
  },
  zdfasong(state, v) {
    state.items[state.select].zdfasong = v
  },
  zidong(state, v) {
    state.items[state.select].zidong = v
  },
  zidongfasong(state, v) {
    state.items[state.select].zidongfasong = v
  },
  clentip(state, v) {
    state.items[state.select].clentip = v
  },
  changeip(state, v) {
    state.items[state.select].changeip = v
  },
  socket(state, v) {
    state.items[state.select].socket = v
  },
  yczjip(state, v) {
    state.items[state.select].yczjip = v
  },
  yczjdk(state, v) {
    state.items[state.select].yczjdk = v
  },
  ms(state, v) {
    state.items[state.select].ms = v
  },

  push(state, v) {
    state.items[state.select].push = v
  },
  jsdata(state, v) {
    state.items[state.select].jsdata = v
  },
  setSelect(state, value) {
    state.select = value;
  },
}
export default {
  namespaced: true,
  state,
  mutations
}