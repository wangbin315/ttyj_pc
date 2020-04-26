import Vue from 'vue'
import Router from 'vue-router'
// import Demo from '@/views/Demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Demo',
      component: () => import('@/views/Demo.vue')
    },
    {
      path: '/demo',
      name: 'Demo',
      component: () => import('@/views/Demo.vue')
    },
    {
      path: '*',
      // name: 'Demo',
      component: () => import('@/views/Notdefined.vue')
    }
  ]
})
