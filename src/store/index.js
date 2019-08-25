import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  // strict: true,
  state: {
    list: []
  },
  mutations: {
    getList(state,args){
      // state.list.push(...args)
      state.list = args
    }
  },
  actions: {
    async addBlog({ commit }, args) {
      try {
        await (await fetch('http://localhost:3000/addBlog', {
          body: JSON.stringify({ blog: args }), // must match 'Content-Type' header
          headers: {
            "content-type": "application/json"
          },
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          // mode: "cors", // no-cors, cors, *same-origin
          
          // credentials: "include", // include, same-origin, *omit
          // redirect: "follow", // manual, *follow, error
          // referrer: "no-referrer" // *client, no-referrer
        })).json()

      } catch (error) {
        throw error
      }
    },
    async getList({commit},args){
      try {
        let res = await (await fetch(`http://localhost:3000/getList?category=${args}`)).json()
        
        console.log(res);
        commit('getList',res.data)

      } catch (error) {
        alert('提交失败')
        throw error
      }
    }
  },
  getters: {
    getList(state){
      if(state.list == []){
        store.dispatch('getList')
      }
      return state.list
    }
  }
})

export default store