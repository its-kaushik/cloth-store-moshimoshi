import { useEffect, useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './BlogList.scss';

const BlogList = () => {

    const [ blogsList, setBlogsList ] = useState([]);

    useEffect( () => {

        fetch('/blogs')
            .then( response => response.json() )
            .then( blogs => setBlogsList(blogs) );

    }, [] )

    return(
        <div className='blog-list'>
            {
                blogsList.map( (blog, i) => {
                    return <BlogCard blog={blog} key={i} />
                } )
            }
        </div>
    );
}

export default BlogList ;