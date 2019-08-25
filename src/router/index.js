import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

import Index from '../components/index'

import Write from '../components/admin/write'
import List from '../components/admin/list'
import ListItem from '../components/admin/list_item'


const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/list',
      name: 'list',
      component: List,
    },
    {
      path: '/listitem',
      name: 'listitem',
      component: ListItem,
    },
    {
      path: '/admin/write',
      name: 'write',
      component: Write
    },
  ]
})

export default router