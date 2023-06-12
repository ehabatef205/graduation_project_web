import { Link } from "react-router-dom";
import "../component/InsideDegrees.css";
import "bootstrap/dist/css/bootstrap.min.css";

const InsideDegrees = () => {
  return (
    <div className="divrootID">
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
      <div className="containerID">
      <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Student code</th>
          <th scope="col">Student Name</th>
          <th scope="col">Degree</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">
          Rahma Sabry
        </th>
        <th>1927204</th>
        <td><input className="inputID"></input></td>
      </tr>
      <tr>
        <th scope="row">
          Ziad Mohamed
        </th>
        <th>1927109</th>
        <td><input className="inputID"></input></td>
      </tr>
      <tr>
        <th scope="row">
          Ehab Atef
        </th>
        <th>1827066</th>
        <td><input className="inputID"></input></td>
      </tr>
      </tbody>
    </table>
    <button type="submit" className="buttonID">Submit</button>
      </div>
    </div>
  );
};

export default InsideDegrees;
