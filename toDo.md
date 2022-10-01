
RULES:

    -NO .EVAL()
    -

[X]Userinterface
    [X]three input fields for user
        [X]num1
        [X]num2
        [X]Include Mathematical operations: +, -, /, *
    [X]submit button === '='
    [X]clear button 'c'
[X]Send user inputs to server via POST as an object, server runs the requested mathematical operation and updates state  post(/mathInfo)
    ex: {num1: 1,
        num2: 2,   
        operator: *
        }
    [X]send back the ok we did it
    [X]get the info back to client side, GET state /render

[X] Keep a history of all math operations and solutions on server - STATE render
    [X] Display history of calculations on DOM state render

[X]Have clear button clear calculator



-STRETCH-
[X]STYLE the page

[] Style to look like a calculator

[] Delete state using DELETE request

[] Click on a historical object and re-run that calculation