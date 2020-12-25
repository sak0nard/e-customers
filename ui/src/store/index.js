import { createStore, createLogger } from 'vuex';
import customers from './modules/customers';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    customers,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
