function sumNumbers(n) {
    let  a, length, result = 0;
    if(n != NaN && n != undefined) {
        a = n.toString();
        length = n.toString().length;
        for (var i = 0; i < length; i++) {
            result += parseInt(a[i]);
        }
        return result;
    }
    return "error!";
}