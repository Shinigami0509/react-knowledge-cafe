import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from 'prop-types'
import PropTypes from "prop-types";


const Blogs = ({handleAddToBookmark, handleMarkedAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog=><Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookmark = {handleAddToBookmark}
                    handleMarkedAsRead={handleMarkedAsRead}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isR
}

export default Blogs;