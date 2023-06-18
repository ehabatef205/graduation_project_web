import { Link } from "react-router-dom";
import "../component/AddGradesA.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bars from "./statics/Bars";

const AddGradesA = () => {
  return (
    <div className="divrootAGA">
      <Bars/>

      <div className="containerAGA">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Department ID</th>
              <th scope="col">Department Name</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">
              {" "}
              <img
                className="department"
                src="../images/computer.jpg"
                alt=""
              />
            </th>
            <th>Cs</th>
            <td>Computer science</td>

            <td>
            <a href="/InsideCourses">
                <img className="imgview" src="../images/eye1.png" alt="" />
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">
              {" "}
              <img
                className="department"
                src="../images/chemistry.jpg"
                alt=""
              />
            </th>
            <th>Chem</th>
            <td>Chemistry </td>

            <td>
            <a href="/InsideCourses">
                <img className="imgview" src="../images/eye1.png" alt="" />
              </a>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddGradesA;
