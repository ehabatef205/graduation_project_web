
import "../component/Grades.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCourseList from "../lists/mycourselist";

import Bars from "./statics/Bars";
const Grades = () => {
  return (
    <div className="divrootG">
      <div id="root">
      <Bars/>
        <div className="containerG">
          <h1>Grades</h1>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Course ID</th>
                <th scope="col">Group Number </th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <MyCourseList></MyCourseList>
          </table>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Grades;
