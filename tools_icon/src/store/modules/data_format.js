
let default_js = 'function demo(){\n \
        return {\n \
            json: "json格式数据",\n \
            yaml: "yaml格式数据",\n \
            value: 100,\n \
            items:[1,2,3,4,5,6]\n \
        }\n \
    }\n \
    demo()';

let default_yaml = 'json: json格式数据\n \
    yaml: yaml格式数据\n \
    value: 100\n \
    items:\n \
      - 1\n \
      - 2\n \
      - 3\n \
      - 4\n \
      - 5\n \
      - 6\n \
      ';
let default_json = '{\n \
        "json": "json格式数据",\n \
        "yaml": "yaml格式数据",\n \
        "value": 100,\n \
        "items": [\n \
            1,\n \
            2,\n \
            3,\n \
            4,\n \
            5\n \
        ]\n \
    }';

const state = () => ({
    items: [
        {js: default_js, json: default_json, yaml:default_yaml},
        {js: default_js, json: default_json, yaml:default_yaml},
        {js: default_js, json: default_json, yaml:default_yaml},
        {js: default_js, json: default_json, yaml:default_yaml},
        {js: default_js, json: default_json, yaml:default_yaml},
    ],
    select:0

})

const mutations = {
    setYaml(state, info) {
        state.items[info.index].yaml = info.value;
    },
    setJson(state, info) {
        state.items[info.index].json = info.value;
    },
    setJs(state, info) {
        state.items[info.index].js = info.value;
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