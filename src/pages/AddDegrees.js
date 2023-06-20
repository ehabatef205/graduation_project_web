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
    setGroup(location.state.group)
    console.log(location.state.group)
  } catch (error) {
    navigate(-1)
  }
},[])
const add=()=>{

}
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
          <option value="" name></option>
          <option value="">Quizes </option>
          <option value="">Midterms </option>
          <option  value="">Assignment </option>
          </select>
        
          <label htmlFor="degree">Enter Name:</label>
          <input
            className="inputA"
            id="studentId"
          />
          <table  className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Student code</th>
              <th scope="col">Student Name</th>
              <th scope="col">Degree</th>
            </tr>
          </thead>
          <tbody >
           
            {Group.students?.map((student,key)=>(<tr>
            <th scope="row">
              {student}
            </th>
            <td><input className="inputAD" name={student}></input></td>
          </tr>))}
          
          </tbody>
        </table>
          <button type="submit" onClick={add}>Submit</button>
        </form>
        
         
      </div>
    </div>
  );
};

export default AddDegrees;
