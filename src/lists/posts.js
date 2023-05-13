import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../component/AdminPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../api/axios";

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

const Postlist = () => {
  const [ getPosts, setPosts] = React.useState([])

  useEffect(() => {
    axios.get("posts/view_all_post")
      .then(async (res)=>{
        setPosts(res.data.respone)
      })
      .catch(error => console.log(error))
  
  }, [])

  return (
    <div>
      <div>
      {getPosts.map((post, key) => (<div className='totalHome' key={post._id}>
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
                    <img className="person" src={post.management_image} alt="" />
                    <th>
                      {" "}
                      <h5>{post.management_name}</h5>
                      <h6>{post.date_time}</h6>
                    </th>
                    <th></th>
                  </tr>
                </thead>
              </table>
            </CardTitle>
          </CardBody>
          <CardText>
          {post.text}
            </CardText>
          <img
            alt="Card cap"
            src={post.image}
            width="100%"
            height="70%"
          />
          <CardBody>
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
      <hr className="hr"></hr>
      </div>))}
      </div>


  </div>
  );
};
export default Postlist;
