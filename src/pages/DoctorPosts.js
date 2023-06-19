
import "../component/DoctorPosts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bars from "./statics/Bars";

import Postlist from "../lists/posts";

const DoctorPosts = () => {
  return (
    <div className="divrootDP">
      <Bars/>
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
