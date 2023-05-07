import axios from "./axios";


const getid = async(NAT_id,HS_score)=>{
    return await axios.post("students/get_student_by_national_and_high",{
        NAT_id,
        HS_score
    }) 

}
export default getid