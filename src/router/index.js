import Vue from 'vue'
import VueRouter from 'vue-router'
import Settings from '@/views/Settings.vue'

Vue.use(VueRouter)

  const routes = [
    {
      name: 'Settings',
      path: '/settings',
      components: {
        default: Settings,
        main: Settings,
      },
    }
  ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
