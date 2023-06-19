import Bars from "./statics/Bars";

import "../component/DoctorCourses.css";
import "bootstrap/dist/css/bootstrap.min.css";

const DoctorCourses = () => {
  return (
    <div className="divrootdoc">
      <div id="root">
        <Bars/>
        <div className="containerdoc">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Course ID</th>
                <th scope="col">Course Name</th>
                <th scope="col">View</th>
                <th scope="col">Students</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  {" "}
                  <img
                    className="course"
                    src="../images/download (1).jpeg"
                    alt=""
                  />
                </th>
                <th>Comp408</th>
                <td>Artificial Intelligence</td>

                <td>
                <a href="/DoctorPosts">
                    <img className="imgview" src="../images/eye1.png" alt="" />
                  </a>
                </td>
                <td>
                  <a href="/DoctorStudents">
                    <img className="imgview" src="../images/eye1.png" alt="" />
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <img
                    className="course"
                    src="../images/1000_F_89973923_0lfduzsXEqiKKGN71ruGQ4kdf0dgnQid.jpg"
                    alt=""
                  />
                </th>
                <th>Comp402</th>
                <td>Cryptology </td>

                <td>
                <a href="/DoctorPosts">
                    <img className="imgview" src="../images/eye1.png" alt="" />
                  </a>
                </td>
                <td>
                  <a href="/DoctorStudents">
                    <img className="imgview" src="../images/eye1.png" alt="" />
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <img
                    className="course"
                    src="../images/9780030846939.OL.0.m.jpg"
                    alt=""
                  />
                </th>
                <th>Math494 </th>
                <td>Selected Topics in Mathematics (2)</td>

                <td>
                <a href="/DoctorPosts">
                    <img className="imgview" src="../images/eye1.png" alt="" />
                  </a>
                </td>
                <td>
                  <a href="/DoctorStudents">
                    <img className="imgview" src="../images/eye1.png" alt="" />
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <img
                    className="course"
                    src="../images/download.jpeg"
                    alt=""
                  />
                </th>
                <th>Comp427</th>
                <td>Selected Programming Languages </td>

                <td>
                <a href="/DoctorPosts">
                    <img className="imgview" src="../images/eye1.png" alt="" />
                  </a>
                </td>
                <td>
                  <a href="/DoctorStudents">
                    <img className="imgview" src="../images/eye1.png" alt="" />
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <img
                    className="course"
                    src="../images/download (2).jpeg"
                    alt=""
                  />
                </th>
                <th>Math212</th>
                <td>Linear Algebra and Geometry (2)</td>
                <td>
                  <a href="/DoctorPosts">
                    <img className="imgview" src="../images/eye1.png" alt="" />
                  </a>
                </td>
                <td>
                  <a href="/DoctorStudents">
                    <img className="imgview" src="../images/eye1.png" alt="" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default DoctorCourses;
