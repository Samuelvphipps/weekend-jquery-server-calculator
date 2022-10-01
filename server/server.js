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
    console.log('in mathInfo POST');
    let splitNum=req.body.numInputs.split("-");
    //split num 1 === splitNum[0]   split num2 = splitNum[1]
    console.log('split numbers should be array',splitNum);
    let number1=Number(splitNum[0]);
    let number2=Number(splitNum[1]);
    console.log('split num1',number1)
    
    req.body.num1=number1;
    req.body.num2=number2;
    let results=calculateResult(number1, req.body.operator, number2);

    req.body.result=results;
    calculationState.unshift(req.body);
    console.log(calculationState);
    res.sendStatus('200');
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