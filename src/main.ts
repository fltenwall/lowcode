import Vue from 'vue'
import App from './App.vue'
import vuedraggable from 'vuedraggable';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.component('draggable', vuedraggable);
import './components';
import store from './store'

Vue.config.productionTip = process.env.NODE_ENV !== 'production';

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
