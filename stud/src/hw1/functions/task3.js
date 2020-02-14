let number=0, text;
text="five hundred ";
first=["zero","one","two","three","four","five","six","seven","eight","nine","ten"],second=["eleven","twelve","thirteen","fourteen","fifteen","seventeen","eighteen","nineteen"],third=["twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"];
let fourth=["hundred","thousand", "million"], hundred=[],temp=0;
let words=text.split(' ');
let wordsReverse=words.reverse();
main(wordsReverse);
function main(wordsReverse) {

for(let i=0;i<words.length;i++){
    for(j=0;j<3;j++) {
        if (wordsReverse[i] == fourth[j]){
            if(wordsReverse[i]=="hundred"){
                for(let t=0; t<wordsReverse.length-i-1;t++){
                    hundred[t]=wordsReverse[t+i+1];
                }
                temp=ToHundred(hundred);
                wordsReverse.splice(2,2);
                number+=temp*100+ToHundred(wordsReverse);
            }
        }
    }
}
}
function ToHundred(wordsReverse) {
    let result=0;
    for (let i = 0; i < wordsReverse.length; i++) {
        for (j = 0; j <= 10; j++) {
            if (wordsReverse[i] == first[j])
                result+=  j;
        }
        for (j = 0; j <= 7; j++) {
            if (wordsReverse[i] == second[j])
                result+=  (j + 11);
        }
        for (j = 0; j <= 7; j++) {
            if (wordsReverse[i] == third[j])
                result+=  ((j + 2) * 10);
        }
    }
    return result;
}
console.log(number);