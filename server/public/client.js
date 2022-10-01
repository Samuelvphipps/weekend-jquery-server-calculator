$(document).ready(onReady);


//STATE
let calculationState=[];
let calculationsLocal={};
let operator='';

function onReady(){
    console.log('in JQ and JS');
    getState();
    //click listener for operator (*, /, +, -);
    $('.operator').on('click', onOperatorChoice);
    //click listener for submit
    $('#calculator-inputs').on('submit', onSubmit)
    //click listener for clear
    $('#clear').on('click', onClearCalculator)
}
//on operator choice
function onOperatorChoice(evt){
    evt.preventDefault();
    console.log('in onOperatorChoice');
    //assign chosen operater to object property 'operator'
    calculations.operator= $(this).data('operator');
    console.log(calculations)
}

// onSubmit
function onSubmit(evt){
    evt.preventDefault();
    console.log('in onSubmit');
}


//onClear
function onClearCalculator(evt){
    evt.preventDefault();
    console.log('in onClearCalculator')
}

function getState(){
    console.log('in getState');
    
    // ajax GET
    $.ajax({
        url: '/mathInfo',
        method: 'GET'
    })
        .then( (response)=> {
            console.log('in /mathInfo get');
            calculationState=response;
            render();
        })
        .catch(err => {
            console.log('in /mathInfo get error', err);
        })

}

function render(){
    console.log('in Render');
    $('#historic-calculations').empty();
    //for loop to append to DOM
    for(let result of calculationState){
        $('#historic-calculations').append(`
        <li>${result.num1} ${result.operator} ${result.num2} = ${result.result} </li> 
        `);
    }   
        //undefined, convert to number
    // $('#result').empty();
    // $('#result').append(`
    //     <h2>${calculationState[calculationState.length -1]}.result
    // `);
}


//stretch

//regex?


/*
global variable, append each button and rerender
on submit, post to server
get to client*/