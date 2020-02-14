var numbers=[2, 4, 7, 2, 1], summ=0;
for(var i=0;i<numbers.length;i++){
    if(i%2!=0){
        summ+=numbers[i];
    }
}
console.log(summ);