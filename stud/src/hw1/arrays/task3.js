var numbers=[1, 14, 8, 4, -8, -45], min=numbers[0], minindex;
for(var i=0; i<numbers.length; i++){
    if(numbers[i]<min){
        min=numbers[i];
        minindex=i;
    }
}
console.log("index of min element of array = " + minindex);