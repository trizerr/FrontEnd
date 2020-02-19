function minElement(numbers) {
    if(numbers!=undefined) {
        let min = numbers[0];
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < min) {
                min = numbers[i];
            }
        }
        return min;
    }
    return  "error";
}