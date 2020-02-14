var i, result=0, count=0;
for(i=1;i<100;i++){
    if(i%2==0){
        result+=i;
        count++;
    }
}
console.log("Summ="+result);
console.log("There are "+count+" even numbers");