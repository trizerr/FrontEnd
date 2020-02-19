function isSimple(a) {
    let count = 0;
    for (let i = 0; i <= 13; i++) {
        if (a % i == 0) {
            count++;
        }
    }
    if (count == 2)
        return "is simple";
    return "is not simple";
}
