import axios from 'axios';

import config from '../config';

const axiosInstance = axios.create({
  // baseURL: config.API_BASE_URL
});

// adding common headers
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

// Add a request interceptor
axios.interceptors.request.use((tempConfig) => {
  return tempConfig;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

// generic method to make HTTP request
const fireRequest = async (method, fullUrl, data) => {
  const options = {
    method,
    timeout: config.API_TIMEOUT, // after this the API response will fail
    data: data || {}
  };

  // serving api success or error response
  try {
    const res = axiosInstance(`${fullUrl}&apiKey=${config.API_KEY}`, options);
    const fullResponse = await res;
    return fullResponse.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default {
  get(url) {
    return fireRequest('GET', url);
  },

  post(url, data) {
    return fireRequest('POST', url, data);
  },

  put(url, data) {
    return fireRequest('PUT', url, data);
  },

  delete(url) {
    return fireRequest('DELETE', url);
  },

  axios() {
    return axiosInstance;
  }
};
