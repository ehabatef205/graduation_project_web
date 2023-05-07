import { Link } from "react-router-dom";
import "../component/Update.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Update = () => {
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
                    className="navbar-brand badge rounded-pill btn  fs-5  active"
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
                    className="navbar-brand badge rounded-pill btn  fs-5  active"
                    aria-current="page"
                    to="/Student"
                  >
                    <h className="h" style={{ color: "black" }}>
                      Student
                    </h>
                  </Link>
                </li>
                <li className="nav-item" style={{ marginLeft: "15px" }}>
                  <Link
                    className="navbar-brand badge rounded-pill btn  fs-5  active"
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
        <div className="containerup">
          <form>
            <h2 className="h2">Update Data</h2>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="full name" className="form-label">
                    Full Name:
                  </label>
                </h5>
              </div>
              <div className="col-auto ">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="staticName"
                  value="Ahmed Mohamed Mahmoud"
                />
              </div>
            </div>

            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  <label htmlFor="code" className="form-label">
                    Code:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="staticCode"
                  value="1927109"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="gpa" className="form-label">
                    GPA:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="staticgpa"
                  value="2.01"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="nationalID" className="form-label">
                    National ID:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="staticNational"
                  value="30012170104237"
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
                  placeholder="Edit here"
                  name="email"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="mobileNumber" className="form-label">
                    Mobile Number:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="mobileNumber"
                  placeholder="Edit here"
                  name="mobileNumber"
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
                  placeholder="Edit here"
                  name="address"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="nationality" className="form-label">
                    Nationality:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Nationality</option>
                  <option value="1">Egyptian</option>
                  <option value="2">Not Egyptian</option>
                </select>
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="pwd" className="form-label">
                    Password:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Edit password"
                  name="pswd"
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

export default Update;
