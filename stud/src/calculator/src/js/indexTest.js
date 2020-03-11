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



module.exports={
    calc:calc,
    sum:sum,
    division:division,
    substruction:substruction,
    multiplication:multiplication
}