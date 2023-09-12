import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Blog from './Blog';

function Blogs({bookmarkHandeler,readingTimeHandeler}) {
    const [blogs,setBlogs] = useState([])

    useEffect(() => {
        fetch('../../public/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    })


    return (
        <div className='w-2/3'>
            {
                blogs.map((blog,idx) =><Blog 
                key={idx} 
                blog={blog}
                bookmarkHandeler={bookmarkHandeler}
                readingTimeHandeler={readingTimeHandeler}
                 ></Blog>)
            }
        </div>
    );
}

Blogs.propTypes = {
    bookmarkHandeler:PropTypes.func,
    readingTimeHandeler:PropTypes.func
};
export default Blogs;