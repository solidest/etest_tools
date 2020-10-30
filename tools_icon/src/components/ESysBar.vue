<template>
  <div style="height:100%;">
    <!-- 功能区 -->
    <div
      style="height:64px; min-width:1100px; width:100%;display:flex; flex-wrap: nowrap; position:sticky;top:32px;z-index:888;">
      <v-card width="100%">
        <v-row no-gutters>
          <v-col cols="4">
            <v-row no-gutters>
              <v-col cols="8" style="height:64px;display:flex;flex-wrap:nowrap;">
                <div
                  style="height:64px;width:95%;display:flex;justify-content:center;align-items:center;margin:0px auto;">
                  <v-text-field :value="this.edit_input" @input="input" clearable flat solo-inverted
                    prepend-inner-icon="mdi-feature-search-outline" hide-details label="搜索">
                  </v-text-field>
                </div>
              </v-col>
              <v-col cols="4" style="height:64px;display:flex;flex-wrap:nowrap;">
                <div class="ml-1" style="height:64px;display:flex;align-items:center;">
                  <v-btn-toggle v-model="sortstate" mandatory>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn v-on="on" small depressed :value="false" @click="sort(false)">
                          <v-icon>mdi-arrow-up</v-icon>
                        </v-btn>
                      </template>
                      <span>正序</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn v-on="on" small depressed :value="true" @click="sort(true)">
                          <v-icon>mdi-arrow-down</v-icon>
                        </v-btn>
                      </template>
                      <span>倒序</span>
                    </v-tooltip>
                  </v-btn-toggle>
                </div>
              </v-col>

            </v-row>
          </v-col>
          <v-col cols="3" style="height:64px">

            <v-row no-gutters>
              <v-col cols="12" style="height:64px;display:flex;flex-wrap:nowrap;">
                <div style="display:flex;align-items:center;margin:0px auto;">


                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on" style="cursor:pointer" :color="icolor" class="mx-1" medium>
                        {{'mdi-' + icon}}
                      </v-icon>
                    </template>
                    <span>{{icon}}</span>
                  </v-tooltip>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on" style="cursor:pointer" :color="icolor" class="mx-1" large>
                        {{'mdi-' + icon}}
                      </v-icon>
                    </template>
                    <span>{{icon}}</span>
                  </v-tooltip>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on" style="cursor:pointer" :color="icolor" class="mx-1" x-large>
                        {{'mdi-' + icon}}
                      </v-icon>
                    </template>
                    <span>{{icon}}</span>
                  </v-tooltip>

                  <v-btn class="mx-1" dark x-small fab @click="editcolor('blue')" color="blue">
                    蓝色
                  </v-btn>
                  <v-btn class="mx-1" dark x-small fab @click="editcolor('red')" color="red">
                    红色
                  </v-btn>
                  <v-btn class="mx-1" dark x-small fab @click="editcolor('orange')" color="orange">
                    橙色
                  </v-btn>
                  <v-btn class="mx-1" x-small fab @click="editcolor(undefined)" color="white">
                    <span style="color:black">白色</span>
                  </v-btn>

                </div>
              </v-col>

            </v-row>

          </v-col>

          <!-- 分頁 -->
          <!-- <v-col cols="5" style="height:64px;display:flex;flex-wrap:nowrap;">
            <div style="display:flex;justify-content:center;align-items:center;margin:0px auto;">
              <v-select class="mt-6" style="width:83px;" v-model="per_count" label="每页条数" dense attach outlined
                :items="['20','50','100','200','500']">
              </v-select>
              <v-pagination :total-visible="5" v-model="page" :length="page_count"></v-pagination>
            </div>
          </v-col> -->


        </v-row>

      </v-card>
    </div>

    <div style="display:flex; min-width:800px; flex-wrap: wrap;">
      <div class="pa-4" v-for="item in icons" :key="item.name" style="width:350px;">
        <span @click="click(item)">
          <v-icon style="cursor:pointer">{{'mdi-' + item.name}}</v-icon>
          <span :class="item.name" :data-clipboard-text='item.name' style="cursor:pointer"> {{item.name}} </span>
        </span>
      </div>
    </div>

    <v-snackbar style="margin-top:100px;" width:200 v-model="snackbar" :color="'green'" :timeout="2000" :top="true">
      复制成功
    </v-snackbar>
    <!-- </v-data-iterator> -->
  </div>
