var a=123, b, length, newnumber="";
b=a.toString();
length=a.toString().length;
for(var i=length-1;i>=0;i--){
   newnumber+= b[i];
}
console.log(newnumber);