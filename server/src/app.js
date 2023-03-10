const express = require('express');
const dotenv = require('dotenv');
const productsRouter = require('./routers/products/products.routers');
const blogsRouter = require('./routers/blogs/blogs.router');
const subscribersRouter = require('./routers/subscribers/subscribers.router');

const app = express();
dotenv.config();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/blogs', blogsRouter);
app.use('/subscribers', subscribersRouter);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

module.exports = app ;