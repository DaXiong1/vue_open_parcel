// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import Vue from 'vue'
import App from './App.vue'   //要加上后缀
import router from './router/index.js'
import * as Utils from './utils/util'
import * as $ from './utils/base'
import bus from './utils/eventBus'

import '../static/css/common.css'
//import '../static/css/style.css'
//import '../static/css/add-styles.css'
//import '../static/css/hx_style.css'

Vue.use(bus)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
//  template: '<App/>',    //Runtime + Compiler
//  components: { App }
  render: h => h(App)      //Runtime-only
})

var phoneno = ''
phoneno = Utils.getUrlParam('phoneno')
console.log('phoneno=' + phoneno)
if (!!phoneno && true) { // 这么写为了使eslint校验通过
  $.setSStorageInfo('phoneno', phoneno)
}

