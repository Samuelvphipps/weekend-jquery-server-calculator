const express = require('express');

const bodyParser = require('body-parser');

const app = express();

let calculationState=[];

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, () => {
    console.log('Its 🐢s all the way down in 3000');
});


app.post('/mathInfo', (req, res) => {
    console.log('in /mathInfo POST');
    let number1=Number(req.body.num1)
    let number2=Number(req.body.num2)
    let results=calculateResult(number1, req.body.operator, number2);
    req.body.result=results;
    calculationState.unshift(req.body);
    console.log(calculationState);
    res.sendStatus('201');
});

app.get('/mathInfo', (req,res) => {
    console.log('in /mathInfo GET');
    res.send(calculationState);
});

function calculateResult(num1, operator, num2){
    console.log('iin calculate results',calculationState);
    if (operator === '*'){
        return num1 * num2;
    }
    else if(operator === '/'){
        return num1 / num2;
    }
    else if(operator === '+'){
        return num1+num2;
    }
    else{
        return num1-num2;
    };
};