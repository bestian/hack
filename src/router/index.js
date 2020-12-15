import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import Course from '@/components/Course.vue';
import Flow from '@/components/Flow.vue';
import Payment from '@/components/Payment.vue';
import FAQ from '@/components/Faq.vue';
import Chat from '@/components/Chat.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/course',
      name: 'Course',
      component: Course,
    },
    {
      path: '/flow',
      name: 'Flow',
      component: Flow,
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment,
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ,
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
    },
  ],
});
