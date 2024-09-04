let displayValue='';
let firstOperand=null;
let secondOperand=null;
let currentoperation=null;

function updateDisplay(){
    const display=document.getElementById('display');
    display.value=displayValue;
}

function appendNumber(number){
    displayValue +=number
    updateDisplay()
}

function setOperation(operation){
    if(currentoperation !== null) calculateResult()
        firstOperand = parseFloat(displayValue)
       currentoperation=operation;
       displayValue=''
}

function calculateResult(){
    if(currentoperation === null || displayValue ==='') return;
    secondOperand=parseFloat(displayValue)

    switch(currentoperation){
        case '+':
        displayValue=firstOperand + secondOperand
        break;

        case '-':
        displayValue=firstOperand - secondOperand
        break;

        case '*':
        displayValue=firstOperand * secondOperand
        break;

        case '/':
        displayValue=firstOperand / secondOperand
        break;
        
    }
    currentoperation=null;
    firstOperand=null;
    secondOperand=null;
    updateDisplay()
}
function clearDisplay(){
    currentoperation=null;
    firstOperand=null;
    secondOperand=null;
    displayValue='';
    updateDisplay()
}