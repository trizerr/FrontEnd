var n=4453, a, length,result=0;
a=n.toString();
length=n.toString().length;
for(var i=0;i<length;i++){
    result+=parseInt(a[i]);
}
console.log(result);