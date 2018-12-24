import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cardlist from '@/components/card'
import Layout from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/card',
          name: 'card',
          component: cardlist
        },
        {
          path: '/hello',
          name: 'HelloWorld',
          component: HelloWorld
        },
      ]
    },
    
    
  ]
})
