import { Link } from "react-router-dom";
import "../component/Courses.css";
import "bootstrap/dist/css/bootstrap.min.css";

import CourseList from "../lists/courselist";
import Bars from "./statics/Bars";

const Courses = () => {
  return (
    <div className="divrootc">
      <Bars/>
      <div className="container3">
        <a href="/CreateCourse">
          <img className="Add" src="../images/pluss.png" alt="" />
        </a>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Course ID</th>
              <th scope="col">Course Name</th>
              <th scope="col">Edit</th>
              <th scope="col">Group</th>
            </tr>
          </thead>
          <CourseList></CourseList>
        </table>
        <br></br>
      </div>
    </div>
  );
};

export default Courses;
