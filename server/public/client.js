$(document).ready(onReady);


//STATE
let calculationState=[];
let calculationsLocal={
    operator: '',
};
let operator='';

function onReady(){
    console.log('in JQ and JS');
    getState();
    //click listener for operator (*, /, +, -);
    $('.operator').on('click', onOperatorChoice);
    //click listener for submit
    $('#calculator-inputs').on('submit', onSubmit);
    //click listener for clear
    $('#clear').on('click', onClearCalculator);
}
//on operator choice
function onOperatorChoice(evt){
    evt.preventDefault();
    console.log('in onOperatorChoice');
    //assign chosen operater to object property 'operator'
    calculationsLocal.operator= $(this).data('operator');
    console.log(calculationsLocal);
}

// onSubmit
function onSubmit(evt){
    evt.preventDefault();
    console.log('in onSubmit');

    // update calculationsLocal
    calculationsLocal.num1=$('#num1').val();
    calculationsLocal.num2=$('#num2').val();
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
    $('#num1').val('');
    $('#num2').val('');
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