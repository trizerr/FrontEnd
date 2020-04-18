function sqrt(b) {
    let i = 1;
    do {
        i++;
    } while (Math.sqrt(b) - i >= 1);
    if(b != NaN && b != undefined)
        return i;
    return "error";

}
