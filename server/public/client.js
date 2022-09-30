$(document).ready(onReady);


//STATE
let calculations={};
let operator='';

function onReady(){
    console.log('in JQ and JS');
    //click listener for operator (*, /, +, -);
    $('.operator').on('click', onOperatorChoice);
    //click listener for submit
    $('#equals').on('click', onSubmit)
    //click listener for clear
    $('#clear').on('click', onClearCalculator)
}
//on operator choice
function onOperatorChoice(evt){
    evt.preventDefault();
    console.log('in onOperatorChoice');
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

function render(){

}


//stretch

/*
global variable, append each button and rerender
on submit, post to server
get to client

*/