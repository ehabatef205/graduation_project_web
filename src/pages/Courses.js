import { Link } from "react-router-dom";
import "../component/Courses.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
          <tbody>
            <tr>
            <th scope="row"> <img className="Add" src="../images/9780030846939.OL.0.m.jpg" alt=""  /></th>
             <th >Math494</th>
              <td>Selected Topics in Mathematics</td>
              <td>
                <a href="/CreateCourse">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
            <th scope="row"> <img className="Add" src="../images/download.jpeg" alt=""  /></th>
              <th >Comp427</th>
              <td>Selected Programming Languages </td>
              <td>
                <a href="/CreateCourse">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
            <th scope="row"> <img className="Add" src="../images/images.jpeg" alt=""  /></th>
              <th >Comp407 </th>
              <td> Programming Languages ​​Design</td>
              <td>
              <a href="/CreateCourse">
                <img className="imgedit" src="../images/edit.png" alt="" />
              </a>
            </td>
            </tr>
            <tr>
             <th scope="row"> <img className="Add" src="../images/download.png" alt=""  /></th>
              <th >Comp490 </th>
              <td>Review Article </td>
              <td>
              <a href="/CreateCourse">
                <img className="imgedit" src="../images/edit.png" alt="" />
              </a>
            </td>
            </tr>
            <tr>
            <th scope="row"> <img className="Add" src="../images/download (1).jpeg" alt=""  /></th>
              <th >Comp408 </th>
              <td>Artificial Intelligence</td>
              <td>
              <a href="/CreateCourse">
                <img className="imgedit" src="../images/edit.png" alt="" />
              </a>
            </td>
            </tr>
            <tr>
            <th scope="row"> <img className="Add" src="../images/1000_F_89973923_0lfduzsXEqiKKGN71ruGQ4kdf0dgnQid.jpg" alt=""  /></th>
              <th >Comp402</th>
              <td>Cryptography/Cryptology</td>
              <td>
              <a href="/CreateCourse">
                <img className="imgedit" src="../images/edit.png" alt="" />
              </a>
            </td>
            </tr>
            <tr>
            <th scope="row"> <img className="Add" src="../images/download (2).jpeg" alt=""  /></th>
              <th >R212 </th>
              <td>Linear Algebra and Geometry</td>
              <td>
              <a href="/CreateCourse">
                <img className="imgedit" src="../images/edit.png" alt="" />
              </a>
            </td>
            </tr>
            <tr>
             <th scope="row"> <img className="Add" src="../images/download (1).jpeg" alt=""  /></th>
              <th > Comp408 </th>
              <td>Artificial Intelligence</td>
              <td>
              <a href="/CreateCourse">
                <img className="imgedit" src="../images/edit.png" alt="" />
              </a>
            </td>
            </tr>
            <tr>
            <th scope="row"> <img className="Add" src="../images/download.jpeg" alt=""  /></th>
              <th > Comp427 </th>
              <td>Selected Programming Languages</td>
              <td>
              <a href="/CreateCourse">
                <img className="imgedit" src="../images/edit.png" alt="" />
              </a>
            </td>
            </tr>
           
            <tr>
            <th scope="row"> <img className="Add" src="../images/1000_F_89973923_0lfduzsXEqiKKGN71ruGQ4kdf0dgnQid.jpg" alt=""  /></th>
              <th> Comp402 </th>
              <td>Cryptography/Cryptology </td>
              <td>
              <a href="/CreateCourse">
                <img className="imgedit" src="../images/edit.png" alt="" />
              </a>
            </td>
            </tr>
            <tr>
            <th scope="row"> <img className="Add" src="../images/images.jpeg" alt=""  /></th>
              <th > Comp407</th>
              <td>Programming Languages ​​Design </td>
              <td>
              <a href="/CreateCourse">
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

export default Courses;
