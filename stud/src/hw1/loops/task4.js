function factorial(n) {
    if(n != NaN && n != undefined) {
        let i = 1, result = 1;
        while (i != n + 1) {
            result *= i;
            i++;
        }
        return result;
    }
    return "error";
}