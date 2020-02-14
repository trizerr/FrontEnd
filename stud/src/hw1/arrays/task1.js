var numbers=[1, 14, 8, 4, -8, -45], min=numbers[0];
for(var i=0; i<numbers.length; i++){
    if(numbers[i]<min){
        min=numbers[i];
    }
}
console.log("min element of array = " + min);