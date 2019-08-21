import Vue from "vue";
import Router from "vue-router";
import Index from "../views/Index.vue";
Vue.use(Router);
const route = {
   mode: "history",
   base: process.env.BASE_URL,
   routes: [
      {
         path:'',
         meta: {
            title: "首页"
         },
         component:Index
         
      },
      {
         path: "/index",
         name: "index",
         meta: {
            title: "首页"
         },
         component: Index
      },
      {
         path: "/classify",
         name: "classify",
         meta: {
            title: "分类"
         },
         component: ()=> import('../views/classify/index.vue')
      },
      {
         path: "/cart",
         name: "cart",
         meta: {
            title: "购物车"
         },
         component: ()=> import('../views/cart/index.vue')
      },
      {
         path: "/user",
         name: "user",
         meta: {
            title: "用户"
         },
         component: ()=> import('../views/user/index.vue')
      },
   ]
};
export default new Router(route);