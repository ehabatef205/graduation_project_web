import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../component/Get.css";
import getid from "../api/getid";
import { useState } from "react";
const Get = () => {
  const [formData, setFormData] = useState({
    NAT_id: "",
    HS_score: "",
  });
  const [id, setid] = useState("");

  const { NAT_id, HS_score } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await getid(NAT_id, HS_score).then(async (res) => {
      if (res.data.data.student_id) {
        setid(res.data.data.student_id);
      } else {
        console.log(res);
      }
    });
  };

  return (
    <div className="divroot1">
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
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div style={{ marginTop: "60px" }} className="container1 text-center">
        <div style={{ display: " flex" }}>
          <div style={{ flex: "1" }}>
            <img
              width={"450px"}
              height={"550px"}
              style={{ borderRadius: "15px" }}
              src="../images/Untitled-2.jpg"
              alt="img"
            />
          </div>
          <div className="formate" style={{ flex: "1", borderRadius: "15px" }}>
            <form
              style={{ width: "300px", marginLeft: "45px", marginTop: "65px" }}
            >
              <label className="lable90" for="exampleInputEmail1">
                {" "}
                National ID
              </label>
              <br></br>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="NAT_id"
                value={NAT_id}
                onChange={onChange}
              />
              <label className="lable90" for="inputPassword5">
                High School Degree
              </label>
              <input
                type="password"
                id="inputPassword5"
                className="form-control"
                aria-describedby="passwordHelpBlock"
                name="HS_score"
                value={HS_score}
                onChange={onChange}
              />
              <Link className="loginbtn" onClick={onSubmit} to="">
                Get ID{" "}
              </Link>
            </form>
            <label className="lable90" for="inputPassword5">
              {id}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Get;
