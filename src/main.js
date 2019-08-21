import Vue from "vue";
import App from "./App.vue";
import router from "./route/index";
import store from "./store/index";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';

import './assets/css/common/format.css';
import './assets/css/common/animate.min.css';
import './assets/css/iconfont/iconfont.css'
Vue.config.productionTip = false;

NProgress.configure({
  easing: 'ease',
  speed: 300
});
router.beforeEach((to, from, next) => {
  document.title=to.matched[0].meta.title;
  NProgress.start();
  next()
});

router.afterEach(to => {
  NProgress.done();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");