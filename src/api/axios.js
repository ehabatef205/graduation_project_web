import axios from 'axios';
///  define 
axios.defaults.baseURL = 'https://spring-bud-cricket-veil.cyclic.app/api'
axios.defaults.headers.common = {'authorization': localStorage.getItem('Authorization')}
export default axios;