<template>
  <div>
    <mavon-editor v-model="value" />
    <!-- /**
* :subfield="false"  ----- true： 双栏(编辑预览同屏)， false： 单栏(编辑预览分屏)
* :defaultOpen="defaultData" ----- edit： 默认展示编辑区域 ， preview： 默认展示预览区域 , 其他 = edit
* :toolbarsFlag="false" ----- 工具栏是否显示
*/
    -->
    <mavon-editor
      v-html="value"
      :subfield="true"
      :defaultOpen="defaultData"
      :toolbarsFlag="false"
      :boxShadow="false"
      @change="changeData"
    />
    <v-btn @click="addBlog">add</v-btn>
  </div>
</template>

<script>
import { log } from "util";
export default {
  data() {
    return {
      //value的值是经过markdown解析后的文本，可使用`@change="changeData"`在控制台打印显示
      value: `<blockquote>
							<p>你好</p>
							</blockquote>
							<p><code>java</code></p>`,
      defaultData: "edit"

      // blog: null,
    };
  },
  methods: {
    changeData(value, render) {
      // this.blog = value
      // console.log(render);
    },
    async addBlog() {
      try {
        let res = await (await fetch("http://localhost:3000/addBlog", {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ blog: this.value })
        })).json()
        console.log(res);
      } catch (error) {
        console.error(error);
      }
      // this.$store.dispatch('addBlog',this.value)
    }
  }
};
</script>