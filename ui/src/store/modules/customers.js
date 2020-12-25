import customersApi from '../../api/customersApi';

const state = () => ({
  data: [],
  isLoading: false,
});

const getters = {
  getCustomerById: (state) => (id) => {
    return state.data.find(customer => customer.id.toString() === id.toString());
  }
}

const actions = {
  getAllCustomers({ state, commit }) {
    if (!state.data.length) {
      commit('setLoading');
      customersApi.getAllCustomers().then(customers => {
        commit('setCustomers', customers);
      });
    }
  },
}

const mutations = {
  setCustomers(state, customers) {
    state.data = customers;
    state.isLoading = false;
  },
  setLoading(state) {
    state.isLoading = true;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
