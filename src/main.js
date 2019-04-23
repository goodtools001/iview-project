import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import  Vuex from 'vuex'
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import  axios from '../node_modules/axios/dist/axios.min';
import echarts from '../node_modules/echarts/dist/echarts.min'
import store from './vuex/store'//引入store
import babelPolyfill  from  '../node_modules/babel-polyfill';


Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Vuex);
Vue.use(babelPolyfill);

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:9002/';

Vue.prototype.$ajax = axios;
//Vue.prototype.$http = axios;
Vue.prototype.$echarts = echarts;
Vue.prototype.$store = store;

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});


router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
