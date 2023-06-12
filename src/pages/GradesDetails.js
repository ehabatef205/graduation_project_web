import { Link } from "react-router-dom";
import "../component/GradesDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

const GradesDetails = () => {
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
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container-fluid">
            <div className="divlogo fs-5">
              <h className="h" style={{ color: "black" }}>
                Faculty Of Science
              </h>
            </div>
            <button
              className="navbar-toggler collapsed "
              type="button"
              data-toggle="collapse"
              data-target="#navbar-collapse"
              aria-expanded="false"
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
                    className="navbar-brand badge rounded-pill btn  fs-5 "
                    aria-current="page"
                    to="/"
                  >
                    <h className="h" style={{ color: "black" }}>
                      Home
                    </h>
                  </Link>
                </li>
               
                <li className="nav-item">
                  <Link
                    to="/Login"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h className="h" style={{ color: "black" }}>
                      {" "}
                      Log Out
                    </h>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="containerGD">
        <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Quizes</AccordionHeader>
          <AccordionBody accordionId="1">
          <table class="table">
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
          <table class="table">
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
          <table class="table">
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
        <table class="table">
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
