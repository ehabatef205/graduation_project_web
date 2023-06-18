import React, { useEffect, Link} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../api/axios";

const AdminCourseList = () => {

    const [getCourses, setCourses] = React.useState([])

    useEffect(() => {
        axios.get("course/view_all_courses")
            .then(async (res) => {
                setCourses(res.data.respone)
            })
            .catch(error => console.log(error))

    }, [])
    return (


        <tbody>
            {getCourses.map((Course, key) => (<tr className='totalHome' key={Course._id}>
                <th scope="row"> {Course.course_id} </th>
                <th >{Course.course_name}</th>
                <td>{Course.teacher.teacher_id}</td>
                <td>{Course.teacher.time}</td>
                <td>
                    <Link to="/UpdateCourses" state={{ course: Course }}>
                        <img className="imgedit" src="../images/edit.png" alt="" />
                    </Link>
                </td>
            </tr>))}
        </tbody>

        

    )
}
export default AdminCourseList