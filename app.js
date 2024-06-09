let currentNum = '';
let prevNum = '';
let currentOperator = '';
let result = '';

let equal = document.getElementById('equal');
equal.addEventListener('click', function(){
    calculate ()
})
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let displayPrev = document.querySelector('#display-prev');
let displayCurrent = document.querySelector('#display-current')
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
   
}


function addPoint(){
    currentNum += ".";
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
        displayPrev.textContent = prevNum + " " + currentOperator + " " + currentNum + " ="
        currentNum = currentNum / prevNum
        displayCurrent.textContent = currentNum
        console.log(currentNum)
    }
}

