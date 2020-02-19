function maxElement(numbers) {
    if(numbers!=undefined) {
        let max = numbers[0];
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
        return max;
    }
   return "error";
}