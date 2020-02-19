function arraySumUnEvenIndex(numbers) {
    if(numbers!=undefined && isNaN(numbers)) {
        let summ = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (i % 2 != 0) {
                summ += numbers[i];
            }
        }
        return summ;
    }
    return "error";
}