import { Link } from "react-router-dom";
import React , {useState , useEffect}from 'react';
import "../component/AdminPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import posts from "../api/getposts";




const AdminPage = () => {
  let postsexist=false

  const [post , setpost] = useState({})

    useEffect(() => {
        const getpost = async ()=>{
            setpost(await posts.getallposts())
        }
        getpost()
        
    }, [post]);


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
      <a href="/AddPost">
      <img className="Add2" src="../images/plus.png" alt=""/>    
      </a>
      <ul
      class="nav justify-content-center"
      style={{ backgroundColor: "white" }}
    >
      <li class="nav-item">
        <h1>Posts</h1>
      </li>
    </ul>
        <div className="a3lan2">
          <img
            className="photo2"
            src="../images/اعلان2.jpg"
            alt="advertisement"
          />
          <p className="p2">
            Published on <span class="date">March 25, 2023</span> by{" "}
            <span class="author">John Doe</span>{" "}
            <span class="ad-number">Ad #12345</span>
          </p>
        </div>
        <hr className="hr2"></hr>
        <div className="a3lan2">
          <img
            className="photo2"
            src="../images/اعلان2.jpg"
            alt="advertisement"
          />
          <p className="p2">
            Published on <span class="date">March 25, 2023</span> by{" "}
            <span class="author">John Doe</span>{" "}
            <span class="ad-number">Ad #12345</span>
          </p>
        </div>
        <hr className="hr2"></hr>
        <div className="a3lan2">
          <img
            className="photo2"
            src="../images/اعلان.jpg"
            alt="advertisement"
          />
          <p className="p2">
            Published on <span class="date">March 25, 2023</span> by{" "}
            <span class="author">John Doe</span>{" "}
            <span class="ad-number">Ad #12345</span>
          </p>
        </div>
        <hr className="hr2"></hr>
        <div className="a3lan2">
          <img
            className="photo2"
            src="../images/اعلان2.jpg"
            alt="advertisement"
          />
          <p className="p2">
            Published on <span class="date">March 25, 2023</span> by{" "}
            <span class="author">John Doe</span>{" "}
            <span class="ad-number">Ad #12345</span>
          </p>
        </div>
        <hr className="hr2"></hr>
        <div className="a3lan2">
          <img
            className="photo2"
            src="../images/758.jpg"
            alt="advertisement"
          />
          <p className="p2">
            Published on <span class="date">March 25, 2023</span> by{" "}
            <span class="author">John Doe</span>{" "}
            <span class="ad-number">Ad #12345</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
