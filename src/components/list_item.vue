<template>
  <div>
    <!-- /**
* :subfield="false"  ----- true： 双栏(编辑预览同屏)， false： 单栏(编辑预览分屏)
* :defaultOpen="defaultData" ----- edit： 默认展示编辑区域 ， preview： 默认展示预览区域 , 其他 = edit
* :toolbarsFlag="false" ----- 工具栏是否显示
*/
    -->
    <mavon-editor
      v-if="blog"
      v-model="blog.content"
      :subfield="false"
      :defaultOpen="defaultData"
      :toolbarsFlag="false"
      :boxShadow="false"
      :editable = false
      @change="changeData"
    />
  </div>
</template>

<script>
import { log } from "util";
export default {
  data() {
    return {
      //value的值是经过markdown解析后的文本，可使用`@change="changeData"`在控制台打印显示
      blog: null,
      defaultData: "preview"
    };
  },
  mounted(){
    let category = this.$route.query.category
    let id =  this.$route.query.id
    let blog = this.$store.state.list[category].find((item)=>{
      return item.ID === id
    })
    
    this.blog = blog
  },
  methods: {
    changeData(value, render) {
      // console.log(render);
    },
    
  }
};
</script>