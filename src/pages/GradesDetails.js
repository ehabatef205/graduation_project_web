
import "../component/GradesDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  { useState } from 'react';
import Bars from "./statics/Bars";
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
