import axios from "./axios";
const user=JSON.parse(localStorage.getItem('data'))

const createpost=async(text,image,department,course_id)=>{
    await axios.post('/posts/create_post',{
        text:"testpost",
        image:"",
        department:"admin",
        course_id:"admin",
        management_id:user.managment_id,
        management_name: user.managment_name,
        management_image: user.image,
    },
    { headers: { 'Authorization': localStorage.getItem('Authorization') }})
}


export default createpost