<template>
  <div>

    <!-- 表单 https://vuetifyjs.com/zh-Hans/components/forms -->
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="title" :counter="20" :rules="titleRules" label="Title" required></v-text-field>
      <!-- <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field> -->

      <v-select
        v-model="selectCategory"
        :items="categorys"
        :rules="[v => !!v || 'Item is required']"
        label="Category"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree the policy of Jarry's web?"
        required
      ></v-checkbox>

      <mavon-editor v-model="content" />
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="addBlog">add</v-btn>

      <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn> -->
      <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
      <!-- <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn> -->
    </v-form>
    <br />

    <!-- alert https://vuetifyjs.com/en/components/alerts#alerts -->
    <div class="grey lighten-5 pa-4">
      <v-alert
        v-model="show"
        dismissible
        :type="type"
        class="mb-4"
      >{{alertMsg}}</v-alert>
      <div class="text-center">
        <!-- <v-btn v-if="!show" color="primary" height="56" @click="show = true">Toggle</v-btn> -->
      </div>
    </div>

  </div>
</template>

<script>
import { log } from "util";
export default {
  data() {
    return {
      show: false,
      type: "success",
      alertMsg : 'add success',

      valid: true,
      title: "",
      titleRules: [
        v => !!v || "Title is required",
        v => (v && v.length <= 20) || "Title must be less than 10 characters"
      ],
      // email: '',
      // emailRules: [
      //   v => !!v || 'E-mail is required',
      //   v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      // ],
      selectCategory: null,
      categorys: ["JS", "Vue"],
      checkbox: false,

      // defaultData: "preview",
      content: ""
    };
  },
  methods: {
    // validate() {
    //   if (this.$refs.form.validate()) {
    //     this.snackbar = true;
    //   }
    // },
    reset() {
      this.$refs.form.reset();
      this.content = "";
    },
    // resetValidation() {
    //   this.$refs.form.resetValidation();
    // },

    // changeData(value, render) {
    //   console.log(value);
    // },
    async addBlog() {
      //去除左右空格
      if (this.content.replace(/^\s+|\s+$/g, "") === "") {
        this.type = 'error'
        this.show = true
        this.alertMsg = "content can not be none"
        return;
      }
      let blog = {
        title: this.title,
        category: this.selectCategory,
        content: this.content
      };
      await this.$store.dispatch("addBlog", blog); //此处使用异步，不然提交失败也会执行后续代码，加了之后，等提交完再提示！！
      this.show = true

      this.reset();
      this.$router.push({ path: "/list" });
    }
  }
};
</script>