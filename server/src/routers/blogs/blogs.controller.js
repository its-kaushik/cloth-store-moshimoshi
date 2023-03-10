const { addNewBlog, getAllBlogs } = require("../../models/blogs.model");
const { getPagination } = require("../../utils/query");

async function httpAddNewBlog (req, res, next) {

    const blog = req.body ;

    if( !blog.title || !blog.author || !blog.image || !blog.content || !blog.image ){

        return res.status(400).json({
            message: 'Required Field Missing'
        });

    }

    blog.dateAdded = new Date() ;

    try {

        const addedBlog = await addNewBlog(blog) ;
        return res.status(201).json(addedBlog) ;

    } catch(error){

        next(error) ;

    }

}

async function httpGetAllBlogs (req, res, next) {

    const { skip, limit } = getPagination(req.query);

    try {

        const blogs = await getAllBlogs( skip, limit );
        return res.status(200).json(blogs);

    } catch (error){ 

        next(error) ;

    }

}

module.exports = {
    httpAddNewBlog,
    httpGetAllBlogs
}