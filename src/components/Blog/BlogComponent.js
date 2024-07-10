import React from "react";
import "./BlogComponent.css";
import blog1 from "../../images/blog.jpg";
import { Link } from "react-router-dom";

const BlogComponent = ({blog}) => {



  return (
    <div className="blog">
      <div className="blogImageContainer">
      <img src={blog1} alt="London" className="blogImage" />
      <h1>{blog.heading}</h1>
      </div>
      <div className="blogContent">
        <p className="blogParagraph">{blog.text}</p>
        <button className="blogReadBtn"><Link to={{pathname:`/blog/${blog.id}`}} style={{textDecoration:'none', color:"#283148"}}>Read more</Link></button>
      </div>
    </div>
  );
};

export default BlogComponent;
