const subscribersDatabase = require('./subscribers.mongo');

async function subscribeEmail (email) {

    const newEmail = new subscribersDatabase(email);

    try {

        const addedEmail = await newEmail.save();
        return addedEmail ;

    } catch(error) {

        console.log(`Couldnt Add the email : ${error}`);

    }

}

module.exports = {

    subscribeEmail,

}