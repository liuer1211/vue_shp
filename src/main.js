import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from '@/router'
//引入仓库进行注册
import store from "@/store";

//定义全局组件：在入口文件注册一次之后，在任何组件当中都可以使用
import typeNav from "@/components/TypeNav";

//全局组件：第一个参数 组件名字  第二个参数：那个组件
Vue.component(typeNav.name, typeNav);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  //在入口文件这里注册store,在每一个组件的身上都拥有一个$store这个属性
  store,
}).$mount('#app')

// p20
