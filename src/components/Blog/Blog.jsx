import React, {useState, useEffect, useRef} from 'react';
import "./Blog.css";
import BlogComponent from './BlogComponent';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const Blog = () => {

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const nextHandler = () => {
    let blogs = document.getElementById(
      "blogs"
    );
    blogs.style.scrollBehavior = "smooth";

    let childWidth = blogs.scrollWidth / blogs.childElementCount;
    let scrolledWidth = blogs.scrollLeft + blogs.clientWidth;
    if (scrolledWidth >= blogs.scrollWidth) {
      blogs.scrollLeft = 0;
    } else {
      blogs.scrollLeft += childWidth;
    }
    };

  const backHandler = () => {
    let blogs = document.getElementById(
      "blogs"
    );
    blogs.style.scrollBehavior = "smooth";
    let childWidth = blogs.scrollWidth / blogs.childElementCount;
    let scrolledWidth = blogs.scrollLeft + blogs.clientWidth;
    if (scrolledWidth >= blogs.scrollWidth) {
      blogs.scrollLeft = 0;
    } else {
      blogs.scrollLeft -= childWidth;
    }
  };


  const blogs = [
    {
      id:"507f1f77bcf86cd799439000",
      heading: "Study Abroad Opportunities for Pakistani Students",
      text: "Thinking about studying abroad? It's an exciting prospect that opens doors to new cultures, experiences, and career opportunities. For Pakistani students...",
    },
    {
      id:"507f1f77bcf86cd799439001",
      heading: "Career Paths in Emerging Industries",
      text: "In today's rapidly evolving world, certain industries are not just growing—they're shaping the future. For Pakistani professionals looking to build a successful..."
    },
    {
      id:"507f1f77bcf86cd799439002",
      heading: "Turkish VISA procedure, fee structure, Requirments",
      text: "Are you preparing to travel to Turkey and in need of essential information? Look no further! In this comprehensive guide, we will break down some key pointers you..."
    },
    {
      id:"507f1f77bcf86cd799439003",
      heading: "Remote Work and Freelancing Opportunities",
      text: "The world of work is evolving, and remote opportunities are at the forefront of this transformation. For Pakistani professionals seeking flexibility and...",
    },
    {
      id:"507f1f77bcf86cd799439004",
      heading: "Language Learning and Skill Development",
      text: "In today's interconnected world, language skills and specialized expertise are more valuable than ever. For Pakistani individuals keen on advancing their careers or exploring..."
    },
    {
      id:"507f1f77bcf86cd799439005",
      heading: "Career Advancement Strategies for Pakistani Professionals",
      text: "Achieving career success requires more than just hard work—it requires strategic planning and continuous learning. For Pakistani professionals navigating today's...",
    },

  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="blogsSection">
      
        
        <h1 className="blogHeading">BLOGS</h1>
        <div className='blogContainerFlex'>
        <button className="leftBlogArrow" onClick={backHandler}>
          <KeyboardArrowLeftIcon className="icon" />
        </button>
        <div id='blogs' className={`blogs ${isVisible ? "visible" : ""}`} ref={sectionRef}>
          {blogs && blogs.map((blog) => <BlogComponent key={blog.id} blog={blog}/>)}
        </div>
        <button className="rightBlogArrow" onClick={nextHandler}>
          <KeyboardArrowRightIcon className="icon" />
        </button>
        </div>
      </div>
  )
}

export default Blog;