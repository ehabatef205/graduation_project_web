import DoctorBar from "./doctorBar";
import StudentBar from './StudentBar'
import AdminBar from './AdminBar'
import { useState,useEffect } from "react";

const Bars=()=>{
    const [ user_Type, setType] = useState("")
    useEffect(async() => {

        await setType( JSON.parse(localStorage.getItem("data")).user_type)

}, [])

    if (user_Type==='student'){
        return <StudentBar/>
    }
    else if (user_Type==='admin'){
        return <AdminBar/>
    }
    else if (user_Type==='doctor'){
        return <DoctorBar/>
    }
    else{
        console.log(user_Type)
        return(<div></div>)
    }

}
export default Bars


