var a=13, count=0;
for(var i=0; i<=13; i++){
    if(a%i==0){
        count++;
    }
}
if(count==2)
    console.log("the number is simple");
else
    console.log("the number is not simple");