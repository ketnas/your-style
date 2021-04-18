import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LazyTube from 'vue-lazytube'

Vue.config.productionTip = false

new Vue({
  router,
  LazyTube,
  render: h => h(App)
}).$mount('#app')
