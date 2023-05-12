import { Link } from "react-router-dom";
import "../component/Courses.css";
import "bootstrap/dist/css/bootstrap.min.css";

import CourseList from "../lists/courselist";

const Courses = () => {
  return (
    <div className="divrootc">
      <div id="root">
        <nav className="navbar navbar-expand-lg navbar-dark   fixed-top">
          <div className="container-fluid">
            <div className="divlogo fs-5">
              <h className="h" style={{ color: "black" }}>
                Faculty Of Science
              </h>
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
                    className="navbar-brand badge rounded-pill btn  fs-5  active"
                    aria-current="page"
                    to="/"
                  >
                    <h className="h" style={{ color: "black" }}>
                      Home
                    </h>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/AdminPage"
                    id="login-link"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h className="h" style={{ color: "black" }}>
                      Admin{" "}
                    </h>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Login"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h className="h" style={{ color: "black" }}>
                      Log Out
                    </h>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="container3">
      <a href="/CreateCourse">
      <img className="Add" src="../images/plus.png" alt=""/>
          
      </a>
        <table class="table table-striped">
          <thead>
            <tr>
             <th scope="col">Image</th>
             <th scope="col">Course ID</th>
              <th scope="col">Course Name</th>
              <th scope="col">Edit</th>
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
