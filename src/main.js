import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from '@/router'
//引入仓库进行注册
import store from "@/store";

//定义全局组件：在入口文件注册一次之后，在任何组件当中都可以使用
import typeNav from "@/components/TypeNav";
import Carsousel from "@/components/Carousel";
import Pagination from '@/components/Pagination'
import { Button,MessageBox} from 'element-ui';

//引入MockServer.js----mock数据
import "@/mock/mockServe";
//引入swiper样式
import "swiper/css/swiper.css";

//统一接口api文件夹里面全部请求函数
//统一引入
import * as API from '@/api';

//全局组件：第一个参数 组件名字  第二个参数：那个组件
Vue.component(typeNav.name, typeNav);
Vue.component(Carsousel.name, Carsousel);
Vue.component(Pagination.name,Pagination);
//注册全局组件
Vue.component(Button.name,Button);
//ElementUI注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  //在入口文件这里注册store,在每一个组件的身上都拥有一个$store这个属性
  store,
}).$mount('#app')

// 102
