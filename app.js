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

numbers.forEach((number) => number.addEventListener('click', function(e){
    handleNumber(e.target.textContent)
    
}));

operators.forEach((operator) => operator.addEventListener('click', function(e){
    handleOperator(e.target.textContent) 
    
}))

function handleNumber(num) {
    currentNum += num
    console.log(currentNum)
}

function handleOperator(op) {
    currentOperator = op
    prevNum = currentNum
    currentNum = ''
   
}
function calculate () {
    currentNum = Number(currentNum);
    prevNum = Number(prevNum);
    if(currentOperator === '+') {
        currentNum += prevNum
        console.log(currentNum)
    }else if(currentOperator === '-') {
        currentNum = prevNum - currentNum
        console.log(currentNum)
    }else if(currentOperator === '*') {
        currentNum = currentNum * prevNum
        console.log(currentNum)
    }else if(currentOperator === '/') {
        currentNum = currentNum / prevNum
        console.log(currentNum)
    }
}

