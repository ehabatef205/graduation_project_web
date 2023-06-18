import { Link ,useNavigate } from "react-router-dom";
import { useState } from "react";
import "../component/CreateCourse.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Bars from "./statics/Bars";
const CreateCourse = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageSelected, setImageSelected] = useState(false);
  const [course_name,setCours_name]=useState("")
  const [course_id,setCourse_id]=useState("")
  const [course_desc,setCours_desc]=useState("")
  const [course_credit,setCours_credit]=useState("")
  const [course_level,setCours_level]=useState("")
  const [department,setDepartment]=useState("")

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
      if(course_id&&imageUrl&&course_name&&course_credit&&course_desc&&course_level&&department)
        return true
      console.log("errr")
      return false
    }
    const handeSubmit=()=>{
      if(checkinput)
        axios.post("course/create_course",
        {
          course_id:course_id,
          coures_name:course_name,
          course_description:course_desc,
          course_credit:course_credit,
          course_level:course_level,
          department:department,
          image:imageUrl
        },{headers:{authorization:localStorage.getItem("Authorization")}}
        )
        .then((res)=>{
          console.log(res)
          navigate("/Adminpage");})
        }
    

  
  return (
    <div className="divrootcc">
      <Bars></Bars>
      <div className="child1">
        <div className="container">
          <form>
            <h2 className="h2">Create Course</h2>
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
                  <label htmlFor="course id" className="form-label">
                    Course ID:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="courseId"
                  placeholder="Enter here"
                  name="courseId"
                  value={course_id}
                  onChange={(e)=>{
                    setCourse_id(e.target.value)
                  }}
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="course name" className="form-label">
                    Course Name:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="courseName"
                  placeholder="Enter here"
                  name="courseName"
                  value={course_name}
                  onChange={(e)=>{
                    setCours_name(e.target.value)
                  }}
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="course description" className="form-label">
                    Course Description:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="courseDescription"
                  placeholder="Enter here"
                  name="courseDescription"
                  value={course_desc}
                  onChange={(e)=>{
                    setCours_desc(e.target.value)
                  }}
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="course credit" className="form-label">
                    Course Credit:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="courseCredit"
                  placeholder="Enter here"
                  name="courseCredit"
                  value={course_credit}
                  onChange={(e)=>{
                    setCours_credit(e.target.value)
                  }}
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="course level" className="form-label">
                    Course level:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="course_level"
                  placeholder="Enter here"
                  name="course_level"
                  value={course_level}
                  onChange={(e)=>{
                    setCours_level(e.target.value)
                  }}
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="department" className="form-label">
                    Department:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="department"
                  placeholder="Enter here"
                  name="department"
                  value={department}
                  onChange={(e)=>{
                    setDepartment(e.target.value)
                  }}
                />
              </div>
            </div>
            <button className="button6" onClick={handeSubmit}>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
