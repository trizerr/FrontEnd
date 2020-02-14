var numbers=[2, 4, 7, 2, 1, 8, 7], count=0;
for(var i=0; i<numbers.length; i++){
    if(numbers[i]%2!=0)
        count++;
}
console.log(count);