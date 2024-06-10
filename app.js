let currentNum = '';
let prevNum = '';
let currentOperator = '';
let result = '';
let isDot = true;

let equal = document.getElementById('equal');
equal.addEventListener('click', function(){
    calculate ()
})
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let displayPrev = document.querySelector('#display-prev');
let displayCurrent = document.querySelector('#display-current')
let dotBtn = document.querySelector('#dotBtn');
dotBtn.addEventListener('click', function(){
    if(isDot){
    addDot()}
});
let clearDisplayBtn = document.querySelector('#clearDisplay')
clearDisplayBtn.addEventListener('click', function(){
    clearDisplay()
});

displayCurrent.textContent = ' '
displayPrev.textContent = ' '
numbers.forEach((number) => number.addEventListener('click', function(e){
    handleNumber(e.target.textContent)
    
}));

operators.forEach((operator) => operator.addEventListener('click', function(e){
    handleOperator(e.target.textContent) 
    
}))

function clearDisplay(){
    console.log('clear display')
    currentNum = '';
    prevNum = '';
    displayCurrent.textContent = '';
    displayPrev.textContent = '';
    isDot = true;
}

function handleNumber(num) {
    currentNum += num
    displayCurrent.textContent = currentNum
    console.log(currentNum)
}

function handleOperator(op) {
    currentOperator = op
    prevNum = currentNum
    displayPrev.textContent = prevNum + " " + currentOperator
    currentNum = ''
    isDot = true;
   
}


function addDot(){
    currentNum += ".";
    isDot = false;
}
function calculate () {
    currentNum = Number(currentNum);
    prevNum = Number(prevNum);
    if(currentOperator === '+') {
        displayPrev.textContent = prevNum + " " + currentOperator + " " + currentNum + " ="
        currentNum += prevNum
        displayCurrent.textContent = currentNum
        console.log(currentNum)
    }else if(currentOperator === '-') {
        displayPrev.textContent = prevNum + " " + currentOperator + " " + currentNum + " ="
        currentNum = prevNum - currentNum
        displayCurrent.textContent = currentNum
        console.log(currentNum)
    }else if(currentOperator === '*') {
        displayPrev.textContent = prevNum + " " + currentOperator + " " + currentNum + " ="
        currentNum = currentNum * prevNum
        displayCurrent.textContent = currentNum
        console.log(currentNum)
    }else if(currentOperator === '/') {
        if( currentNum === 0){
        displayCurrent.textContent = `nie można dzielić przez 0 `
        
        }else{
        displayPrev.textContent = prevNum + " " + currentOperator + " " + currentNum + " ="
        currentNum = prevNum / currentNum
        displayCurrent.textContent = currentNum
        }

    }
}

