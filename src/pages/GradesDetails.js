
import "../component/GradesDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  { useState,useEffect } from 'react';
import Bars from "./statics/Bars";
import { useLocation } from "react-router-dom";
import axios from "../api/axios"

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

const GradesDetails = () => {
  const location = useLocation();
  const [quiz,setquiz]=useState([])
  const [ass,setass]=useState([])
  const [Midterm,setMidterm]=useState([])

  useEffect(() => {
    let Q=[],A=[],M=[]
    axios.post('/view_group_by_course_id_and_group_number',
    {course_id: location.state.course.course_id, group_number:location.state.course.group_number},
    {headers:{authorization:localStorage.getItem("Authorization")}}).then((res)=>{
      
      res.respone.quizzes.map((sets)=>{
        var result = sets.find(obj => {
          return obj.student_id === JSON.parse(localStorage.getItem("data")).student_id
        })
        Q.push(result)
      })
    })
    console.log(Q)

}, [])

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };
    return (
    <div className="divrootGD">
      <div id="root">
        <Bars/>
        <div className="containerGD">
        <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Quizes</AccordionHeader>
          <AccordionBody accordionId="1">
          <table className="table">
          <thead>
            <tr>
              <th >quiz 1</th>
              <th >10/10</th>    
            </tr>
          </thead>
          <tbody>
            <tr>
            <th >quiz 2</th>
            <th >10/10</th>            
            </tr>
            <tr>
            <th >quiz 3</th>
            <th >8/10</th>            
            </tr>
            <tr>
            <th >quiz 4</th>
            <th >9/10</th>            
            </tr>
            </tbody>
            </table>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Assignments</AccordionHeader>
          <AccordionBody accordionId="2">
          <table className="table">
          <thead>
            <tr>
              <th >Assignment 1</th>
              <th >10/10</th>    
            </tr>
          </thead>
          <tbody>
            <tr>
            <th >Assignment 2</th>
            <th >10/10</th>            
            </tr>
            </tbody>
            </table>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Midterms</AccordionHeader>
          <AccordionBody accordionId="3">
          <table className="table">
          <thead>
            <tr>
              <th >Midterm 1</th>
              <th >10/10</th>    
            </tr>
          </thead>
          <tbody>
            <tr>
            <th >Midterm 2</th>
            <th >10/10</th>            
            </tr>
            </tbody>
            </table>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
        <AccordionHeader targetId="4">Final</AccordionHeader>
        <AccordionBody accordionId="4">
        <table className="table">
        <thead>
          <tr>
            <th >Final</th>
            <th >90/100</th>    
          </tr>
        </thead>
          </table>
        </AccordionBody>
      </AccordionItem>
      </Accordion>
        
        </div>
      </div>
    </div>
  );
};

export default GradesDetails;
