const blogsDatabase = require('../models/blogs.mongo');

async function addNewBlog ( blog ) {

    const newBlog = new blogsDatabase(blog);

    try {

        const addedBlog = await newBlog.save();
        return addedBlog ;

    } catch( error ) {

        console.log(`Could not add the new blog : ${error}`);

    }

}

async function getAllBlogs ( skip, limit ) {

    try {

        const blogs = await blogsDatabase
            .find({}, {'__v': 0})
            .sort('-dateAdded')
            .skip(skip)
            .limit(limit);

        return blogs ;

    } catch (error) {

        console.log(`Couldn't fetch blogs : ${blogs}`);

    }

}

module.exports = {
    addNewBlog,
    getAllBlogs
}