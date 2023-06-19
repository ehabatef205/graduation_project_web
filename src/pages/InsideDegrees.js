import { Link } from "react-router-dom";
import "../component/InsideDegrees.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bars from "./statics/Bars";

const InsideDegrees = () => {
  return (
    <div className="divrootID">
      <Bars/>
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
