# 开始
    下载依赖：npm install
    启动服务：npm start
    打包：npm run build

# 访问
    在github中设置访问地址，然后即可访问。由于本项目不是纯静态项目，需要服务端支持，只能看到大概样子
   [点我访问](https://liuer1211.github.io/vue_shp/dist/#/)

# 准备
    自动打开浏览器
        "serve": "vue-cli-service serve --open",

    关闭eslint
        lintOnSave: false

    src文件简写，配置@
        {
            "compilerOptions": {
                "baseUrl": "./",
                "paths": {
                    "@/*": [
                        "src/*"
                    ]
                }
            },
            "exclude": [
                "node_modules",
                "dist"
            ]
        }

    打包配置公共文件路径
        module.exports = {
            publicPath: './',
        }

# 安装依赖
    npm install --save less less-loader@5
    npm install --save vue-router
    npm install --save axios
    npm install --save nprogress
    npm install --save vuex
    npm install mockjs
    npm install --save swiper@5

 # 路由
    $route:一般获取路由信息【路径、query/params】
    $router:一般进行编程式导航进行路有跳转【push|replace】

    路由跳转
        声明式：router-link
        编程式：push|replace
        声明式能做的编程式也能做，编程式还能做一些业务逻辑

    NavigationDuplicated报错（编程式报错，声明式没有）
    1. 路由push返回promise，加回调函数，捕获异常可解决
    2. 重写VueRouter.prototype原型对象身上的push|replace方法

 # 组件   
    Header
    Footer
    -----------
    Home
    Login
    Register
    Search

# 注册全局组件
    1. 三级联动
    2. Home组件拆分-六块
    3. 雪碧图

# postman接口测试
    http://39.98.123.211/api/product/getBaseCategoryList  | get | 无参数

# axios 二次封装
    1. axios配置 - 基础路径、超时、请求前后拦截
    2. 统一api接口
    3. 跨域
        --  jsonp/cros/代理
        --  配置代理跨域
            devServer: {
                proxy: {
                    "/api": {
                        target: "http://39.98.123.211",
                    },
                },
            },

# 进度条

# vuex 状态管理库
    state
    actions
    mutations
    getters
    modules

# 三级联动数据获取
    1. Api接口准备
    2. vuex - actions 调接口，获取数据；mutations更改数据；state存储数据
    3. 页面获取数据
    4. for循环，key使用数据中的id -- 优化渲染页面
    5. js中鼠标进入移除控制级联显隐
    6. 节流 按照规定时间依次执行-频繁操作变为少量操作
    7. 防抖 规定时间里只执行一次
    8. 三级联动路由跳转：点击一级、二级、三级分类，跳转search模块，传递参数
        差：声明式 卡顿 - rout-link 生成组件繁多
        优：编程式 + 事件委派
    9. 引入lodash 解决卡顿-节流

# 搜索模块开发 - 三级电动跳search页面；点击搜索跳search页面
    1. 三级联动加入，控制显隐，动画过渡（组件有v-if或v-show才可以进行过渡动画），接口性能优化【放到app.js里】
    2. 合并参数 - 点击搜索 带query和params 参数 - 点击三级联动也是；

# home模块开发
    1. mock模拟数据 - 自己给自己服务发请求 - 图片放在public文件夹下
        - 数据准备
        - main引入
        - 接口准备
    2.轮播图swiper
        - 引入包、样式
        - 页面结构
        - 实例化
        - watch + nextTick 完善代码

# search模块开发
    拆分页面组件
    准备接口
    vuex状态管理数据
    参数拼接-调接口：浏览器上的，搜索框内的
        -进入页面调接口
        -路有变化调接口
    面包屑：显示分类名字,调接口;删除，调接口
        -显示三级联动的面包屑关键字；删除面包屑关键字和路由query
        -显示搜索面包屑关键字；删除面包屑关键字和路由params、文本框（兄弟组件关键字清除，全局事件总线$bus,$emit,$on）
        -显示品牌面包屑关键字；删除面包屑关键字(父子组件传值，点击事件，$emit)
        -收集平台属性面包屑关键字；删除面包屑关键字 - 这里是个数组，产生多个面包屑 - 注意去重
    排序：综合 价格
        -箭头-阿里图标库
        -选中谁
        -升序降序
    分页：单独组件
        - 当前第几页  每页展示几条数据  一共多少数据  【====》一共几页】 连续的页码数 5|7
        - 连续的页码数 - 连续页码5，但总页数一定是大于5的；第一页不能小于1；最后一页不能大于总页数
        - 选中高亮
        - v-for 不仅可以遍历数组，也可以遍历  Array | Object | number | string | Iterable (2.6 新增)

# detail商品详情模块
    - 路由跳转，带产品id
    - 滚动行为
        scrollBehavior(to, from, savedPosition) {
            //返回的这个y=0，代表的滚动条在最上方
            return { y: 0 };
        },
    - 获取数据
      面包屑
      放大镜：
        下面轮播图-兄弟组件传值；
        上面大图-获取熊度组传值；
        放大镜 - 鼠标进入事件，改变定位，显示放大镜蒙版；控制蒙版只出现在大图框内，改变定位
                -显示右侧图片-大图的2倍，改变定位-蒙版的2倍，反向
      商品信息描述：售卖属性 按钮高亮切换
        - 产品个数：约束-正整数
        - 添加购物车
            - vuex 状态管理；先调接口，传递数据，判断状态（是否加入成功），再跳转路由
            - 购物车添加成功信息页面，接受传参，本地缓存|会话存储 - 存字符串，获取转json
            - 查看详情，返回上一页或路由跳转
            - 进入购物车，查看所有购买信息列表

# shopcart购物车模块
    - 引入静态页面
    - 发请求，获取购物信息 - vue三连环，组件获取数据展示
      - 游客通过UUID获取信息
    - uuid生成临时身份，本地存储； 在请求头中加入UUID（请求拦截拼接）