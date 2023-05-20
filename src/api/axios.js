import axios from 'axios';
///  define 
axios.defaults.baseURL = 'https://confused-bat-stole.cyclic.app/api/'
axios.defaults.headers.common = {'authorization': localStorage.getItem('Authorization')}
export default axios;