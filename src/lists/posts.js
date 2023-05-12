import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../component/Student.css";
import axios from "../api/axios";

const Postlist = () => {
  const [getPosts, setPosts] = React.useState([]);

  useEffect(() => {
    axios
      .get("posts/view_all_post")
      .then(async (res) => {
        setPosts(res.data.respone);
      })
      .catch((error) => console.log(error));
  }, []);

  return <div></div>;
};
export default Postlist;
