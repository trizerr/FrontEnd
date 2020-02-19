let numbers=[], operations=[], numbersIndex=0, operationsIndex=0;
let i=0, j=0, input, temp="", result=false;
input = document.getElementById("input");
preResult = document.getElementById("preResult");
let value = input.value;
let name;

const buttons = document.querySelectorAll(".number")
for (const button of buttons) {
    button.addEventListener('click', function(event) {
        input.value += button.innerHTML;
        value = input.value;
        Result();
    })
}
const operationss = document.querySelectorAll(".operation")
for (const operation of operationss) {
    operation.addEventListener('click', function(event) {
        input.value += operation.innerHTML;
        operations[i] = operation.innerHTML;
        i++;
        value = input.value;
        Result();
    })
}
document.getElementById("backspace").onclick = function() {
    value = input.value;
    input.value=value.substring(0,value.length-1);
    value = input.value;
    Result();
}

document.getElementById("AC").onclick = function(){
    input.value = "";
    i=0;
    numbers=[];
    operations=[];
    value = input.value;
    Result();
}
document.getElementById("=").onclick = function(){
    value = input.value;
    result=true;
    Result();
}
function Result(){
    getValue(value);
    preResult.innerText = calc(numbers, operations);
    if(result) {
        input.value = preResult.innerText;
        preResult.innerText = "0";
    }
    result = false;
    i=0;
    numbersIndex=0;
    operationsIndex=0;
}

function getValue(value){
    numbers[numbersIndex]="";
    for(let i = 0; i < value.length; i++){
        if(value[i]=="+" || value[i]=="-" || value[i]=="/" || value[i]=="*" || value[i]=="%"){
            operations[operationsIndex] = value[i];
            operationsIndex++;
            numbersIndex++;
            numbers[numbersIndex] = "";
        } else{
            numbers[numbersIndex] += value[i];
        }
    }
}
function sum(a, b){
    return a+b;
}
function division(a, b){
    return a/b;
}
function multiplication(a, b){
    return a*b;
}
function substruction(a, b){
    return a-b;
}
function remainder(a, b){
    return a%b;
}
function calc(numbers, operations){
    numbers=numbers.map(Number);
    for(let i = 0; i <= numbers.length; i++) {
            if (operations[i] == "*") {
                numbers[i] = multiplication(numbers[i], numbers[i + 1]);
                numbers.splice(i+1, 1);
                operations.splice(i, 1);
                i--;
            }
            if (operations[i] == "/") {
                numbers[i] = division(numbers[i], numbers[i + 1]);
                numbers.splice(i+1, 1);
                operations.splice(i, 1);
                i--;
            }
    }
    for(let i = 0; i < numbers.length; i++) {
            if (operations[i] == "+") {

                numbers[i] = sum(numbers[i], numbers[i + 1]);
                numbers.splice(i+1, 1);
                operations.splice(i, 1);
                i--;

            }
            if (operations[i] == "-") {
                numbers[i] = substruction(numbers[i], numbers[i + 1]);
                numbers.splice(i+1, 1);
                operations.splice(i, 1);
                i--;
            }
            if (operations[i] == "%") {
              numbers[i] = remainder(numbers[i], numbers[i + 1]);
              numbers.splice(i+1, 1);
              operations.splice(i, 1);
              i--;
            }
    }
    let result=numbers[0];
    return result;
}