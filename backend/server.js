require('dotenv').config();

require('./db');
const app = require('./app');

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`Running on ${port}`);
});