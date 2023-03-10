import './BlogCard.scss';

const BlogCard = ({blog}) => {

    return (
        <div className="blog-card">
            <div className='blog-card-top'>
                <img src={blog.image} />
            </div>
            <div className='blog-card-body'>
                <div className='blog-date' >
                    {blog.dateAdded.substring(0, 10)}
                </div>
                <div className='blog-title'>
                    {blog.title}
                </div>
            </div>
        </div>
    );
}

export default BlogCard;