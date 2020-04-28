import Vue from 'vue'
import Router from 'vue-router'
// import Demo from '@/views/Demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Application',
      component: () => import('@/views/Application.vue'),
      children: [
        {
          path:'/',
          name: 'Dh1',
          component: () => import('@/views/Dh1.vue'),
        },
        {
          path:'dh1',
          name: 'Dh1',
          component: () => import('@/views/Dh1.vue'),
        },
        {
          path:'dh2',
          name: 'Dh2',
          component: () => import('@/views/Dh2.vue'),
        },
        {
          path:'firstChild',
          name: 'FirstChild',
          component: () => import('@/views/FirstChild.vue'),
        }
      ]
    },
    // {
    //   path: '/application/:id',
    //   name: 'Application',
    //   component: () => import('@/views/Application.vue'),
    //   children: [
    //     {
    //       path:'/',
    //       name: 'Dh1',
    //       component: () => import('@/views/Dh1.vue'),
    //     },
    //     {
    //       path:'dh1',
    //       name: 'Dh1',
    //       component: () => import('@/views/Dh1.vue'),
    //     },
    //     {
    //       path:'dh2',
    //       name: 'Dh2',
    //       component: () => import('@/views/Dh2.vue'),
    //     },
    //     {
    //       path:'firstChild',
    //       name: 'FirstChild',
    //       component: () => import('@/views/FirstChild.vue'),
    //     }
    //   ]
    // },
    {
      path: 'demo',
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
