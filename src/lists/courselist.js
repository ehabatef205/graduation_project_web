import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../api/axios";

const CourseList = () => {

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
                <th scope="row"> <img className="Add" src={Course.image} alt="" /></th>
                <th >{Course.course_id}</th>
                <td>{Course.name}</td>
                <td>
                    <a href="/CreateCourse">
                        <img className="imgedit" src="../images/edit.png" alt="" />
                    </a>
                </td>
            </tr>))}
        </tbody>


    )
}
export default CourseList