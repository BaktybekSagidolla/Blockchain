const express = require('express');
const PORT = process.env.PORT || 5080;
const router = require('../src/routes/index');

const app = express();

app.use(express.json());

app.use('/api', router);

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT} `));
    } catch (e) {
        console.log(e);
    }
}

start();