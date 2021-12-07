# 开始
    下载依赖：npm install
    启动服务：npm start
    打包：npm run build

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

# 安装依赖
    npm install --save less less-loader@5
    npm install --save vue-router
    npm install --save axios
    npm install --save nprogress
    npm install --save vuex

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
