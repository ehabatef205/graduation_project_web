import axios from 'axios';
///  define 
axios.defaults.baseURL = 'http://localhost:5000/api'
axios.defaults.headers.common = {'authorization': localStorage.getItem('Authorization')}
export default axios;