var numbers=[1, 4, 3, 1, 8];
for (var j=0; j<numbers.length; j++) {//bubble
    for (var i=0; i<numbers.length; i++) {
        if (numbers[i] > numbers[i + 1]) {
            var temp = numbers[i];
            numbers[i] = numbers[i + 1];
            numbers[i + 1] = temp;
        }
    }
}
for (var i=0; i<numbers.length; i++) {//select
    var min = i;
    for (var j=i+1; j<numbers.length; j++) {
        if (numbers[min] > numbers[j]) {
            min=j;
        }
    }
    if (i!==min) {
        var temp=numbers[i];
        numbers[i]=numbers[min];
        numbers[min]=temp;
    }
}
for(var i=0; i<numbers.length; i++)
    console.log(numbers[i]);