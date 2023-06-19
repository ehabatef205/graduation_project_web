import React, { useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../component/Grades.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';


const MyCourseList  = () => {
    const navigation=useNavigate()
    const [getCourses, setCourses] = React.useState([])

    useEffect(() => {

                setCourses( JSON.parse(localStorage.getItem("data")).register)

    }, [])
    
    return (

        <tbody>
            {getCourses.map((Course, key) => (<tr className='totalHome' >
                <th scope="row"> <img className="Add" src={Course.image} alt="" /></th>
                <th >{Course.course_id}</th>
                <td>{Course.group_number}</td>
                <td onClick={()=>{ 
                    navigation('/GradesDetails',{state:{course:Course}})
                  }}>
                    
                        <img className="imgview" src="../images/eye1.png" alt="" />
                        
                </td>
            </tr>))}
        </tbody>


    )
}
export default MyCourseList;