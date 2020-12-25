const CUSTOMER_API_URL = process.env.VUE_APP_CUSTOMER_API_URL || 'http://localhost:3000/customers';

export default {
  async getAllCustomers () {
    // should use other library or polyfill as most versions of IE/Edge don't support Fetch
    const resp = await fetch(CUSTOMER_API_URL);
    return (await resp.json()).data;
  },
}
