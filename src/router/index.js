import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/Home.vue"),
  },
  {
    path: "/allProducts",
    name: "allProducts",
    component: () => import("../components/AllProducts.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../components/Contact.vue"),
  },
  {
    path: "/myProducts",
    name: "myProducts",
    component: () => import("../components/MyProducts.vue"),
  },
  {
    path: "/signIn",
    name: "signIn",
    component: () => import("../components/SignIn.vue"),
  },
  {
    path: "/signUp",
    name: "SignUp",
    component: () => import("../components/SignUp.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
