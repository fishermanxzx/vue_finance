import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {path:'/',component:()=>import('../views/Layout.vue'),name:'Layout',redirect:'/index',children:[
    {
      path:'/index',
      name:'index',
      component:()=>import('../views/index/Index.vue')
    }
  ]},
  {path:'/login',component:()=> import ('../views/Login.vue'),name:'Login'},
  {path:'*',component:()=>import('../views/404.vue'),name:'404'}
]

const router = new VueRouter({
  routes
})

export default router
