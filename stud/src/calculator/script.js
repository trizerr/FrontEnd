let number1 = 0, number2, input, operationCheck = false, operation, result, dotCheck = false;
input = document.getElementById("input");

const buttons = document.querySelectorAll(".number");
for (const button of buttons) {
    button.addEventListener('click', function(event) {
        if(operationCheck == true) {
            if(button.innerHTML == "."){
                if(dotCheck == false){
                    operation = input.value;
                    input.value = "";
                    input.value += button.innerHTML;
                    operationCheck = false;
                    dotCheck = true;
                }
            }
            operation = input.value;

            input.value = "";
            input.value += button.innerHTML;
            operationCheck = false;
        }
        else {
            if(button.innerHTML != ".")
            input.value += button.innerHTML;
            else
            {
                if(dotCheck == false) {
                    input.value += button.innerHTML;
                    dotCheck = true;
                }
            }
        }
    })
}

const operationss = document.querySelectorAll(".operation")
for (const operation of operationss) {
    operation.addEventListener('click', function(event) {
        if(number1==0) {
            operationCheck = true;
            number1 = parseFloat(input.value);
            input.value = operation.innerHTML;
            dotCheck = false;
        }
        })
    }


document.getElementById("AC").onclick = function(){
  number1 = 0;
  number2 = 0;
  operation = 0;
  input.value = "";
  dotCheck = false;
}

document.getElementById("=").onclick = function(){
    number2 = parseInt(input.value);
    input.value = calc(number1, number2, operation);
    number1 = 0;
    number2 = 0;
    operation = 0;
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

function calc(number1, number2, operation){
     if(operation == "+"){
         result = sum(number1, number2);
     }
     if(operation == "/"){
         result = division(number1, number2);
     }
     if(operation == "-"){
         result = substruction(number1, number2);
     }
     if(operation == "*"){
         result = multiplication(number1, number2);
     }
     return result;
}