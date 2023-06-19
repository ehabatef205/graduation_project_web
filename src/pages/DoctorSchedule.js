
import "../component/DoctorSchedule.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bars from "./statics/Bars";
const DoctorSchedule = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="divrootSchD">
     <Bars/>

      <div className="containerSchD">
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
        <button type="submit" className="buttonD" onClick={handlePrint}>
          Print
        </button>
      </div>
    </div>
  );
};

export default DoctorSchedule;
