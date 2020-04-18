function arrayReverse(numbers) {
    if(numbers!=undefined ) {
        let  length = numbers.length-1;
        let newnumbers=[];
        for (let i = 0; i < numbers.length; i++, length--) {
            newnumbers[i] = numbers[length];
        }
            return newnumbers;
    }
    return "error";
}

