import axios from 'axios'
const api = axios.create({
    baseURL: 'http://157.245.145.162:8080/api/'
  });

  export default api;