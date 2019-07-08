import Vue from 'vue';
import VueRouter from 'vue-router';
import EmployeesList from '@pages/EmployeesList/EmployeesList';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: 'list'
    },
    {
      path: '/list',
      name: 'employeesList',
      component: EmployeesList
    }
  ]
});

export default router;
