import Vue from 'vue'
import VueRouter from 'vue-router'
import Settings from '@/views/Settings.vue'
import Main from '@/views/Main.vue'

Vue.use(VueRouter)

  const routes = [
    {
      name: 'Main',
      path: '/',
      components: {
        default: Main,
      }
    },
    {
      name: 'Settings',
      path: '/settings',
      components: {
        default: Settings,
      },
    }
  ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
