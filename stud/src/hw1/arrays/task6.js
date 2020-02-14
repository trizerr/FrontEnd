c, newnumbers=[], length=numbers.length;
for(var i=0; i<=numbers.length; i++, length--){
    newnumbers[i]=numbers[length];
}
for(var i=0; i<=numbers.length; i++){
    console.log(newnumbers[i]);
}
