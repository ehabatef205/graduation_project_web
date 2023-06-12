import { Link } from "react-router-dom";
import "../component/AddGradesA.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AddGradesA = () => {
  return (
    <div className="divrootAGA">
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
                    className="navbar-brand badge rounded-pill btn  fs-5  "
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
