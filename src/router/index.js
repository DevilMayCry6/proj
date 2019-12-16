import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import First from '../components/First.vue'
import Muban from '../components/Muban.vue'
import Jssxhztq from '../components/Jssxhztq.vue'
import ClassAndStyle from '../components/ClassAndStyle.vue'
import Tjxr from '../components/Tjxr.vue'
import Lbxr from '../components/Lbxr.vue'
import Sjbd from '../components/Sjbd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'home',
    component: First
  },
  {
    path:'/muban',
    component:Muban
  },
  {
    path:'/jssxhztq',
    component:Jssxhztq
  },
  {
    path:'/classandstyle',
    component:ClassAndStyle
  },
  {
    path:'/tjxr',
    component:Tjxr
  },
  {
      path:'/lbxr',
      component:Lbxr
  },
  {
      path:'/sjbd',
      component:Sjbd
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
