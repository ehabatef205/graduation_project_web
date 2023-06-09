import { Link } from "react-router-dom";
import { useState } from "react";
import "../component/CreateStudent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bars from "./statics/Bars";
const CreateStudent = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageSelected, setImageSelected] = useState(false);

  function handleImageChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setImageUrl(reader.result);
      setImageSelected(true);
    });

    reader.readAsDataURL(file);
  }
  return (
    <div className="divrootcs">
      <Bars></Bars>
      <div className="child1">
        <div className="containercs">
          <form>
            <h2 className="h2">Create Student</h2>
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
                  <label htmlFor="student id" className="form-label">
                    Student ID:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="studentId"
                  placeholder="Enter here"
                  name="studentId"
                />
              </div>
            </div>

            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter here"
                  name="name"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter here"
                  name="email"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter here"
                  name="password"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="birthday" className="form-label">
                    BirthDay:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="date"
                  className="form-control"
                  id="birthday"
                  placeholder="Enter here"
                  name="birthday"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="phone" className="form-label">
                    Phone:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="Enter here"
                  name="phone"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="mobile" className="form-label">
                    Mobile:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="number"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter here"
                  name="mobile"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="level" className="form-label">
                    Level:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="number"
                  className="form-control"
                  id="level"
                  placeholder="Enter here"
                  name="level"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="national id" className="form-label">
                    National ID:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="number"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter here"
                  name="mobile"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="address" className="form-label">
                    Address:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter here"
                  name="address"
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
                  id="department"
                  placeholder="Enter here"
                  name="department"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="high school score" className="form-label">
                    High School Score:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="number"
                  className="form-control"
                  id="highSchoolScore"
                  placeholder="Enter here"
                  name="highSchoolScore"
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

export default CreateStudent;
