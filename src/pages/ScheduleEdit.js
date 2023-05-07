import { Link } from "react-router-dom";
import { useState } from "react";
import "../component/ScheduleEdit.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ScheduleEdit = () => {
  const [courseName, selectedCourse] = useState("");
  const [courseType, selectedType] = useState("");
  const [groupNumber, selectedGroup] = useState("");
  const [courseData, setCourseData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (courseName && courseType && groupNumber) {
      const newData = {
        courseName,
        courseType,
        groupNumber,
      };
      setCourseData([...courseData, newData]);
    }
  };
  return (
    <div className="divrootEd">
      <div id="root">
        <nav className="navbar navbar-expand-lg navbar-dark  fixed-top">
          <div className="container-fluid">
            <div className="divlogo fs-5">
              <h className="h" style={{ color: "black" }}>
                Faculty Of Science
              </h>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
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
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="container11">
        <form className="design" onSubmit={handleSubmit}>
          <label htmlFor="courseName">Select Course Name:</label>
          <select
            className="ll"
            id="courseName"
            onChange={(e) => selectedCourse(e.target.value)}
          >
            <option value="">Courses</option>
            <option>
              R 494: Selected Topics in Mathematics (2) / Math494 : Selected
              Topics in Mathematics (2)
            </option>
            <option>
              Q 427: Selected Programming Languages ​​/ Comp427: Selected
              Programming Languages
            </option>
            <option>
              Q 407: Designing Programming Languages ​​/ Comp407: Programming
              Languages ​​Design
            </option>
            <option>
              Q490: Research and Article / Comp490: Review Article
            </option>
            <option>
              Q408: Artificial Intelligence / Comp408: Artificial Intelligence
            </option>
            <option>Q402: Cryptography / Comp402: Cryptology</option>
            <option>
              R212: Linear Algebra and Geometry (2) / Math212: Linear Algebra
              and Geometry (2)
            </option>
          </select>

          <label htmlFor="courseType">Select Course Type:</label>
          <select
            className="ll"
            id="courseType"
            onChange={(e) => selectedType(e.target.value)}
          >
            <option value="">Courses Type</option>
            <option>n</option>
            <option>p</option>
            <option>t</option>
          </select>

          <label htmlFor="groupNumber">Select Group Number:</label>
          <select
            className="ll"
            id="groupNumber"
            onChange={(e) => selectedGroup(e.target.value)}
          >
            <option value="">Groups Number</option>
            <option>1 </option>
            <option>2 </option>
            <option>3 </option>
            <option>4</option>
          </select>

          <button type="submit">register</button>
        </form>

        {courseData.length > 0 && (
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Course Name</th>
                <th scope="col">Course Type</th>
                <th scope="col">Group Number</th>
              </tr>
            </thead>
            <tbody>
              {courseData.map((item, index) => (
                <tr key={index}>
                  <td>{item.courseName}</td>
                  <td>{item.courseType}</td>
                  <td>{item.groupNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ScheduleEdit;
