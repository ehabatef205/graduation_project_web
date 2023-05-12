import { Link } from "react-router-dom";
import "../component/ScheduleView.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ScheduleView = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="divrootSch">
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

      <div className="container3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Saturday</th>
              <th scope="col">Sunday</th>
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text">
                08:00 am
              </th>
              <td></td>
              <td></td>
              <td class="table-warning">
                <p>Comp408: Artificial Intelligence</p>
                <p>Group: 3 </p>
                <p>Place: 16</p>
              </td>
              <td> </td>
              <td></td>
              <td class="table-primary">
                <p>Comp402: Cryptology</p>
                <p>Group: 1 </p>
                <p>Place: 16</p>
              </td>
              <td> </td>
            </tr>
            <tr>
              <th scope="row">10:00 am</th>
              <td class="table-info">
                <p>Math494 : Selected Topics in Mathematics (2)</p>
                <p>Group: 2 </p>
                <p>Place: 16</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td class="table-info">
                <p>Math494 : Selected Topics in Mathematics (2)</p>
                <p>Group: 2 </p>
                <p>Place: 5</p>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">12:00 pm</th>
              <td class="table-success">
                <p>Comp427: Selected Programming Languages</p>
                <p>Group: 2 </p>
                <p>Place: 16</p>
              </td>
              <td></td>
              <td></td>
              <td class="table-light">
                <p> Math212: Linear Algebra and Geometry (2) </p>
                <p>Group: 2 </p>
                <p>Place: 16</p>{" "}
              </td>
              <td></td>
              <td> </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">02:00 pm</th>
              <td class="table-secondary">
                {" "}
                <p>Comp407: Programming Languages ​​Design</p>
                <p>Group: 2 </p>
                <p>Place: 16</p>
              </td>
              <td></td>
              <td class="table-primary">
                {" "}
                <p>Comp402: Cryptology</p>
                <p>Group: 1 </p>
                <p>Place: 15</p>
              </td>
              <td> </td>
              <td> </td>
              <td class="table-secondary">
                <p>Comp407: Programming Languages ​​Design</p>
                <p>Group: 2 </p>
                <p>Place: M mathematical calculator </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">04:00 pm</th>
              <td></td>
              <td></td>
              <td class="table-warning">
                {" "}
                <p>Comp408: Artificial Intelligence</p>
                <p>Group: 3 </p>
                <p>Place: M mathematical calculator 2</p>{" "}
              </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">06:00 pm</th>
              <td class="table-danger">
                {" "}
                <p>Comp490: Review Article</p>
                <p>Group: 1 </p>
                <p>Place: By oath</p>
              </td>
              <td></td>
              <td></td>
              <td> </td>
              <td class="table-light">
                <p> Math212: Linear Algebra and Geometry (2) </p>
                <p>Group: 2 </p>
                <p>Place: 10</p>{" "}
              </td>{" "}
              <td> </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">08:00 pm</th>
              <td></td>
              <td></td>
              <td> </td>
              <td class="table-success">
                <p>Comp427: Selected Programming Languages</p>
                <p>Group: 5 </p>
                <p>Place: 10 </p>
              </td>
              <td></td>
              <td> </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="button10" onClick={handlePrint}>
          Print
        </button>
      </div>
    </div>
  );
};

export default ScheduleView;
