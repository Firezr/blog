import Vue from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

import vuetify from './plugins/vuetify' // path to vuetify export
import 'material-design-icons-iconfont/dist/material-design-icons.css'    //图标库   线上goole不好使

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)


Vue.config.productionTip = false

new Vue({
  vuetify,

  store,
  router,
  render: h => h(App),
}).$mount('#app')
