<template>
  <div v-if="customer(id)">
    <single-customer :customer="customer(id)"></single-customer>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import SingleCustomer from '@/components/SingleCustomer.vue';

export default {
  name: 'SingleCustomersView',
  components: {
    SingleCustomer,
  },
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  computed: mapGetters({
    customer: 'customers/getCustomerById',
  }),
  created() {
    this.$store.dispatch('customers/getAllCustomers');
  }
}
</script>
