function arraySwitchHalf(numbers) {
    let firsthalf = [], secondhalf = [], newnumbers = [];
    if (numbers.length % 2 == 0) {
        for (let i = numbers.length / 2, j = 0; i < numbers.length; i++, j++) {
            newnumbers[j] = numbers[i];
        }
        for (let i = 0, j = numbers.length / 2; i < numbers.length / 2; i++, j++) {
            newnumbers[j] = numbers[i];
        }
    } else {
        for (let i = Math.trunc(numbers.length / 2) + 1, j = 0; i < numbers.length; i++, j++) {
            newnumbers[j] = numbers[i];
        }
        newnumbers[Math.trunc(numbers.length / 2)] = numbers[Math.trunc(numbers.length / 2)];
        for (let i = 0, j = Math.trunc(numbers.length / 2) + 1; i < numbers.length / 2; i++, j++) {
            newnumbers[j] = numbers[i];
        }
    }

        return newnumbers;

}
