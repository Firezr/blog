import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

import Index from '../components/index'

import Write from '../components/admin/write'
import List from '../components/admin/list'

const router = new VueRouter({
    routes: [
      {
        path: '/',
        name: 'index',
        component: Index
      },
      {
        path: '/admin/write',
        name: 'write',
        component: Write
      },
      {
        path: '/admin/list',
        name: 'list',
        component: List
      },
    ]
  })

  export default router