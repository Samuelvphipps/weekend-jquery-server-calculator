$(document).ready(onReady);


//STATE
let calculationState=[];
//starts with empty operator so user can be alerted if no operator is chosen
let calculationsLocal={
    numInputs: '',
    operator: '',
};
let displayNumber=''

function onReady(){
    console.log('in JQ and JS');
    getState();
    //click listener for operator (*, /, +, -);
    $('.operator').on('click', onOperatorChoice);
    $('.number').on('click', onAddNumber)
    //click listener for submit
    $('#calculator-inputs').on('submit', onSubmit);
    //click listener for clear
    $('#clear').on('click', onClearCalculator);
}
//on operator choice
function onOperatorChoice(evt){
    evt.preventDefault();
    let chosenOperator=$(this).data('operator')
    console.log('in onOperatorChoice');

    //assign chosen operater to object property 'operator'
    calculationsLocal.operator = chosenOperator;

    //assign a - to chosen numbers for future split
    calculationsLocal.numInputs += '-';

    //change display number so display adds new value
    displayNumber+=chosenOperator;
    $('#display').val(`${displayNumber}`);
    // console.log(calculationsLocal);
}

function onAddNumber(evt){
    evt.preventDefault();
    //id chosen number
    let chosenNumber=$(this).data('number');
    //assign numberto chosen numbers for future split
   
    let stringNumber=chosenNumber.toString();
    calculationsLocal.numInputs += chosenNumber;
    //change display number
    displayNumber+=stringNumber;
    console.log('displayNumber', stringNumber);
    $('#display').val(`${displayNumber}`);
    
    console.log('chosenNumber', chosenNumber);

}
// onSubmit
function onSubmit(evt){
    evt.preventDefault();
    console.log('in onSubmit');

    // update calculationsLocal
    calculationsLocal.num1=$('#num1').val();
    calculationsLocal.num2=$('#num2').val();
    //alert if no operator chosen
    if(calculationsLocal.operator===''){
        alert('must choose operator');
        return;
    };

    //POST to server

    $.ajax({
        url: '/mathInfo',
        method: 'POST',
        data: calculationsLocal
    })
        .then((response) => {
            if(response){getState()};
        })
        .catch(err=>{
            console.log('in /mathInfo POST error', err);
        });
        
    //getState/render

}


//onClear
function onClearCalculator(evt){
    evt.preventDefault();
    //empty input fields
    $('#num1').val('');
    $('#num2').val('');
    //empty operator choice so that alert runs on next calculation
    calculationsLocal.operator='';
    console.log('in onClearCalculator')
}
//get state with render inside
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

};
//render after GET state
function render(){
    console.log('in Render');
    $('#historic-calculations').empty();
    //for loop to append to DOM
    for(let results of calculationState){
        $('#historic-calculations').append(`
        <li class="list-group-item list-group-item-action w-auto">${results.num1} ${results.operator} ${results.num2} = ${results.result} </li> 
        `);
    }   
        //undefined, convert to number
    $('#result').empty();
    //if empty array start with result: empty
    if(calculationState.length!=0){
        $('#result').append(`
            <h2> RESULT: ${calculationState[0].result}</h2>
        `);}
        else{
            $('#result').append(`
            <h2> RESULT:</h2>
        `);
        }
};


//stretch

//regex?


/*
global variable, append each button and rerender
on submit, post to server
get to client*/