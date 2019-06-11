import Vue from 'vue'
import Router from 'vue-router'
import show from '../components/qw/show.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'show',
      component: show
    }
  ]
})
