import axios from "./axios";
const user=JSON.parse(localStorage.getItem('data'))

const getallposts = async(id,password)=>{
    let posts=(await axios.get("posts/view_all_post"))
}
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


export default {getallposts,createpost}