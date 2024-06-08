let num1;
let num2;
let operator;
const operators = ["/", "*", "-", "+"];
let result;
const calcInputs = document.querySelector('#calc-inputs');
calcInputs.addEventListener('click', function(e) {
    if(num1 !== ''){
        num1 = e.target.id;
    } else if(num2 !== ''){
        num2 = e.target.id;
    }
   
    console.log(num1);

    console.log(num2);
})



function operate (num1, operators, num2) {
    if (operators === "+") {
        add(num1, num2)
    } else if (operators === "-"){
        subtract(num1, num2)
    } else if (operators === "*") {
        multiply(num1, num2)
    } else if (operators === "/") {
        divide(num1, num2)
    }
};
function add(num1, num2){
    console.log(num1 + num2)
return num1 + num2;
}
function subtract(num1, num2){
    console.log(num1 - num2)
    return num1 - num2;
}
function multiply(num1, num2){
    console.log(num1 * num2)
    return num1 * num2;
}
function divide(num1, num2){
    console.log(num1 / num2)
    return num1 / num2;
}

operate()