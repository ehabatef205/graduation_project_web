import { Link } from "react-router-dom";
import { useState } from "react";
import "../component/CreateGroup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../api/axios";


const CreateGroup = () => {
    const [groupNumber, setGroupNumber] = useState('');
    const [studentNumber, setStudentNumber] = useState('');
    const [doctorL, setDoctorL] = useState('');
    const [timeL, setTimeL] = useState('');
    const [placeL, setPlaceL] = useState('');
    const [doctorS, setDoctorS] = useState('');
    const [timeS, setTimeS] = useState('');
    const [placeS, setPlaceS] = useState('');

    const [groupData, setGroupData] = useState([]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if ( groupNumber && studentNumber && doctorL && timeL && placeL && doctorS && timeS && placeS) {
        const newData = {
          groupNumber,
          studentNumber,
          doctorL,
          timeL,
          placeL,
          doctorS,
          timeS,
          placeS,
        };
        setGroupData([...groupData, newData]);
        setGroupNumber('');
        setStudentNumber('');
        setDoctorL('');
        setTimeL('');
        setPlaceL('');
        setDoctorS('');
        setTimeS('');
        setPlaceS('');
      }
      axios
      .post(
        '/registration/',
        { group: '6449a7c4b74537645565670a' },
        { headers: { authorization: `Bearer ${localStorage.token}` } }
      )
      .then((res) => {
        console.log('done');
      })
      .catch((error) => console.log(error));
  };
      const handleDelete = (index) => {
        const updatedData = [...groupData];
        updatedData.splice(index, 1);
        setGroupData(updatedData);
      };
    return (
    <div className="divrootCG">
      <div id="root">
        <nav className="navbar navbar-expand-lg navbar-dark  fixed-top">
          <div className="container-fluid">
            <div className="divlogo fs-5">
              <h className="h" style={{ color: "black" }}>
                Faculty Of Science
              </h>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" style={{ marginLeft: "15px" }}>
                  <Link
                    className="navbar-brand badge rounded-pill btn  fs-5  "
                    aria-current="page"
                    to="/"
                  >
                    <h className="h" style={{ color: "black" }}>
                      Home
                    </h>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="containerCG">
        <form className="designCG" onSubmit={handleSubmit}>
        <label htmlFor="group">Enter Group Number:</label>
        <input
          className="inputC"
          id="groupNumber"
          onChange={(e) => setGroupNumber(e.target.value)}
        />
        <label htmlFor="no">Enter Number Of Student:</label>
        <input
          className="inputC"
          id="no"
          onChange={(e) => setStudentNumber(e.target.value)}

        />
        <label htmlFor="id">Enter Doctor ID (Lecture):</label>
        <input
          className="inputC"
          id="id"
          onChange={(e) => setDoctorL(e.target.value)}

        />
        <label htmlFor="Time">Select Time:</label>
          <select
            className="inputC"
            id="Time"
            onChange={(e) => setTimeL(e.target.value)}

          >
          <option value=""></option>
          <option>08:00 AM </option>
          <option>10:00 AM </option>
          <option>12:00 PM </option>
          <option>02:00 PM </option>
          <option>04:00 PM </option>
          <option>06:00 PM </option>
          <option>08:00 PM </option>
          </select>
          <label htmlFor="place">Enter Place:</label>
          <input
            className="inputC"
            id="place"
            onChange={(e) => setPlaceL(e.target.value)}

          />
          <label htmlFor="id">Enter Doctor ID (Section):</label>
        <input
          className="inputC"
          id="id"
          onChange={(e) => setDoctorS(e.target.value)}

        />
        <label htmlFor="Time">Select Time:</label>
          <select
            className="inputC"
            id="Time"
            onChange={(e) => setTimeS(e.target.value)}
          >
          <option value=""></option>
          <option>08:00 AM </option>
          <option>10:00 AM </option>
          <option>12:00 PM </option>
          <option>02:00 PM </option>
          <option>04:00 PM </option>
          <option>06:00 PM </option>
          <option>08:00 PM </option>
          </select>
          <label htmlFor="place">Enter Place:</label>
          <input
            className="inputC"
            id="place"
            onChange={(e) => setPlaceS(e.target.value)}
          />         
          <button type="submit">Submit</button>
          </form>
          {groupData.length > 0 && (
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Group Number</th>
                  <th scope="col">Number Of Students</th>
                  <th scope="col">Doctor ID (Lecture)</th>
                  <th scope="col">Time</th>
                  <th scope="col">Place</th>
                  <th scope="col">Enter Doctor ID (Section)</th>
                  <th scope="col">Time</th>
                  <th scope="col">Place</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {groupData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.groupNumber}</td>
                    <td>{item.studentNumber}</td>
                    <td>{item.doctorL}</td>
                    <td>{item.timeL}</td>
                    <td>{item.placeL}</td>
                    <td>{item.doctorS}</td>
                    <td>{item.timeS}</td>
                    <td>{item.placeS}</td>
                   <td> <button onClick={() => handleDelete(index)} className="delC">  
                    <img className="deleteC" src="../images/401036.png" alt="" />
                    </button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}         
      </div>
    </div>
  );
};

export default CreateGroup;
