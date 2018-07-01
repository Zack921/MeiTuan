# MeiTuan
仿美团WebApp。
### 架构
React + Router + Redux + KOA + Webpack
### 实现
前端：
1.用 React 组件化实现界面。
2.用 Router 配置 App 路由，使用 hashHistory,让 react-router 自己根据 url 去 render 相应的模块，不需要server端支持。
3.用 Redux 存储用户信息，账户与所在地等。
后端：
用 KOA 框架搭建服务端，读取json数据，并暴露给前台。
其他：
引用了 react-swipe 插件，实现轮播图。
### 难点
1.前台如何获取后端数据？
fetch。
2.获取数据时如何解决跨域问题？
使用webpack-dev-server代理处理跨域，将前台向后端的请求都代理到后台端口3000上。
3.实现下拉刷新时，滚屏scroll短时间内频繁触发的事件的性能优化？
利用函数节流。
### 运行
1.加载项目相关依赖。
npm install
2.启动后台
npm run mock
3.启动前台
npm start