
[]Userinterface
    []three input fields for user
        []num1
        []num2
        []Include Mathematical operations: +, -, /, *
    []submit button === '='
    []clear button 'c'
[]Send user inputs to server via POST as an object, server runs the requested mathematical operation and updates state  post(/mathInfo)
    ex: {num1: 1,
        num2: 2,   
        operator: *
        }
    []send back the ok we did it
    []get the info back to client side, GET state /render

[] Keep a history of all math operations and solutions on server - STATE render
    [] Display history of calculations on DOM] state render



-STRETCH-

[] Style to look like a calculator

[] Delete state using DELETE request

[] Click on a historical object and re-run that calculation