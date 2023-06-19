import { Link } from "react-router-dom";
import "../component/Departments.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Departmentlist from "../lists/departmentlist";
import Bars from "./statics/Bars";

const Departments = () => {
  return (
    <div className="divrootd">
      <Bars/>

      <div className="container3">
        <a href="/CreateDepartment">
          <img className="Add" src="../images/pluss.png" alt="" />
        </a>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Department ID</th>
              <th scope="col">Department Name</th>
              <th scope="col">Edit</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <Departmentlist>
            
          </Departmentlist>
        </table>
        <br></br>
      </div>
    </div>
  );
};

export default Departments;
