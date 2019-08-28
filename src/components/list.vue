<template>
  <div>
    <v-card>
      <!-- 列表 https://vuetifyjs.com/zh-Hans/components/expansion-panels -->
      <v-row justify="center" absolute permanent right>
        <v-expansion-panels popout focusable>
          <v-expansion-panel v-for="(item) in blogList" :key="item.ID">
            <v-expansion-panel-header>
              <router-link
                :to="{ path: 'listitem', query: { category:item.category,id: item.ID}}"
              >{{item.title}}</router-link>
            </v-expansion-panel-header>
            <v-expansion-panel-content>{{item.content}}</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>

      <!-- 分类 https://vuetifyjs.com/zh-Hans/components/navigation-drawers -->
      <v-navigation-drawer absolute permanent right>
        <template v-slot:prepend>
          <v-list-item two-line>
            <v-list-item-avatar>
              <img
                src="https://vignette.wikia.nocookie.net/onepiece/images/8/86/2%E5%B9%B4%E5%BE%8C%E9%A6%99%E5%90%89%E5%A3%AB.png/revision/latest?cb=20170124041358&path-prefix=zh"
              />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Offline</v-list-item-title>
              <v-list-item-subtitle>Last updated：</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item v-for="item in items" :key="item" @click="toggleCategory(item)">
            <!-- <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>-->

            <v-list-item-content>
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>

    <!-- 列表 https://vuetifyjs.com/zh-Hans/components/expansion-panels -->
    <!-- <v-row justify="center">
      <v-expansion-panels popout focusable v-if="getList">
        <v-expansion-panel v-for="(item) in getList" :key="item.ID">
          <v-expansion-panel-header>
            <router-link :to="{ path: 'listitem', query: { id: item.ID}}">{{item.title}}</router-link>
          </v-expansion-panel-header>
          <v-expansion-panel-content>{{item.content}}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>-->

    <!-- 分页 https://vuetifyjs.com/zh-Hans/components/paginations -->
    <div class="text-center">
      <v-pagination v-model="page" :length="15" :total-visible="6"></v-pagination>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      // items: [
      //   { category: "JS", icon: "dashboard" },
      //   { category: "Vue", icon: "question_answer" }
      // ],
      page: 1,

      blogs: {}, //所有内容
      blogList: [] //某一分类下的内容
    };
  },
  mounted() {
    this.$store.dispatch("getCategory");
  },
  methods: {
    changeData(value, render) {
      // console.log(render);
    },
    //切换文章分类
    async toggleCategory(item) {
      let category = item;
      if (this.blogs[category] !== this.blogList) {
        await this.$store.dispatch("getList", category);

        this.blogs = this.$store.state.list;
        this.blogList = this.blogs[category];
      }
    }
  },
  computed: {
    items() {
      let categorys = this.$store.state.categorys;
      if (categorys.length !== 0) {
        setTimeout(()=>{
          this.toggleCategory(categorys[0]);
        },0)
      }
      return categorys;
    }
  }
};
</script>