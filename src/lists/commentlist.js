import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import {

    PopoverBody,

  } from "reactstrap";

const Commentlist = (props) =>{
    return (
        <PopoverBody>
            <div>
            {props.post.comments.map((comments, key) => (<div className="containerco" key={comments._id}>
                  <table>
                    <thead>
                      <tr>
                        <img
                          className="person"
                          src={comments.image}
                          alt=""
                        />
                        <th>
                          {" "}
                          <h5>{comments.name}</h5> {comments.time}
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                  </table>
                  {comments.text}
                <hr></hr>
                </div>))}
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
                      <a href="..">
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
    )
}
export default Commentlist