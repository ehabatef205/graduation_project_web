import React from "react";

import { Link,useNavigate } from "react-router-dom";
import "../../component/AdminPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminBar=()=>{

    const navigate = useNavigate();
    const log_out=()=>{
      localStorage.removeItem("Authorization");
      localStorage.removeItem("data");
      navigate('/')
    }
    return(
        <div id="root">
        <nav className="navbar navbar-expand-lg navbar-dark   fixed-top">
          <div className="container-fluid">
            <div className="divlogo fs-5">
              <h1 className="h" style={{ color: "black" }}>
                Faculty Of Science
              </h1>
            </div>
            <button
              className="navbar-toggler collapsed "
              type="button"
              data-toggle="collapse"
              data-target="#navbar-collapse"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" style={{ marginLeft: "15px" }}>
                  <Link
                    className="navbar-brand badge rounded-pill btn  fs-5 "
                    aria-current="page"
                    to="/"
                  >
                    <h1 className="h" style={{ color: "black" }}>
                      Home
                    </h1>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/ViewStudent"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h1 className="h" style={{ color: "black" }}>
                      {" "}
                      View Student
                    </h1>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Courses"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h1 className="h" style={{ color: "black" }}>
                      {" "}
                      Courses
                    </h1>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Departments"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h1 className="h" style={{ color: "black" }}>
                      {" "}
                      Departments
                    </h1>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/CreateManagement"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h1 className="h" style={{ color: "black" }}>
                      {" "}
                      Management
                    </h1>
                  </Link>
                </li>
                <li className="nav-item">
              <Link
                to="/AddGradesA"
                className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
              >
                <h1 className="h" style={{ color: "black" }}>
                  {" "}
                  Add Grades
                </h1>
              </Link>
            </li>
                <li className="nav-item">
                  <button
                    onClick={log_out}
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h1 className="h" style={{ color: "black" }}>
                      {" "}
                      Log Out
                    </h1>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default AdminBar;