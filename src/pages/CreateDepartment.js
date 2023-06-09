import { Link ,useNavigate } from "react-router-dom";
import { useState } from "react";
import "../component/CreateCourse.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Bars from "./statics/Bars";

const CreateDepartment = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageSelected, setImageSelected] = useState(false);
  const [DepartmentId,setDepartmentId]= useState('');
  const [DepartmentName,setDepartmentName]= useState('');
  const [DepartmentDesc,setDepartmentDesc]= useState('');
  const navigate = useNavigate();

  function handleImageChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setImageUrl(reader.result);
      setImageSelected(true);     
    });
    
    reader.readAsDataURL(file);
    
  }
  const checkinput=()=>{
    if(DepartmentDesc&&DepartmentId&&DepartmentName&&imageUrl)
      return true
    return false
  }
  const handeSubmit=()=>{
    if(checkinput)
      axios.post("department/create_department",
      {
        department_id: DepartmentId,
        department_name:DepartmentName,
        department_description: DepartmentDesc,
        image:imageUrl
      },{headers:{authorization:localStorage.getItem("Authorization")}}
      )
      .then((res)=>{
        console.log(res)
        navigate("/Adminpage");})
  }
  return (
    <div className="divrootup">
      <Bars></Bars>
      <div className="child1">
        <div className="container">
          <form>
            <h2 className="h2">Create Department</h2>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <div style={{ position: "relative", display: "inline-block" }}>
                  {!imageSelected && (
                    <label htmlFor="image-upload">
                      <img
                        src="/images/plus1.png"
                        alt="Upload "
                        style={{
                          cursor: "pointer",
                          width: "70px",
                          height: "70px",
                          marginLeft: "75px",
                        }}
                      />
                    </label>
                  )}
                  <input
                    id="image-upload"
                    type="file"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt="Selected "
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "80px",
                        height: "80px",
                        marginLeft: "115px",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="department id" className="form-label">
                    Department ID:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="departmentId"
                  placeholder="Enter here"
                  name="departmentId"
                  value={DepartmentId}
                  onChange={(e)=>{
                    setDepartmentId(e.target.value)}}
                />
              </div>
            </div>

            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="department name" className="form-label">
                    Department Name:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="departmentName"
                  placeholder="Enter here"
                  name="departmentName"
                  value={DepartmentName}
                  onChange={(e)=>{
                    setDepartmentName(e.target.value)}}
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="course department" className="form-label">
                    Department Description:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="corsedepartment"
                  placeholder="Enter here"
                  name="corsedepartment"
                  value={DepartmentDesc}
                  onChange={(e)=>{
                    setDepartmentDesc(e.target.value)}}
                />
              </div>
            </div>
            <button type="submit" className="button6" onClick={handeSubmit} >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateDepartment;
