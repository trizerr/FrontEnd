function minIndex(numbers) {
    if(numbers!=undefined) {
        let min = numbers[0], minindex;
        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] < min) {
                min = numbers[i];
                minindex = i;
            }
        }
        return minindex;
    }
    return "error";
}