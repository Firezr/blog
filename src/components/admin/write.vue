<template>
  <div>
    <form >
      <p>choose a category:</p>
      <div v-for="(item,i) in categorys" :key="i">
        <input type="checkbox">
        <span>{{item}}</span>
      </div>
      
      <br>
      <input type="text" placeholder="please type your title" v-model="title">  
    </form>
    <mavon-editor v-model="content"/>
    <v-btn @click="addBlog">add</v-btn>
  </div>
</template>

<script>
import { log } from "util";
export default {
  data() {
    return {
      defaultData: "preview",
      categorys:['JS','extra'],
      title: '',
      content: '',
      
    };
  },
  methods: {
    // changeData(value, render) {
    //   console.log(value);
    // },
    async addBlog() {
      let blog = {
        title:this.title,
        category:'JS',
        content:this.content,
      }
      await this.$store.dispatch('addBlog',blog)//此处使用异步，不然提交失败也会执行后续代码，加了之后，等提交完再提示！！
      alert('提交成功')
      this.title = ''
      this.content = ''
      this.$router.push({path:'/list'})
    }
  }
};
</script>