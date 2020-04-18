function SumEven() {
    let i, result = 0, count = 0;
    for (i = 1; i < 100; i++) {
        if (i % 2 == 0) {
            result += i;
            count++;
        }
    }
    return [count,result];
}
console.log(SumEven());