function multiSum(a,b,c) {
    let result = 0;
    if (a * b * c > a + b + c)
        result = a * b * c + 3;
    else
        result = a + b + c + 3;
    return result;
}