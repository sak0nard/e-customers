<template>
  <div id="list-customer">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/customers">All Customers</router-link></li>
        <li class="is-active">
          <router-link
            :to="{ name: 'ViewCustomer', params: { id: customer.id } }"
            aria-current="page">
            Customer#{{ customer.id }}
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="columns">
      <div class="column is-one-third-desktop is-two-third-tablet">
        <card
          :cardTitle="'Customer#' + customer.id"
          :cardSubTitle="customer.email"
          :cardContent="customer.firstName + ' ' + customer.lastName">
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'SingleCustomer',
  components: {
    Card
  },
  props: {
    customer: {
      type: Object,
      required: true,
    },
  }
}
</script>
