import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'

export default [
  {
      path: '/home',
      component: Home,
      meta: {
          isShow: true,
      }
  },
  {
    name: 'search',  // 是当前路由的标识名称
    path: '/search/:keyword?',
    component: Search,
    // 将params参数和query参数映射成属性传入路由组件
    props: route => ({keyword3: route.params.keyword, keyword4: route.query.keyword2})
  },
  {
    name: 'detail',  // 是当前路由的标识名称
    path: '/detail/:skuid',
    component: Detail,
  },
  {
      path: '/login',
      component: Login,
      meta: {
          isShow: false,
      }
  },
  {
      path: '/register',
      component: Register,
      meta: {
          isShow: false,
      }
  },
  // 重定向
  {
      path: '*',
      redirect: '/home' 
  }
];