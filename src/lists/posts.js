import React, {  useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../component/Student.css";
import axios from "../api/axios";


const Postlist=()=>{

const [ getPosts, setPosts] = React.useState([])

useEffect(() => {
  axios.get("posts/view_all_post")
    .then(async (res)=>{
      setPosts(res.data.respone)
    })
    .catch(error => console.log(error))

}, [])

return(
    <div>

    
      <div>
      {getPosts.map((post, key) => (<div className='totalHome' key={post._id}>
      <div className="a3lan">
        <img
          className="photo"
          src={post.image}
          alt="advertisement"
        />
        <p className="p1">
          Published on <span class="date">{post.date}</span> by{" "}
          <span class="author">{post.management_id}</span>{" "}
          <span class="ad-number">{post.date_time}</span>
        </p>
      </div>
      <hr className="hr"></hr>
      </div>))}
      </div>
      
    
  </div>
)
}
export default Postlist