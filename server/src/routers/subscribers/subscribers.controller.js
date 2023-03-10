const { subscribeEmail } = require('../../models/subsribers.model');

async function httpSubscribeEmail (req, res, next) {

    const email = req.body ;

    try {

        const subscribedEmail = await subscribeEmail(email);
        res.status(200).json({
            status: 'success',
            email: subscribedEmail.email
        });

    } catch (error) {

        next(error) ;

    }

}

module.exports = {
    httpSubscribeEmail,
}