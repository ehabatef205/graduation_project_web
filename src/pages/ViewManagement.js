
import "../component/ViewManagement.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Managementlist from "../lists/managmentlist";
import Bars from "./statics/Bars";

const ViewManagement = () => {
  return (
    <div className="divrootVM">
      <Bars/>
      <div className="container3">
      <a href="/CreateManagement">
      <img className="Add" src="../images/pluss.png" alt="" />
      </a>
      <input
      className="search"
      id="search"
      placeholder="Search"
    />
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Management code</th>
              <th scope="col">Management Name</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <Managementlist/>       
          </tr>
          
          </tbody>
          </table>
        <br></br>
      </div>
    </div>
  );
};

export default ViewManagement;
