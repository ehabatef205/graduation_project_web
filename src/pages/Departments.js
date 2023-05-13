import { Link } from "react-router-dom";
import "../component/Departments.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Departments = () => {
  return (
    <div className="divrootd">
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
              <td>Computer Science</td>
              <td>
                <a href="/CreateDepartment">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
              <td>
                <a href="/Courses">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <img
                  className="department"
                  src="../images/astronomy.jpg"
                  alt=""
                />
              </th>
              <th>As</th>
              <td>Astronomy </td>
              <td>
                <a href="/CreateDepartment">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
              <td>
                <a href="/Courses">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <img
                  className="department"
                  src="../images/biophysics.jpg"
                  alt=""
                />
              </th>
              <th>Bp </th>
              <td> Bio Physics</td>
              <td>
                <a href="/CreateDepartment">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
              <td>
                <a href="/Courses">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <img className="department" src="../images/botany.jpg" alt="" />
              </th>
              <th>Bo </th>
              <td>Botany </td>
              <td>
                <a href="/CreateDepartment">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
              <td>
                <a href="/Courses">
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
              <th>Chem </th>
              <td>Chemistry</td>
              <td>
                <a href="/CreateDepartment">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
              <td>
                <a href="/Courses">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <img
                  className="department"
                  src="../images/entomology.png"
                  alt=""
                />
              </th>
              <th>En</th>
              <td>Entomology</td>
              <td>
                <a href="/CreateDepartment">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
              <td>
                <a href="/Courses">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <img
                  className="department"
                  src="../images/geology.jpg"
                  alt=""
                />
              </th>
              <th> Ge </th>
              <td>Geology</td>
              <td>
                <a href="/CreateDepartment">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
              <td>
                <a href="/Courses">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <img
                  className="department"
                  src="../images/geophysics.jpg"
                  alt=""
                />
              </th>
              <th> Gp </th>
              <td>Geo Physics</td>
              <td>
                <a href="/CreateDepartment">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
              <td>
                <a href="/Courses">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <img
                  className="department"
                  src="../images/mathematics.png"
                  alt=""
                />
              </th>
              <th>Math </th>
              <td> Mathematics</td>
              <td>
                <a href="/CreateDepartment">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
              <td>
                <a href="/Courses">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <img
                  className="department"
                  src="../images/physics.jpg"
                  alt=""
                />
              </th>
              <th> Phys </th>
              <td>Physics </td>
              <td>
                <a href="/CreateDepartment">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
              <td>
                <a href="/Courses">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <img className="department" src="../images/zology.jpg" alt="" />
              </th>
              <th> Zo</th>
              <td>Zology </td>
              <td>
                <a href="/CreateDepartment">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
              <td>
                <a href="/Courses">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <br></br>
      </div>
    </div>
  );
};

export default Departments;
