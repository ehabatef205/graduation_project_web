
import "../component/DoctorStudents.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bars from "./statics/Bars";
const DoctorStudents = () => {
  return (
    <div className="divrootds">
      <div id="root">
        <Bars/>
        <div className="containerds">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Student ID</th>
                <th scope="col">Student Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1927204</th>
                <th>Rahma Sabry Ahmed</th>
              </tr>
              <tr>
                <th scope="row">1927109</th>
                <th>Ziad Mohammed Ezzat</th>
              </tr>
              <tr>
                <th scope="row">1927128</th>
                <th>Ahmed Mahmoud Wael</th>
              </tr>
              <tr>
                <th scope="row">1827066</th>
                <th>Ehab Ahmed Mohammed</th>
              </tr>
            </tbody>
          </table>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default DoctorStudents;
