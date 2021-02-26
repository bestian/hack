import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld.vue'),
    },
    {
      path: '/course',
      name: 'Course',
      component: () => import('@/components/Course.vue'),
    },
    {
      path: '/flow',
      name: 'Flow',
      component: () => import('@/components/Flow.vue'),
    },
    {
      path: '/payment',
      name: 'Payment',
      component: () => import('@/components/Payment.vue'),
    },
    {
      path: '/gift',
      name: 'Payment',
      component: () => import('@/components/Gift.vue'),
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: () => import('@/components/Faq.vue'),
    },
    {
      path: '/chat',
      name: 'Chat',
      component: () => import('@/components/Chat.vue'),
    },
    {
      path: '/work',
      name: 'MyWork',
      component: () => import('@/components/MyWork.vue'),
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: () => import('@/components/Quiz.vue'),
    },
    {
      path: '/drawing',
      name: 'Drawing',
      component: () => import('@/components/Drawing.vue'),
    },
  ],
});
