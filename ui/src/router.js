import { createWebHistory, createRouter } from 'vue-router';
import AllCustomersView from '@/views/AllCustomersView.vue';
import SingleCustomerView from '@/views/SingleCustomerView.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: AllCustomersView, // default to customer list for now
  },
  {
    path: '/customers',
    name: 'ListCustomer',
    component: AllCustomersView,
  },
  {
    path: '/customers/:id',
    name: 'ViewCustomer',
    component: SingleCustomerView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
