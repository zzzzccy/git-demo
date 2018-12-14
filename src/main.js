// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import AnalysisPage from './pages/detail/analysis'
import CountPage from './pages/detail/count'
import ForecastPage from './pages/detail/forecast'
import PublishPage from './pages/detail/publish'
import axios from 'axios'

Vue.prototype.$http = axios;

Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
	mode: 'history',
	routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/count',
      children: [
        {
          path: 'analysis',
          component: AnalysisPage
        },
        {
          path: 'count',
          component: CountPage
        },
        {
          path: 'forecast',
          component: ForecastPage
        },
        {
          path: 'publish',
          component: PublishPage
        }
      ]
    }
	]
})

//路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/') { // 当路由为login时就直接下一步操作
      next();
  } else { // 否则就需要判断
      if(sessionStorage.username){  // 如果有用户名就进行下一步操作
        next()
      }else{
        alert("请先进行登录!");
        next({path: '/'})  // 没有用户名就跳转到login页面
      }
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
