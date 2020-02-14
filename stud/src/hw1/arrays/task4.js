var numbers=[1, 14, 8, 4, -8, -45], max=numbers[0], maxindex;
for(var i=0; i<numbers.length; i++){
    if(numbers[i]>max){
        max=numbers[i];
        maxindex=i;
    }
}
console.log("index of max element of array = " + maxindex);