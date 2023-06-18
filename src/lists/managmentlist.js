import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../api/axios";



const Managementlist = () => {
    const [ getAdmins, setAdmins] = React.useState([])
    const [ getDoctors, setDoctors] = React.useState([])
  
useEffect(() => {
  axios.get("management/get_admins")
    .then(async (res)=>{
      setAdmins(res.data.data)
    })
    .catch(error => console.log(error))

    axios.get("management/get_doctors")
    .then(async (res)=>{
      setDoctors(res.data.data)
    })
    .catch(error => console.log(error))
    console.log(getAdmins)
}, [])
return(
    <tbody>
        {getAdmins.map((Admin,key)=>   (<tr  key={Admin.department_id}>
         
            <th scope="row" >
              {Admin.management_id}
            </th>
            <td>{Admin.name} </td>          
       
            </tr>))}
            {getDoctors.map((Doctor,key)=>   (<tr>
         
                <th scope="row" >
              {Doctor.management_id}
            </th>
            <td>{Doctor.name} </td>      
       </tr>))}
            
 
        </tbody>
        
)
}
export default Managementlist;