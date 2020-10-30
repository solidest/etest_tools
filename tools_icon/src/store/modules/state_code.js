let default_yaml = '- state: 开始 初始化\n  when: $entry\n  then: task1\n- state: 初始化 执行\n  when: event1\n  then: timer1@2000 task2 timer1@\n- state: 执行 结束\n  when: timeout.timer1\n  then: task3';
let default_lua = '-- 代码输出\n';

const state = () => ({
items: [
    { lua: default_lua, yaml:default_yaml},
    { lua: default_lua, yaml:default_yaml},
    { lua: default_lua, yaml:default_yaml},
    { lua: default_lua, yaml:default_yaml},
    { lua: default_lua, yaml:default_yaml},
],
select:0

})

const mutations = {
setYaml(state, info) {
    state.items[info.index].yaml = info.value;
},
setLua(state, info) {
    state.items[info.index].lua = info.value;
},
setItem(state, info) {
    state.items[info.index] = info.value;
},
setSelect(state, value) {
    state.select = value;
}
}

export default {
namespaced: true,
state,
mutations
}