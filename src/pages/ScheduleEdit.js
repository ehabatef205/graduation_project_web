import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import "../component/ScheduleEdit.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bars from "./statics/Bars";

import axios from "../api/axios";

const ScheduleEdit = () => {
  const [getCourses, setCourses] = useState([])
  const [selectonindex,setSelectionIndex]=useState(0)
  const [Groups, setGroups] = useState([])
  const [courseName, setCourseName] = useState('');
  const [groupNumber, setGroupNumber] = useState('');
  const [courseData, setCourseData] = useState(JSON.parse(localStorage.getItem("data")).register);

  useEffect(() => {
      axios.get("course/view_all_courses")
          .then(async (res) => {
              setCourses(res.data.respone)
          })
          .catch(error => console.log(error))

  }, [])

  const courseselected=(e)=>{
    setGroupNumber(e.target.value)
    axios.post("groups/view_group_by_id",{course_id:getCourses[e.target.value].course_id})
    .then(async (res) => {
        setGroups(res.data.respone)
    })
    .catch(error => console.log(error))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (courseName!=='' && groupNumber!=='') {
     
    axios
      .post(
        '/registration/',
        { course_id: getCourses[selectonindex].course_id,group_number:groupNumber },
        { headers: { authorization: localStorage.token } }
      )
      .then((res) => {
        console.log('done');
      })
      .catch((error) => console.log(error));}
  };
  const handleDelete = (index) => {
    axios.delete('/registration/unregister',
    {course_id:courseData[index].course_id,group_number:courseData.group_number},
    { headers: { authorization: localStorage.token } }).then(res=>{
    const updatedData = [...courseData];
    updatedData.splice(index, 1);
    setCourseData(updatedData);
    })
    
  };
  return (
    <div className="divrootEd">
      <Bars/>
      <div className="container11">
      <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <form className="design" onSubmit={handleSubmit}>
          <label htmlFor="courseName">Select Course Name:</label>
          <select
            className="ll"
            id="courseName"
            onChange={(e) => setSelectionIndex(e.target.value)}
          >
           {getCourses.map((course,key)=>(
            <option value={key}>{course.course_id}  : {course.course_name}
          </option>
           ))}

          </select>

          <label htmlFor="groupNumber">Select Group Number:</label>
          <select
            className="ll"
            id="groupNumber"
            onChange={(e) => courseselected(e)}
          >
            <option value="">Groups Number</option>
            {Groups.map((group,key)=>(
            <option value={key}>{group.group_number} 
          </option>
           ))}
          </select>

          <button type="submit">register</button>
        </form>
        </div>
        <div style={{ flex: 1,marginTop:"10px" }}>

        <p>{getCourses[selectonindex]?getCourses[selectonindex].course_id:"hi"}</p>
        <p>{getCourses[selectonindex]?getCourses[selectonindex].course_name:"hi"}</p>
        <p>{getCourses[selectonindex]?getCourses[selectonindex].course_description:"hi"}</p>
        </div>

        </div>
        {courseData.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Course ID</th>
                <th scope="col">Group Number</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {courseData.map((course, key) => (
                <tr key={key}>
                  <td>{course.course_id}</td>
                  <td>{course.group_number}</td>
                 <td> <button onClick={() => handleDelete(key)} className="del">  
                  <img className="delete" src="../images/401036.png" alt="remove" />
                  </button></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ScheduleEdit;