</template>
<style>
  #app_bar {
    -webkit-app-region: drag;
  }
  .nodrag {
    -webkit-app-region: no-drag;
  }
</style>
<script>
  import Icons from '../helps/icons'
  import Clipboard from 'clipboard'
  export default {
    mounted: function () {
      this.page = this.click_page
      var len = Icons.length
      var arr = []
      for (var i = 0; i < len; i++) {
        if (Icons[i].name.indexOf(this.edit_input) >= 0) {
          arr.push(Icons[i])
        }
      }

      this.page_count = Math.floor(arr.length / this.per_count)
      this.icon = this.edit_icon
      this.icolor = this.edit_color
      this.sortstate = this._sort
      this.per_count = this.edit_per

    },
    beforeDestroy: function () {
      this.click_page = this.page
      this.edit_per = this.per_count
    },
    computed: {
      icons1: function () {
        // const newIcons =
        //   this._sort == true ?
        //   JSON.parse(JSON.stringify(Icons)).reverse() :
        //   JSON.parse(JSON.stringify(Icons))
        // var len = newIcons.length
        // var arr = []
        // for (var i = 0; i < len; i++) {
        //   if (newIcons[i].name.indexOf(this.edit_input) >= 0) {
        //     arr.push(newIcons[i])
        //   }
        // }
        // let size = arr.length
  
        // let begin = (this.page - 1) * this.per_count
        // let end = this.page * this.per_count - 1
        // let res = []
        // for (let i = begin; i <= end && i < size; i++) {
        //   res.push(arr[i])
        // }
        // return res
        return []
      },
      edit_icon: {
        get: function () {
          return null //this.$store.state.tool_icons.icon
        },
        set: function (v) {
          return v //this.$store.commit('tool_icons/icon', v)
        },
      },
      edit_color: {
        get: function () {
          return 'red' //this.$store.state.tool_icons.icolor
        },
        set: function (v) {
          return v //this.$store.commit('tool_icons/icolor', v)
        },
      },
      edit_input: {
        get: function () {
          return '' //this.$store.state.tool_icons.input
        },
        set: function (v) {
          return v //this.$store.commit('tool_icons/input', v)
        },
      },
      _sort: {
        get: function () {
          return true //this.$store.state.tool_icons.sort
        },
        set: function (v) {
          return v //this.$store.commit('tool_icons/sort', v)
        },

      },
      click_page: {
        get: function () {
          return 0 //this.$store.state.tool_icons.page
        },
        set: function (v) {
          return v //this.$store.commit('tool_icons/page', v)
        },
      },
      edit_per: {
        get: function () {
          return 10 //this.$store.state.tool_icons.per
        },
        set: function (v) {
          return v //this.$store.commit('tool_icons/per', v)
        },
      }

    },
    data: () => {
      return {
        //分页
        // page: 1,
        // per_count: '50',
        // page_count: 0,
        search: '',
        sortDesc: false,
        icon: '',
        icolor: '',
        copy: '',
        snackbar: false,
        sortBy: 'name',
        sortstate: "",
        icons: Icons
      }
    },
    methods: {
      click: function (data) {

        this.icon = data.name
        this.edit_icon = data.name
        const copy = new Clipboard('.' + data.name)
        const _this = this
        copy.on('success', function (e) {
          e.clearSelection()
          _this.snackbar = true
        })

        copy.on('error', () => {})

      },
      input: function (value) {
        this.page = 1
        this.edit_input = value
      },
      editcolor: function (data) {
        this.icolor = data
        this.edit_color = data
      },
      sort: function (flag) {
        this._sort = flag
      },
    },
  }
</script>