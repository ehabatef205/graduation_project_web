import { Link } from "react-router-dom";
import "../component/AddGradesD.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DoctorCourseList from "../lists/DoctorCourseList";
import Bars from "./statics/Bars";
const AddGradesD = () => {
  return (
    <div className="divrootAGD">
      <Bars/>

      <div className="containerAGD">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Course ID</th>
              <th scope="col">Course Name</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <DoctorCourseList/>
        </table>
      </div>
    </div>
  );
};

export default AddGradesD;
