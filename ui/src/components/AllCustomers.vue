<template>
  <div id="list-customer">
    <h2 class="subtitle">{{ title }}</h2>
    <p v-if="isLoading">{{ loadingMessage }}</p>
    <table v-if="!isLoading" class="table is-fullwidth is-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Acitons</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cust in customers" :key="cust.id">
          <td>{{ cust.id }}</td>
          <td>{{ cust.firstName }} {{ cust.lastName }}</td>
          <td>{{ cust.email }}</td>
          <td>
            <router-link
              :to="{ name: 'ViewCustomer', params: { id: cust.id } }">
              View
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ListCustomer',
  props: {
    customers: {
      type: Array,
    },
    isLoading: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: 'All Customers',
    },
    loadingMessage: {
      type: String,
      default: 'Loading...'
    }
  }
}
</script>
