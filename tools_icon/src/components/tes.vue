<template>
    <v-card class="mx-auto" min-width="1100px" max-width="100%">
        <v-card-text class="pt-4" style="width: 100%;height: 1px; display: none;">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nobis a at voluptates culpa optio amet!
            Inventore deserunt voluptatem maxime a veniam placeat, eos impedit nulla quos? Officiis, aperiam ducimus.
        </v-card-text>

        <!-- <v-divider></v-divider> -->


        <v-virtual-scroll :items="items" :item-height="50" height="300">
            <template v-slot="{ item }">
                <v-list-item>
                    <v-list-item-avatar>
                        <v-avatar :color="item.color" size="56" class="white--text">
                                        {{ item.initials }}  
                        </v-avatar>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.fullName }}</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-btn depressed small>
                            <!-- 复制按钮 -->
                            copy
                            <v-icon color="orange darken-4" right>
                                mdi-open-in-new
                            </v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
            </template>
        </v-virtual-scroll>
    </v-card>
</template>

<script>
    export default {
      data: () => ({
        colors: ['#2196F3', '#90CAF9', '#64B5F6', '#42A5F5', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', '#82B1FF', '#448AFF', '#2979FF', '#2962FF'],
        names: ['hhh', 'hhh', 'hhh', 'hhh', 'hhh', 'hhh', 'hhh', 'hhh', 'hhh'],
        surnames: ['sss', 'sss', 'sss', 'sss', 'sss', 'sss'],
      }),
  
      computed: {
        items () {
          const namesLength = this.names.length
          const surnamesLength = this.surnames.length
          const colorsLength = this.colors.length
          console.log(namesLength,surnamesLength,colorsLength);
  
          return Array.from({ length: this.colors.length }, (k, v) => {
              console.log(k,v);
            const name = this.names[this.genRandomIndex(namesLength)]
            const surname = this.surnames[this.genRandomIndex(surnamesLength)]

  
            return {
              color: this.colors[this.genRandomIndex(colorsLength)],
            //   完整名字
              fullName: `${name} ${surname}`,
            // 图标显示名字
              initials: `${name[0]}`,
            }

          })
        },
      },
  
      methods: {
        genRandomIndex (length) {
          return Math.ceil(Math.random() * (length - 1))
        },
      }
    }
  </script>