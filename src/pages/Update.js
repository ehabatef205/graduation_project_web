import { Link ,useNavigate,useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import "../component/Update.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bars from "./statics/Bars";


const Update = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [student,setStudent]=useState({})
  const [formData, setFormData] = useState({
    email:student.email,
    phone: student.phone,
    mobile: student.mobile,
    address: student.address,
  });
  const{email,
    phone,
    mobile,
    address}=formData;
  useEffect(() => {
    try {
      setStudent(location.state.student)
    } catch (error) {
      navigate(-1)
    }
  }, [])
  
  
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
      e.preventDefault()
      console.log(formData)

    }

  return (
    <div className="divrootup">
     <Bars/>
      <div className="child1">
        <div className="containerup">
          <form>
            <h2 className="h2">Update Data</h2>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="full name" className="form-label">
                    Full Name:
                  </label>
                </h5>
              </div>
              <div className="col-auto ">
                <input
                  type="text"
                  readOnly
                  class="form-control-plaintext"
                  id="staticName"
                  value={student.name}
                />
              </div>
            </div>

            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  <label htmlFor="code" className="form-label">
                    Code:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  readOnly
                  class="form-control-plaintext"
                  id="staticCode"
                  value={student.student_id}
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="gpa" className="form-label">
                    GPA:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  readOnly
                  class="form-control-plaintext"
                  id="staticgpa"
                  value="2.01"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="nationalID" className="form-label">
                    National ID:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  readOnly
                  class="form-control-plaintext"
                  id="staticNational"
                  value={student.NAT_id}
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  id="email"
                  onChange={onChange}
                  name="email"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="mobileNumber" className="form-label">
                    Mobile Number:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="mobileNumber"
                  placeholder="Edit here"
                  name="mobile"
                  value={mobile}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="address" className="form-label">
                    Address:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Edit here"
                  name="address"
                  value={address}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="pwd" className="form-label">
                    phone:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Edit password"
                  name="phone"
                  value={phone}
                  onChange={onChange}
                />
              </div>
            </div>
            <button  onClick={onSubmit}  className="button6">
              Save modifications
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
