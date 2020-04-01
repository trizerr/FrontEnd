function Node(data) {
    this.data = data;
    this.next = null;
}
function Llist(ar) {
    this.length = 0;
    this.head = null;
    this.array = ar;
    this.size();
    this.init();

}
Llist.prototype.size = function(){
    let i=0;
    while(this.array[i]){
        i++;
    }
    this.length = i;
    return i;
}

Llist.prototype.init = function() {
    length = this.length;
    for(let i = 0; i < length; i++){
     this.addEnd(this.array[i]);
    }
    this.length -=length;
}
Llist.prototype.addEnd = function(value) {
    let node = new Node(value);
    let currentNode = this.head;
    if (this.head == null){
        this.head = node;
        this.length++;
        return this.head.data;
    }else{
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }
    this.length++;
    return currentNode.next.data;
};

Llist.prototype.addStart = function(value) {
    let node = new Node(value);
    let currentNode = node;
    if(this.head == null){
        this.head = node;
    }else{
        currentNode.next = this.head;
        this.head = currentNode;
    }
    this.length++;
    return this.head.data;
};
Llist.prototype.delStart = function() {
    if(this.head.next) {
        this.head = this.head.next;
        this.length--;
        return this.head.data;
    }else {
        this.head = null;
        this.length--;
        return this.head;
    }
}
Llist.prototype.delEnd = function() {
    let currentNode = this.head;
    let previousNode = this.head;
    if(this.head == null) {
        return null;
    } else {
            while(currentNode.next){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        this.length--;
        return previousNode.data;
    }
}
Llist.prototype.delPos = function(index){
    let currentNode = this.head;
    let previousNode = this.head;
    for(let i = 0; i < index; i++){
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
    if(currentNode.next){
        if(previousNode!=currentNode) {
            previousNode.next = currentNode.next;
            currentNode = null;
        }else{
            currentNode = currentNode.next;
            this.head = currentNode;
        }
    }else{
        previousNode.next = null;
    }
    length--;
    return this.toArray();

}
Llist.prototype.get = function(index) {
    let currentNode = this.head;
    for(let i = 0; i < index; i++){
        currentNode = currentNode.next;
    }
    return currentNode.data;
}
Llist.prototype.set = function(index, value) {
    let currentNode = this.head;
    for(let i = 0; i < index; i++){
        currentNode = currentNode.next;
    }
    currentNode.data = value;
    return currentNode.data;
}
Llist.prototype.toString = function() {
    let currentNode = this.head;
    let string = "";
    for(let i = 0; i < this.length; i++){
       string = string + currentNode.data;
       currentNode = currentNode.next;
    }
    return string;
}
Llist.prototype.min = function() {
    let currentNode = this.head;
    let min = this.head.data;
    let size = this.length;
    for(let i = 0; i < size; i++){
        if(currentNode.data<min) {
            min = currentNode.data;
        }
        currentNode = currentNode.next;
    }
    return min;
}
Llist.prototype.max = function() {
    let currentNode = this.head;
    let max = this.head.data;
    let size = this.length;
    for(let i = 0; i < size; i++){
        if(currentNode.data > max) {
            max = currentNode.data;
        }
        currentNode = currentNode.next;
    }
    return max;
}
Llist.prototype.toArray = function(){
    let currentNode = this.head;
    let arr=[], i=0;
    while(currentNode){
        arr[i] = currentNode.data;
        i++;
        currentNode = currentNode.next;
    }
    return arr;
}


Llist.prototype.sort = function() {
    let currentNode = this.head;
    let temp;
    for(let j = 0; j < this.length-1; j++) {
        currentNode = this.head;
        for (let i = 0; i < this.length-1; i++) {
                if (currentNode.data > currentNode.next.data) {
                    temp = currentNode.next.data;
                    currentNode.next.data = currentNode.data;
                    currentNode.data = temp;
                }
                currentNode = currentNode.next;
        }
    }
    return this.toArray();
}
Llist.prototype.maxIndex = function() {
    let currentNode = this.head;
    let max = this.head.data;
    let index=1;
    let size = this.length;
    for(let i = 0; i < size; i++){
        if(currentNode.data > max) {
            max = currentNode.data;
            index=i;
        }
        currentNode = currentNode.next;
    }
    return index;
}
Llist.prototype.minIndex = function() {
    let currentNode = this.head;
    let min = this.head.data;
    let size = this.length;
    let index=1;
    for(let i = 0; i < size; i++){
        if(currentNode.data<min) {
            min = currentNode.data;
            index=i;
        }
        currentNode = currentNode.next;
    }
    return index;
}
Llist.prototype.reverse = function() {
    let tail = null;
    let head = this.head;
    let currentNode = head;
    let arr = [this.length];
    for(let i = this.length-1; i >=0; i--){
        arr[i] = currentNode.data;
        currentNode = currentNode.next;
    }
    currentNode = head;
    for( let i = 0; i < this.length; i++){
        currentNode.data = arr[i];
        currentNode = currentNode.next;
    }
    return this.toArray();
}
Llist.prototype.halfReverse = function() {
    let tail = null;
    let head = this.head;
    let currentNode = head;
    let arr = this.toArray();
    let newArr = [this.length];
    if(this.length % 2 == 0){
        for(let i = this.length/2, j=0;i<=this.length;i++, j++){
            newArr[j] = arr[i];
        }
        for(let j = this.length/2, i=0;i<=this.length/2;i++, j++){
            newArr[j] = arr[i];
        }
    } else {
        for(let i = Math.trunc(this.length/2)+1, j=0;i<=this.length;i++, j++){
            newArr[j] = arr[i];
        }
        newArr[Math.trunc(this.length/2)] = arr[Math.trunc(this.length/2)]
        for(let j = Math.trunc(this.length/2)+1, i=0;i<=Math.trunc(this.length/2)+1;i++, j++){
            newArr[j] = arr[i];
        }
    }
    for( let i = 0; i < this.length; i++){
        currentNode.data = newArr[i];
        currentNode = currentNode.next;
    }
    return this.toArray();
}
delpos = new Llist([1,5])
console.log(delpos.delPos());
module.exports.Llist = Llist;

