import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import routes from './routes'

// Vue.use(routes)



Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')