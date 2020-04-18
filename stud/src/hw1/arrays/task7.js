function unEvenCount(numbers) {
    let count = 0;
    if(numbers!=undefined ) {
        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 != 0)
                count++;
        }
        return count;
    }
    return "error";
}