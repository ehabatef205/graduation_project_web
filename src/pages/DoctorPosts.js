import { Link } from "react-router-dom";
import "../component/DoctorPosts.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Postlist from "../lists/posts";

const DoctorPosts = () => {
  return (
    <div className="divrootDP">
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
      <div className="containerDP">
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

export default DoctorPosts;