import React from "react";
import { Link,useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../component/Student.css";


const StudentBar=()=>{

    const navigate = useNavigate();
    const log_out=()=>{
        localStorage.removeItem("Authorization");
        localStorage.removeItem("data");
        navigate('/')
      }

    return(
        <div id="root">
        <nav className="navbar navbar-expand-lg navbar-dark  fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand  fs-5" to="#">
              <h1 className="h90" style={{ color: "black" }}>
                Faculty Of Science
              </h1>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                    aria-current="page"
                    to="/"
                  >
                    {" "}
                    <h1 className="h90" style={{ color: "black" }}>
                      Home
                    </h1>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/ScheduleView"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h1 className="h90" style={{ color: "black" }}>
                       View Schedule
                    </h1>{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/ScheduleEdit"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h1 className="h90" style={{ color: "black" }}>
                      {" "}
                     Edit Schedule
                    </h1>{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Grades"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h1 className="h90" style={{ color: "black" }}>
                      {" "}
                     Grades
                    </h1>{" "}
                  </Link>
                </li>
                <li className="nav-item">
                <button
                    onClick={log_out}
                    className="navbar-brand badge rounded-pill btn btn-outline-black fs-5"
                    aria-current="page"
                    to="/Login"
                  >
                    <h1 className="h90" style={{ color: "black" }}>
                      Log out
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

export default StudentBar