import React, {  useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../api/axios";

const Studentlist=()=>{

  const [ getStudents, setStudents] = React.useState([])
  
  useEffect(() => {
    axios.get("management/get_students")
      .then(async (res)=>{
        setStudents(res.data.data)
      })
      .catch(error => console.log(error))
  
  }, [])
return(
<tbody>
  {getStudents.map((Student, key) => (<tr className='totalHome' key={Student.student_id}>
              <th scope="row"> {Student.student_id} </th>
              <td>{Student.name}</td>
              <td>2.01</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src={Student.image} alt="" />
                </a>
              </td>
              </tr>))}
              </tbody>
)
}
export default Studentlist