import { Link } from "react-router-dom";
import "../component/AdminPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ViewCourses = () => {
  return (
    <div className="divrootAdP">
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
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Course code</th>
              <th scope="col">Course Name</th>
              <th scope="col">Doctor</th>
              <th scope="col">Teaching Assistant</th>
              <th scope="col">Hours</th>
              <th scope="col">Groups</th>
              <th scope="col">Edit_Button</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Math494</th>
              <td>Selected Topics in Mathematics</td>
              <td> none</td>
              <td>none</td>
              <td> 3</td>
              <td> 2</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Comp427</th>
              <td>Selected Programming Languages </td>
              <td> none</td>
              <td>none</td>
              <td>3</td>
              <td>1</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Comp407 </th>
              <td> Programming Languages ​​Design</td>
              <td>none</td>
              <td>none</td>
              <td>3</td>
              <td>2</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Comp490 </th>
              <td>Review Article </td>
              <td>none</td>
              <td>none</td>
              <td>3</td>
              <td>2</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Comp408 </th>
              <td>Artificial Intelligence</td>
              <td>none</td>
              <td>none</td>
              <td>3</td>
              <td>3</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Comp402</th>
              <td>Cryptography/Cryptology</td>
              <td>none</td>
              <td>none</td>
              <td> 3</td>
              <td> 2</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> Comp408 </th>
              <td>Artificial Intelligence</td>
              <td>none</td>
              <td>none</td>
              <td> 3</td>
              <td> 2</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> Comp427 </th>
              <td>Selected Programming Languages</td>
              <td>none</td>
              <td>none</td>
              <td> 3</td>
              <td> 1</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Math494 </th>
              <td>Selected Topics in Mathematics</td>
              <td>none</td>
              <td>none</td>
              <td> 3</td>
              <td> 2</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> Comp402 </th>
              <td>Cryptography/Cryptology </td>
              <td>none</td>
              <td>none</td>
              <td>3</td>
              <td> 2</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> Comp407</th>
              <td>Programming Languages ​​Design </td>
              <td>none</td>
              <td>none</td>
              <td> 3</td>
              <td> 2</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt="" />
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

export default ViewCourses;
