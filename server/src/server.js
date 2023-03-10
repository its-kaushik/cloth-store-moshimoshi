const http = require('http');
const app = require('./app');

const { mongoConnect } = require('./utils/mongo');

const server = http.createServer(app);
const PORT = process.env.PORT || process.env.DEV_PORT;

async function createServer() {

    await mongoConnect();

    server.listen(PORT, () => {
        console.log(`Listing to PORT : ${PORT}`);
    });
}

createServer();
