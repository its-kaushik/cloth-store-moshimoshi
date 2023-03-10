const express = require('express');
const { httpAddNewBlog, httpGetAllBlogs } = require('./blogs.controller');

const blogsRouter = express.Router();

blogsRouter.post('/', httpAddNewBlog);
blogsRouter.get('/', httpGetAllBlogs);

module.exports = blogsRouter;