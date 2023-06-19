import { Link ,useNavigate,useLocation} from "react-router-dom";
import "../component/AddDegrees.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState,useEffect } from "react";
import Bars from "./statics/Bars";

const AddDegrees = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [Group,setGroup]=useState({})
  useEffect(()=>{
   try {
    setGroup(location.state.Group)
  } catch (error) {
    navigate(-1)
  }
},[])
  return (
    <div className="divrootADE">
      <Bars/>
      <div className="containerADE">
        <form className="designA">
          <label htmlFor="Type">Select Type:</label>
          <select
            className="inputA"
            id="Type"
          >
          <option value=""></option>
          <option>Quizes </option>
          <option>Midterms </option>
          <option>Assignment </option>
          </select>
        
          <label htmlFor="degree">Enter Name:</label>
          <input
            className="inputA"
            id="studentId"
          />
          <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Student code</th>
              <th scope="col">Student Name</th>
              <th scope="col">Degree</th>
            </tr>
          </thead>
          <tbody>
          {Group.students.map((student_id,key)=>(<tr>
            <th scope="row">
              Rahma Sabry
            </th>
            <th>1927204</th>
            <td><input className="inputAD"></input></td>
          </tr>))}
          <tr>
            <th scope="row">
              Ziad Mohamed
            </th>
            <th>1927109</th>
            <td><input className="inputAD"></input></td>
          </tr>
          <tr>
            <th scope="row">
              Ehab Atef
            </th>
            <th>1827066</th>
            <td><input className="inputAD"></input></td>
          </tr>
          </tbody>
        </table>
          <button type="submit">Submit</button>
        </form>
        
         
      </div>
    </div>
  );
};

export default AddDegrees;
