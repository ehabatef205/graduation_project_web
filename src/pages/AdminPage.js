import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../component/AdminPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Postlist from "../lists/posts";

import {
  Card,
  CardBody,
  CardText,
  CardSubtitle,
  CardTitle,
  PopoverHeader,
  PopoverBody,
  Button,
  UncontrolledPopover,
} from "reactstrap";

const AdminPage = () => {
  return (
    <div className="divrootAdP">
      <div id="root">
        <nav className="navbar navbar-expand-lg navbar-dark   fixed-top">
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
                    to="/ViewStudent"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h className="h" style={{ color: "black" }}>
                      {" "}
                      View Student
                    </h>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Courses"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h className="h" style={{ color: "black" }}>
                      {" "}
                      Courses
                    </h>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Departments"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h className="h" style={{ color: "black" }}>
                      {" "}
                      Departments
                    </h>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/CreateManagement"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h className="h" style={{ color: "black" }}>
                      {" "}
                      Management
                    </h>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/CreateStudent"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    <h className="h" style={{ color: "black" }}>
                      {" "}
                      Student
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
      </div>
      <div className="containerAdP">
        <table>
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
                  <img className="Add2" src="../images/plus.png" alt="" />
                </a>
              </th>
            </tr>
          </thead>
        </table>

        <Card
          style={{
            width: "50rem",
            marginLeft: "570px",
            height: "auto",
            backgroundColor: "white",
          }}
        >
          <CardBody>
            <CardTitle>
              <table>
                <thead>
                  <tr>
                    <img className="person" src="../images/person.png" alt="" />
                    <th>
                      {" "}
                      <h5>Ziad Mohammed</h5>
                    </th>
                    <th></th>
                  </tr>
                </thead>
              </table>
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              2 hours
            </CardSubtitle>
          </CardBody>
          <img
            alt="Card cap"
            src="../images/اعلان.jpg"
            width="100%"
            height="70%"
          />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card‘s content.
            </CardText>
            <Button
              id="UncontrolledPopover"
              type="button"
              style={{
                backgroundColor: "#b7e576",
              }}
            >
              Comments
            </Button>
            <UncontrolledPopover
              placement="bottom"
              target="UncontrolledPopover"
            >
              <PopoverHeader
                style={{
                  backgroundColor: "#b7e576",
                }}
              >
                Comments
              </PopoverHeader>
              <PopoverBody>
                <div className="containerco">
                  <table>
                    <thead>
                      <tr>
                        <img
                          className="person"
                          src="../images/person.png"
                          alt=""
                        />
                        <th>
                          {" "}
                          <h5>Ziad Mohammed</h5> 2 hours
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                  </table>
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </div>
                <hr></hr>
                <div className="containerco">
                  <table>
                    <thead>
                      <tr>
                        <img
                          className="person"
                          src="../images/person.png"
                          alt=""
                        />
                        <th>
                          {" "}
                          <h5>Ziad Mohammed</h5> 2 hours
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                  </table>
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </div>
                <hr></hr>
                <div className="containerco">
                  <table>
                    <thead>
                      <tr>
                        <img
                          className="person"
                          src="../images/person.png"
                          alt=""
                        />
                        <th>
                          {" "}
                          <h5>Ziad Mohammed</h5> 2 hours
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                  </table>
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>
                        <input
                          type="text"
                          className="form-control"
                          id="courseId"
                          placeholder="Comment..."
                          name="courseId"
                        />
                      </th>
                      <a href="#">
                        <img
                          className="arrow"
                          src="../images/arrow.jpg"
                          alt=""
                        />{" "}
                      </a>
                      <th></th>
                    </tr>
                  </thead>
                </table>
              </PopoverBody>
            </UncontrolledPopover>
          </CardBody>
        </Card>
        <div className="divide"></div>
        <Card
          style={{
            width: "50rem",
            marginLeft: "570px",
            height: "auto",
            backgroundColor: "white",
          }}
        >
          <CardBody>
            <CardTitle>
              <table>
                <thead>
                  <tr>
                    <img
                      className="person"
                      src="../images/woman_people_avatar_person_girl_icon_131289.png"
                      alt=""
                    />
                    <th>
                      {" "}
                      <h5>Rahma Sabry</h5>
                    </th>
                    <th></th>
                  </tr>
                </thead>
              </table>
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              5 hours
            </CardSubtitle>
          </CardBody>
          <img
            alt="Card cap"
            src="../images/اعلان.jpg"
            width="100%"
            height="70%"
          />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card‘s content.Some quick example text to build on the
              card title and make up the bulk of the card‘s content.
            </CardText>
            <Button
              id="UncontrolledPopover"
              type="button"
              style={{
                backgroundColor: "#b7e576",
              }}
            >
              Comments
            </Button>
            <UncontrolledPopover
              placement="bottom"
              target="UncontrolledPopover"
            >
              <PopoverHeader
                style={{
                  backgroundColor: "#b7e576",
                }}
              >
                Comments
              </PopoverHeader>
              <PopoverBody>
                <div className="containerco">
                  <table>
                    <thead>
                      <tr>
                        <img
                          className="person"
                          src="../images/person.png"
                          alt=""
                        />
                        <th>
                          {" "}
                          <h5>Ziad Mohammed</h5> 2 hours
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                  </table>
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </div>
                <hr></hr>
                <div className="containerco">
                  <table>
                    <thead>
                      <tr>
                        <img
                          className="person"
                          src="../images/person.png"
                          alt=""
                        />
                        <th>
                          {" "}
                          <h5>Ehab Atef</h5> 2 hours
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                  </table>
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </div>
                <hr></hr>
                <div className="containerco">
                  <table>
                    <thead>
                      <tr>
                        <img
                          className="person"
                          src="../images/person.png"
                          alt=""
                        />
                        <th>
                          {" "}
                          <h5>Mohammed Ahmed</h5> 2 hours
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                  </table>
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>
                        <input
                          type="text"
                          className="form-control"
                          id="courseId"
                          placeholder="Comment..."
                          name="courseId"
                        />
                      </th>
                      <a href="#">
                        <img
                          className="arrow"
                          src="../images/arrow.jpg"
                          alt=""
                        />{" "}
                      </a>
                      <th></th>
                    </tr>
                  </thead>
                </table>
              </PopoverBody>
            </UncontrolledPopover>
          </CardBody>
        </Card>
        <div className="divide"></div>
        <Card
          style={{
            width: "50rem",
            marginLeft: "570px",
            height: "auto",
            backgroundColor: "white",
          }}
        >
          <CardBody>
            <CardTitle>
              <table>
                <thead>
                  <tr>
                    <img
                      className="person"
                      src="../images/images (1).jpeg"
                      alt=""
                    />
                    <th>
                      {" "}
                      <h5>Aya Mohammed</h5>
                    </th>
                    <th></th>
                  </tr>
                </thead>
              </table>
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              2 days
            </CardSubtitle>
          </CardBody>
          <img
            alt="Card cap"
            src="../images/اعلان.jpg"
            width="100%"
            height="70%"
          />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card‘s content.
            </CardText>
            <Button
              id="UncontrolledPopover"
              type="button"
              style={{
                backgroundColor: "#b7e576",
              }}
            >
              Comments
            </Button>
            <UncontrolledPopover
              placement="bottom"
              target="UncontrolledPopover"
            >
              <PopoverHeader
                style={{
                  backgroundColor: "#b7e576",
                }}
              >
                Comments
              </PopoverHeader>
              <PopoverBody>
                <div className="containerco">
                  <table>
                    <thead>
                      <tr>
                        <img
                          className="person"
                          src="../images/person.png"
                          alt=""
                        />
                        <th>
                          {" "}
                          <h5>Ziad Mohammed</h5> 5 hours
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                  </table>
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </div>
                <hr></hr>
                <div className="containerco">
                  <table>
                    <thead>
                      <tr>
                        <img
                          className="person"
                          src="../images/person.png"
                          alt=""
                        />
                        <th>
                          {" "}
                          <h5>Ziad Mohammed</h5> 4 hours
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                  </table>
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </div>
                <hr></hr>
                <div className="containerco">
                  <table>
                    <thead>
                      <tr>
                        <img
                          className="person"
                          src="../images/person.png"
                          alt=""
                        />
                        <th>
                          {" "}
                          <h5>Ziad Mohammed</h5> 2 hours
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                  </table>
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>
                        <input
                          type="text"
                          className="form-control"
                          id="courseId"
                          placeholder="Comment..."
                          name="courseId"
                        />
                      </th>
                      <a href="#">
                        <img
                          className="arrow"
                          src="../images/arrow.jpg"
                          alt=""
                        />{" "}
                      </a>
                      <th></th>
                    </tr>
                  </thead>
                </table>
              </PopoverBody>
            </UncontrolledPopover>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AdminPage;
