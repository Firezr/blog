import Vue from "vue";
import Vuex from "vuex";
// import { stat } from "fs";

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  // strict: true,
  state: {
    list: {},
    categorys: [],
    totalPages:null,
  },
  mutations: {
    getList(state, args) {
      // state.list.push(...args)
      Object.assign(state.list, args)
      // console.log(state.list);
    },
    getCategory(state, args) {
      state.categorys = [...args]
    },
    getPages(state,args){
      state.totalPages = args
    }
  },
  actions: {
    async login({ commit }, args) {
      // try {
        let { username, password } = args
        let res = await (await fetch('http://localhost:3000/login', {
          body: JSON.stringify(args),
          headers: {
            "content-type": "application/json"
          },
          method: "POST",
        })).json()
        if(res.error){
          alert(res.message)
          throw new Error(res.message)
        }else{
          console.log(res);
          // localStorage.setItem('admin', JSON.stringify({
          //   'username': this.username,
          //   'status': "Online"
          // }));
          // this.$router.push({ path: "/list" });
        }
      // } catch (error) {
      //   console.error(error)
      //   return
      // }
    },
    async getCategory({ commit }) {
      try {
        let res = await (await fetch(`http://localhost:3000/getCategory`)).json()
        // console.log(res);
        
        commit('getCategory', res.categorys)
      } catch (error) {
        alert('提交失败')
        console.error(error)
      }
    },
    async getList({ commit }, {category,page}) {
      try {
        let res = await (await fetch(`http://localhost:3000/getList?category=${category}&page=${page}`)).json()

        let list = {}
        list[category] = {}
        list[category][page] = res.obj.value
        // console.log(res);

        commit('getList', list)
        commit('getPages',res.obj.totalPages)

      } catch (error) {
        alert('提交失败')
        console.error(error)
      }
    },
    
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
        console.error(error)
      }
    },
    async deleteBlog({ commit }, args) {
      let { category, id } = args
      try {
        let res = await (await fetch(`http://localhost:3000/deleteBlog?category=${category}&id=${id}`)).json()
        // console.log(res);

      } catch (error) {
        console.error(error)
      }
    },
  },
  getters: {
    getList(state, category) {
      if (state.list === {}) {
        store.dispatch('getList', category)
      }
      return state.list[category]
    }
  }
})

export default store