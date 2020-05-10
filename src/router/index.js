import Vue from 'vue'
import VueRouter from 'vue-router'
import Settings from '@/views/Settings.vue'
import App from '@/App.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'App',
    component: App,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
