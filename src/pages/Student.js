import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../component/Student.css";
import Postlist from "../lists/posts";
import StudentBar from "./statics/StudentBar";
const Student = () => {
  const student_id = JSON.parse(localStorage.getItem("data")).student_id;
  const name = JSON.parse(localStorage.getItem("data")).name;
  const department = JSON.parse(localStorage.getItem("data")).department;
  const image = JSON.parse(localStorage.getItem("data")).image;

  

  return (
    <div className="divrootSt">
      <StudentBar/>
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
          <table className="table ">
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
          className="nav justify-content-center"
          style={{ backgroundColor: "#83cc61" }}
        >
          <div className="nav-item">
            <h1>Advertisements</h1>
          </div>
        </div>
        <Postlist></Postlist>
      </div>
    </div>
  );
};

export default Student;
