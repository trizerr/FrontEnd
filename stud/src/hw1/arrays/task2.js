var numbers=[1, 14, 8, 4, -8, -45], max=numbers[0];
for(var i=0; i<numbers.length; i++){
    if(numbers[i]>max){
        max=numbers[i];
    }
}
console.log("max element of array = " + max);