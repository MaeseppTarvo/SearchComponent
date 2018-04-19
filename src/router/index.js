import Vue from 'vue'
import Router from 'vue-router'
import SpecialityForm from '@/components/SpecialityForm'
import Report from '@/components/Report'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: SpecialityForm
    },
    {
      path: '/app',
      name: 'Form',
      component: SpecialityForm
    },
    {
      path: '/app/report',
      name: 'Report',
      component: Report
    }
  ],
  mode: 'history'
})
