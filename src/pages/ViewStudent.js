import { Link } from "react-router-dom";
import "../component/ViewStudent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bars from "./statics/Bars";

import Studentlist from "../lists/studentlist";
const ViewStudent = () => {
  return (
    <div className="divrootVS">
      <Bars/>

      <div className="container3">
      <a href="/CreateStudent">
      <img className="Add" src="../images/pluss.png" alt="" />
      </a>
      <input
      className="search"
      id="search"
      placeholder="Search"
    />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Student code</th>
              <th scope="col">Student Name</th>
              <th scope="col"> GPA </th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <Studentlist></Studentlist>
        </table>
        <br></br>
      </div>
    </div>
  );
};

export default ViewStudent;
