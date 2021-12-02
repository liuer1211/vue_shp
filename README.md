# 01 准备
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
    