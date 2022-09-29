const express = require('express');

const bodyParser = require('body-parser');

const app = express();

let calculationState=[{
    num1:1,
    num2:2,
    operator: '*',
    result: 2
}]

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, () => {
    console.log('Its 🐢s all the way down in 3000');
})


app.post('/mathInfo', (req, res) => {
    console.log('in /mathInfo POST');
    res.send('201');
})

app.get('/mathInfo', (req,res) => {
    console.log('in /mathInfo GET');
    res.send(calculationState);
})