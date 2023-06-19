import { useLocation } from "react-router-dom";

import "../component/UpdateCourses.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bars from "./statics/Bars";
const UpdateCourses = () => {
  const location = useLocation()
  const { course } = location.state
  
  return (
    <div className="divrootupc">
      <Bars/>
      <div className="child1">
        <div className="container">
          <form>
            <h2 className="h2">View Course</h2>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="Course Code" className="form-label">
                    Course Code:
                  </label>
                </h5>
              </div>
              <div className="col-auto ">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="staticName"
                  value="Math494"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="Course Name" className="form-label">
                    Course Name:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={course.course_name}
                  name="name"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="DoctorName" className="form-label">
                    Doctor Name:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="DoctorName"
                  placeholder="none"
                  name="DoctorName"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="Teaching Assistant" className="form-label">
                    Teaching Assistant:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="Teaching Assistant"
                  placeholder="none"
                  name="Teaching Assistant"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="Hours" className="form-label">
                    Hours:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="Hours"
                  placeholder="3"
                  name="Hours"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="Groups" className="form-label">
                    Groups:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="Groups"
                  placeholder="2"
                  name="Groups"
                />
              </div>
            </div>
            <button type="submit" className="button6">
              Save modifications
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourses;
