import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    blogs: []
  },
  mutations: {

  },
  actions: {
    async addBlog({ commit }, args) {
      // let res = await (await fetch('http://localhost:3000/addBlog', {
      //   method: 'POST',
      //   mode: 'no-cors',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: args
      // })).json()
      // console.log(res);
      
    }
  },
  getters: {

  }
})

export default store