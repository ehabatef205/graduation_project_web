import { Link, useNavigate } from "react-router-dom";
import "../component/AddPost.css";
import "bootstrap/dist/css/bootstrap.min.css";
import createpost from "../api/getposts";
import Bars from "./statics/Bars";
const AddPost = () => {
  const navigate = useNavigate();
  const onSubmit = async () => {
    await createpost("testpost", "", "admin", "admin").then(() => {
      navigate("/AddPost");
    });
  };
  return (
    <div className="divrootAdd">
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
                    to="/Student"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                    onClick={onSubmit}
                  >
                    <h className="h" style={{ color: "black" }}>
                      {" "}
                      Test Create
                    </h>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AddPost;
