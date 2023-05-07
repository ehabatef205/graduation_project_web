import axios from "./axios";


const login = async(id,password)=>{
    return await axios.post("/login",{
        id,
        password
    }) 

}
export default login