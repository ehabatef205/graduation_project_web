import axios from "./axios";
const user=JSON.parse(localStorage.getItem('data'))

const createpost=async(text,image,department,course_id)=>{
    await axios.post('/posts/create_post',{
        text:"testpost",
        image:"",
        department:"admin",
        course_id:"admin",
        management_id:user.managment_id,
        management_name: user.name,
        management_image: user.image,
    },
    { headers: { 'Authorization': localStorage.getItem('Authorization') }})
    console.log(
        user.managment_id,
         user.managment_name,
         user.image,
    )
}


export default createpost