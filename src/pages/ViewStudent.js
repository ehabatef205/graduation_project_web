import { Link } from "react-router-dom";
import "../component/ViewStudent.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ViewStudent = () => {
  return (
    <div className="divrootVS">
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
                <li className="nav-item2">
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
              <th scope="col">Student code</th>
              <th scope="col">Student Name</th>
              <th scope="col"> GPA </th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"> 1927109 </th>
              <td>Ziad Mohammed Ezzat</td>
              <td>2.01</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">1927109 </th>
              <td>Ziad Mohammed Ezzat</td>
              <td>2.01</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">1927109 </th>
              <td>Ziad Mohammed Ezzat</td>
              <td>2.01</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">1927109 </th>
              <td>Ziad Mohammed Ezzat</td>
              <td>2.01</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> 1927109 </th>
              <td>Ziad Mohammed Ezzat</td>
              <td>2.01</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> 1927109</th>
              <td>Ziad Mohammed Ezzat</td>
              <td>2.01</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> 1927204 </th>
              <td>Rahma Sabry Ahmed</td>
              <td>2.1</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> 1927204</th>
              <td>Rahma Sabry Ahmed</td>
              <td>2.1</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">1927204</th>
              <td>Rahma Sabry Ahmed</td>
              <td>2.1</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> 1927204</th>
              <td>Rahma Sabry Ahmed</td>
              <td>2.1</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> 1927204</th>
              <td>Rahma Sabry Ahmed</td>
              <td>2.1</td>
              <td>
                <a href="/Update">
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

export default ViewStudent;
