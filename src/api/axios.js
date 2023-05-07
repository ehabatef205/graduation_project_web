import axios from 'axios';
///  define 
axios.defaults.baseURL = 'http://localhost:5000/api'
axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.token}`}
export default axios;