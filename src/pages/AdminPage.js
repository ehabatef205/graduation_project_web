import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../component/AdminPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Postlist from "../lists/posts";

const AdminPage = () => {
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
                    className="navbar-brand badge rounded-pill btn  fs-5 "
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
                    to="/ViewStudent"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h className="h" style={{ color: "black" }}>
                      {" "}
                      View Student
                    </h>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Courses"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h className="h" style={{ color: "black" }}>
                      {" "}
                      Courses
                    </h>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Departments"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h className="h" style={{ color: "black" }}>
                      {" "}
                      Departments
                    </h>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/CreateManagement"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h className="h" style={{ color: "black" }}>
                      {" "}
                      Management
                    </h>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/CreateStudent"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h className="h" style={{ color: "black" }}>
                      {" "}
                      Student
                    </h>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Login"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h className="h" style={{ color: "black" }}>
                      {" "}
                      Log Out
                    </h>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="containerAdP">
        <table >
          <thead>
            <tr>
              <th>
                {" "}
                <h1
                  style={{
                    marginLeft: "30px",
                  }}
                >
                  Posts
                </h1>
              </th>
              <th>
                <a href="/AddPost">
                  <img className="Add2" src="../images/pluss.png" alt="" />
                </a>
              </th>
            </tr>
          </thead>
        </table>

        <Postlist></Postlist>
      </div>
    </div>
  );
};

export default AdminPage;
