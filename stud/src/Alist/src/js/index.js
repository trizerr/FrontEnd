

function Alist(array){
    this.defaultArray = array;
    this.init();
}
// let array = new Alist([1, 2, 3]);
// array.init();
//------------------------------------------------
Alist.prototype.clear = function () {
    this.init();
    return this.arr;
}

Alist.prototype.init = function () { // initialize
    this.arr = [];
    let index = 0;
    while(this.defaultArray[index]){
        this.arr[index] = this.defaultArray[index];
        index++;
    }
}
//-----------------------------------------------
Alist.prototype.size = function () { // size
    let index = 0;
    while (this.arr[index]){
        index++;
    }
    return index ;
}
//-----------------------------------------------
Alist.prototype.addStart = function (value) { //addStart
    let size = this.size();
    for(let i=size; i>=0; i--){
        this.arr[i] = this.arr[i-1];
    }
    this.arr[0] = value;
    return this.arr;
}
//-----------------------------------------------
Alist.prototype.addEnd = function (value) { // addEnd
    let size = this.size();
    this.arr[size] = value;
    return this.arr;
}
//-----------------------------------------------
Alist.prototype.delStart = function () { //delStart
    let size = this.size();
    let temp = [];
    for(let i=0; i<size-1; i++){
        temp[i] = this.arr[i+1];
    }
    this.arr = temp;
    return this.arr;
}
Alist.prototype.delEnd = function () { // delEnd
    let size = this.size();
    let temp = [];
    for(let i=0; i<size-1; i++){
        temp[i] = this.arr[i];
    }
    this.arr = temp;
    return this.arr;
}
Alist.prototype.delPos = function (position) {
    let size = this.size();
    let temp = [];
    for(let i=0; i<position; i++){
        temp[i] = this.arr[i];
    }
    for(let i=position; i<size-1; i++){
        temp[i] = this.arr[i+1];
    }
    this.arr = temp;
    return this.arr;
}
Alist.prototype.get = function (position) {
    return this.arr[position];
}
Alist.prototype.set = function (position, value) {
    this.arr[position] = value;
    return this.arr;
}
Alist.prototype.toString = function () {
    let size = this.size();
    let string="";
    for(let i = 0; i < size; i++){
        string += this.arr[i];
    }
    return string;
}
Alist.prototype.min = function () {
    min = this.arr[0];
    let size = this.size();
    for(let i = 0; i < size; i++){
        if(this.arr[i]<min) {
            min = this.arr[i];
        }
    }
    return min;
}
Alist.prototype.max = function () {
    max = this.arr[0];
    let size = this.size();
    for(let i = 0; i < size; i++){
        if(this.arr[i]>max) {
            max = this.arr[i];
        }
    }
    return max;
}
Alist.prototype.sort = function () {
    let numbers = this.arr;
    let size = this.size();
    for (var i = 0; i < size; i++) {//select
        var min = i;
        for (var j = i + 1; j < size; j++) {
            if (numbers[min] > numbers[j]) {
                min = j;
            }
        }
        if (i !== min) {
            var temp = numbers[i];
            numbers[i] = numbers[min];
            numbers[min] = temp;
        }
    }
    this.arr = numbers;
    return this.arr;
}
Alist.prototype.maxIndex = function () {
    max = this.arr[0];
    maxIndex = 0;
    let size = this.size();
    for(let i = 0; i < size; i++){
        if(this.arr[i]>max) {
            max = this.arr[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}
Alist.prototype.minIndex = function () {
    min = this.arr[0];
    minIndex = 0;
    let size = this.size();
    for(let i = 0; i < size; i++){
        if(this.arr[i]<min) {
            min = this.arr[i];
            minIndex = i;
        }
    }
    return minIndex;
}
Alist.prototype.reverse = function () {
    let length = this.size() - 1;
    let newnumbers = [];
    let numbers = this.arr;
    for (let i = 0; i < numbers.length; i++, length--) {
        newnumbers[i] = numbers[length];
    }
    this.arr = newnumbers;
    return this.arr;
}
Alist.prototype.halfReverse = function () {
    size = this.size();
    let first = [], second = [];
    if(size % 2 == 0){
        for(let i = 0; i < size/2; i++)
            first[i] = this.arr[i];
        for(let i = size/2, j = 0; i < size; i++, j++)
            second[j] = this.arr[i];
        first = first.reverse();
        second = second.reverse();
        for(let i = 0; i < size/2; i++)
            this.arr[i] = first[i];
        for(let i = size/2, j = 0; i < size; i++, j++)
            this.arr[i] = second[j];
    } else {
        half = this.arr[Math.trunc(size/2)]
        for(let i = 0; i < Math.trunc(size/2); i++)
            first[i] = this.arr[i];
        for(let i = Math.trunc(size/2)+1, j = 0; i < size; i++, j++)
            second[j] = this.arr[i];
        first = first.reverse();
        second = second.reverse();
        for(let i = 0; i < size/2; i++)
            this.arr[i] = first[i];
        this.arr[Math.trunc(size/2)] = half;
        for(let i = Math.trunc(size/2)+1, j = 0; i < size; i++, j++)
            this.arr[i] = second[j];
    }

    return this.arr;

}
module.exports={
Alist:Alist
}