
a=1452223394;
let number="", first=["zero","one","two","three","four","five","six","seven","eight","nine","ten"],second=["eleven","twelve","thirteen","fourteen","fifteen","seventeen","eighteen","nineteen"],third=["twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"];
let fourth=["hundred","thousand", "million"];
number=main(a);
function main(a){
    if(a>=0 && a<100)
        return zeroToHundred(a);
    if(a>=100 && a<999)
        return hundredToThousand(a);
    if(a>=1000 && a<1000000)
        return thousandToMillion(a);
    if(a>=1000000 && a<1000000000)
        return MillionToMiliard(a);
    if(a>=1000000000)
        return Billion(a);

}

function zeroToHundred(a){
if(a>=0 && a<=10){
    return first[a];
}
else if(a>10 && a<20){
    return second[a-11];
}
else if(a>=20 && a<100){
   let b=Math.trunc(a/10);
   let c=a-b*10;
   if(c==0){
       return third[b-2].toString();
   }else
   return third[b-2].toString()+" "+first[c];
}
}
function hundredToThousand(a){
        let b = Math.trunc(a / 100);
        a = a - b * 100;
        if (a == 0) {
            return first[b] + " hundred ";
        } else
            return first[b] + " hundred " + main(a);
}
function thousandToMillion(a){
        let b = Math.trunc(a / 1000);
        a = a - b * 1000;
        if(a==0){
            return main(b) + " thousand ";
        }else
            return main(b) + " thousand " + main(a);
}
function MillionToMiliard(a){
        let b = Math.trunc(a / 1000000);
        a = a - b * 1000000;
        if(a==0){
            return main(b) + " million ";
        }else
            return main(b) + " million " + main(a);
}
function Billion(a){
    let b = Math.trunc(a / 1000000000);
    a = a - b * 1000000000;
    if(a==0){
        return main(b) + " billion ";
    }else
        return main(b) + " billion " + main(a);
}
console.log(number);

