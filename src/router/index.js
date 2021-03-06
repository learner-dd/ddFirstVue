import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Order from '@/pages/Order.vue'
import Search from '@/pages/Search.vue'
import Profile from '@/pages/Profile.vue'
import Login from '@/pages/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      component: Home,
      meta:{
        showFooter :true
      }
    },
    {
      path:'/order',
      component: Order,
      meta:{
        showFooter :true
      }
    },
    {
      path:'/search',
      component: Search,
      meta:{
        showFooter :true
      }
    },
    {
      path:'/profile',
      component: Profile,
      meta:{
        showFooter :true
      }
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
