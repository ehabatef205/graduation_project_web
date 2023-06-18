import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../api/axios";



const Departmentlist = () => {
  const navigation=useNavigate()
  const [ getDepartments, setDepartments] = React.useState([])
  
useEffect(() => {
  axios.get("department/view_all_departments")
    .then(async (res)=>{
      setDepartments(res.data.respone)
    })
    .catch(error => console.log(error))


}, [])
return(
    <tbody>
        {getDepartments.map((Department,key)=>   (<tr  key={Department.department_id}>
         
              <th scope="row">
                {" "}
                <img
                  className="department"
                  src={Department.image}
                  alt=""
                />
              </th>
              <th>{Department.department_id}</th>
              <td>{Department.department_name}</td>
              <td>

                  <img className="imgedit" src="../images/edit.png" alt=""  onClick={()=>{ 
                    navigation('/UpdateDepartment',{state:{department:Department}})
                  }}/>

              </td>
              <td>
                <a href="/Courses">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>))}
            
 
        </tbody>
        
)
}
export default Departmentlist;