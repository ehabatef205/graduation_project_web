import { Link } from "react-router-dom";
import { useState } from "react";
import "../component/CreateCourse.css";
import "bootstrap/dist/css/bootstrap.min.css";
const CreateCourse = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageSelected, setImageSelected] = useState(false);

  function handleImageChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setImageUrl(reader.result);
      setImageSelected(true);
      console.log(imageUrl);
    });

    reader.readAsDataURL(file);
  }
  return (
    <div className="divrootup">
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
                    className="navbar-brand badge rounded-pill btn  fs-5  "
                    aria-current="page"
                    to="/"
                  >
                    <h className="h" style={{ color: "black" }}>
                      Home
                    </h>
                  </Link>
                </li>
                <li className="nav-item" style={{ marginLeft: "15px" }}>
                  <Link
                    className="navbar-brand badge rounded-pill btn  fs-5  "
                    aria-current="page"
                    to="/AdminPage"
                  >
                    <h className="h" style={{ color: "black" }}>
                      Admin
                    </h>
                  </Link>
                </li>
                <li className="nav-item" style={{ marginLeft: "15px" }}>
                  <Link
                    className="navbar-brand badge rounded-pill btn  fs-5  "
                    aria-current="page"
                    to="/Login"
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
      <div className="child1">
        <div className="container">
          <form>
            <h2 className="h2">Create Course</h2>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <div style={{ position: "relative", display: "inline-block" }}>
                  {!imageSelected && (
                    <label htmlFor="image-upload">
                      <img
                        src="/images/plus1.png"
                        alt="Upload "
                        style={{
                          cursor: "pointer",
                          width: "70px",
                          height: "70px",
                          marginLeft: "75px",
                        }}
                      />
                    </label>
                  )}
                  <input
                    id="image-upload"
                    type="file"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt="Selected "
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "80px",
                        height: "80px",
                        marginLeft: "115px",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="course id" className="form-label">
                    Course ID:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="courseId"
                  placeholder="Enter here"
                  name="courseId"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="course name" className="form-label">
                    Course Name:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="courseName"
                  placeholder="Enter here"
                  name="courseName"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="course description" className="form-label">
                    Course Description:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="courseDescription"
                  placeholder="Enter here"
                  name="courseDescription"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="course credit" className="form-label">
                    Course Credit:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="courseCredit"
                  placeholder="Enter here"
                  name="courseCredit"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="department" className="form-label">
                    Department:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="courseLevel"
                  placeholder="Enter here"
                  name="courseLevel"
                />
              </div>
            </div>
            <button type="submit" className="button6">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
