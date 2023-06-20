import React, {  useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../api/axios";
import { useNavigate } from 'react-router-dom';

const DoctorCourseList=()=>{
  const navigation=useNavigate()
  const [ getGroups, setGroups] = React.useState([])
  
  
  useEffect( () => {
   axios.get("groups/view_all_groups")
      .then( (res)=>{
        let G=[]
        for(var index=0;index<res.data.respone.length;index++){
            if(JSON.parse(localStorage.getItem("data")).management_id === res.data.respone[index].teacher.teacher_id){
                G.push(res.data.respone[index])
            }
        }

        setGroups(G)
        console.log(G)

      })
      .catch(error => console.log(error))
  
  }, [])
return(
<tbody>
  {getGroups.map((Group, key) => (<tr className='totalHome' >
              <th scope="row"> {Group.course_id} </th>
              <td>{Group.group_number}</td>
              <td>{Group.students.length}</td>
              <td>
                  <img className="imgview" src="../images/marking.png" alt="grades"
                  onClick={()=>{ 
                    navigation('/Adddegrees',{state:{group:Group}})
                  }} />
                
              </td>
              </tr>))}
              </tbody>
)
}
export default DoctorCourseList