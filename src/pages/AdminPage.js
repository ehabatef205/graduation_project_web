
import "../component/AdminPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link,useNavigate } from "react-router-dom";
import Postlist from "../lists/posts";
import Bars from "./statics/Bars";
const AdminPage = () => {


  return (
    <div className="divrootAdP">
      <Bars></Bars>
      <div className="containerAdP">
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
        <div style={{marginLeft: "570px"}}>
        <Postlist ></Postlist></div>
      </div>
    </div>
  );
};

export default AdminPage;
