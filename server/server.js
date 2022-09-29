const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, () => {
    console.log('Its 🐢s all the way down in 3000');
})