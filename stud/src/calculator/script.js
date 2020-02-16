let numbers=[], operations=[], numbersIndex=0, operationsIndex=0;
let i=0, j=0, input, temp="", result=false;
input = document.getElementById("input");
preResult = document.getElementById("preResult");
let value = input.value;
document.getElementById("1").onclick = function(){
    input.value += 1;
    value = input.value;
    Result();
}
document.getElementById("2").onclick = function(){
    input.value += 2;
    value = input.value;
    Result();
}
document.getElementById("3").onclick = function(){
    input.value += 3;
    value = input.value;
    Result();
}
document.getElementById("4").onclick = function(){
    input.value += 4;
    value = input.value;
    Result();
}
document.getElementById("5").onclick = function(){
    input.value += 5;
    value = input.value;
    Result();
}
document.getElementById("6").onclick = function(){
    input.value += 6;
    value = input.value;
    Result();
}
document.getElementById("7").onclick = function(){
    input.value += 7;
    value = input.value;
    Result();
}
document.getElementById("0").onclick = function(){
    input.value += 0;
    value = input.value;
    Result();
}
document.getElementById("8").onclick = function(){
    input.value += 8;
    value = input.value;
    Result();
}
document.getElementById("9").onclick = function(){
    input.value += 9;
    value = input.value;
    Result();
}
document.getElementById("+").onclick = function(){
    input.value += "+";
    operations[i] = "+";
    i++;
    value = input.value;
    Result();
}
document.getElementById("-").onclick = function(){
    input.value += "-";
    i++;
    value = input.value;
    Result();
}
document.getElementById("*").onclick = function(){
    input.value += "*";
    operations[i] = "*";
    i++;
    value = input.value;
    Result();
}
document.getElementById("/").onclick = function(){
    input.value += "/";
    operations[i] = "/";
    i++;
    value = input.value;
    Result();
}
document.getElementById(".").onclick = function(){
    input.value += ".";
    value = input.value;
    Result();
}
document.getElementById("%").onclick = function(){
    input.value += "%";
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