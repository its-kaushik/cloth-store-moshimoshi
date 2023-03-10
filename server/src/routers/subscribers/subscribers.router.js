const express = require('express');
const { httpSubscribeEmail } = require('./subscribers.controller');

const subscribersRouter = express.Router() ;

subscribersRouter.post('/', httpSubscribeEmail);

module.exports = subscribersRouter ;