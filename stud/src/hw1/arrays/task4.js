function maxIndex(numbers) {
    if(numbers!=undefined) {
        let max = numbers[0], maxindex;
        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
                maxindex = i;
            }
        }
        return maxindex;
    }
    return "error";
}