import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../component/Student.css";
import Postlist from "../lists/posts";

const Student = () => {
  const student_id = JSON.parse(localStorage.getItem("data")).student_id;
  const name = JSON.parse(localStorage.getItem("data")).name;
  const department = JSON.parse(localStorage.getItem("data")).department;
  const image = JSON.parse(localStorage.getItem("data")).image;

  return (
    <div className="divrootSt">
      <div id="root">
        <nav className="navbar navbar-expand-lg navbar-dark  fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand  fs-5" to="#">
              <h className="h90" style={{ color: "black" }}>
                Faculty Of Science
              </h>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                    aria-current="page"
                    to="/"
                  >
                    {" "}
                    <h className="h90" style={{ color: "black" }}>
                      Home
                    </h>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/ScheduleView"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h className="h90" style={{ color: "black" }}>
                      Click here to view/print the schedule
                    </h>{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/ScheduleEdit"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h className="h90" style={{ color: "black" }}>
                      {" "}
                      Click here to register/edit the schedule
                    </h>{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="navbar-brand badge rounded-pill btn btn-outline-black fs-5"
                    aria-current="page"
                    to="/Login"
                  >
                    <h className="h90" style={{ color: "black" }}>
                      Log out
                    </h>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div
        style={{
          marginLeft: "20px",
          backgroundColor: "white",
          justifyItems: "center",
        }}
        className="col-p-3-bg-light"
      >
        <form style={{ marginLeft: "60px" }}>
          <img
            style={{ marginLeft: "80px" }}
            src={image}
            className="card-img-top2"
            alt="..."
          />
          <table class="table ">
            <tbody>
              <tr>
                <th>Full Name:</th>
                <td>{name}</td>
              </tr>
              <tr>
                <th>ID:</th>
                <td>{student_id}</td>
              </tr>
              <tr>
                <th>GPA:</th>
                <td>2.01</td>
              </tr>
              <tr>
                <th>Department:</th>
                <td>{department}</td>
              </tr>
            </tbody>
          </table>
          <Link
            style={{ marginBottom: "10px", borderRadius: "5px" }}
            className="update"
            aria-current="page"
            to="/Update"
          >
            Update
          </Link>
        </form>
      </div>
      <div
        style={{
          width: "800px",
          backgroundColor: "white",
          height: "700px",
        }}
        className="col-p-5-bg-light"
      >
        <div
          class="nav justify-content-center"
          style={{ backgroundColor: "#83cc61" }}
        >
          <div class="nav-item">
            <h1>Advertisements</h1>
          </div>
        </div>
        <Postlist></Postlist>
      </div>
    </div>
  );
};

export default Student;
