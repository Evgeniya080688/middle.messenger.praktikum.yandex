const express = require('express');

const app = express();
const PORT = 3000;
const router = express.Router();

app.use(express.static('./build/'));

router.get('/autorization', function(req, res) {
    res.status(200).send('Hello, World!');
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});