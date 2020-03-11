import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Course from '@/components/Course'
import Flow from '@/components/Flow'
import Payment from '@/components/Payment'
import FAQ from '@/components/FAQ'
import Chat from '@/components/Chat'
import 'semantic-ui-css/semantic.min.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
    {
      path: '/flow',
      name: 'Flow',
      component: Flow
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
