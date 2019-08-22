import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

import Index from '../components/index'

import Write from '../components/admin/write'

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
      }
    ]
  })

  export default router