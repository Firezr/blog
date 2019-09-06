<template>
  <div v-if="blog">
    <h2>{{blog.title}}</h2>
    <p>{{blog.date}}</p>
    <!-- /**
* :subfield="false"  ----- true： 双栏(编辑预览同屏)， false： 单栏(编辑预览分屏)
* :defaultOpen="defaultData" ----- edit： 默认展示编辑区域 ， preview： 默认展示预览区域 , 其他 = edit
* :toolbarsFlag="false" ----- 工具栏是否显示
*/
    -->
    <mavon-editor
      v-model="blog.content"
      :subfield="false"
      :defaultOpen="defaultData"
      :toolbarsFlag="false"
      :boxShadow="false"
      :editable="false"
      @change="changeData"
    />
    <!-- icons https://vuetifyjs.com/zh-Hans/components/icons -->
    <v-row align="center" justify="center" v-if="status">
      <v-btn color="primary" @click="editBlog()">
        <v-icon depressed left>{{icons.mdiPencil}}</v-icon>Edit
      </v-btn>
      <v-btn class="ma-2" dark @click="deleteBlog()">
        <v-icon left>{{ icons.mdiDelete }}</v-icon>Delete
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import { log } from "util";

import { mdiAccount, mdiPencil, mdiShareVariant, mdiDelete } from "@mdi/js";

export default {
  data() {
    return {
      blog: null,
      defaultData: "preview",

      status: 0,
      icons: {
        mdiAccount,
        mdiPencil,
        mdiShareVariant,
        mdiDelete
      }
    };
  },
  mounted() {
    this.getStatus();
    this.getBlog();
  },
  methods: {
    changeData(value, render) {
      // console.log(render);
    },

    //获取是否登录的状态
    getStatus() {
      let admin = localStorage.admin
      if (admin) {
        admin = JSON.parse(admin)
        switch (admin.status) {
          case "Offline":
            this.status = 0;
            break;
          case "Online":
            this.status = 1;
            break;
          default:
            break;
        }
      }
    },
    getBlog() {
      let {category,page,id} = this.$route.query;
      console.log(this.$route.query);
      
      let blog = this.$store.state.list[category][page].find(item => {
        return item.ID === id;
      });

      this.blog = blog;
    },
    editBlog() {
      this.$router.push({ name: "write", params: this.blog });
    },
    deleteBlog() {
      let query = this.$route.query;
      this.$store.dispatch("deleteBlog", query);
      this.$router.push({ path: "/list" });
    }
  }
};
</script>