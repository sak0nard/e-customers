<template>
  <all-customers
    :customers="customers"
    :isLoading="isLoading">
  </all-customers>
</template>
<script>
import AllCustomers from '../components/AllCustomers.vue';
import { mapState } from 'vuex';

export default {
  name: 'AllCustomersView',
  components: {
    AllCustomers,
  },
  computed: mapState({
    isLoading: state => state.customers.isLoading,
    customers: state => state.customers.data,
  }),
  created() {
    this.$store.dispatch('customers/getAllCustomers');
  }
}
</script>
