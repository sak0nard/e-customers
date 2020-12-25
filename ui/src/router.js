import { createWebHistory, createRouter } from 'vue-router';
import AllCustomersView from '@/views/AllCustomersView.vue';
// import ViewCustomer from '@/components/ViewCustomer.vue';


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
    component: AllCustomersView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
