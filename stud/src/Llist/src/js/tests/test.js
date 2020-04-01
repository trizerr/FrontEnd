
const { Llist } = require('../llist');

describe("addStart", function(){
    let addStart = new Llist([1, 2, 3]);
    it("addStart 4 at start of 1,2,3", function(){
        assert.deepEqual(addStart.addStart(4),4);
    });
    it("addStart -8 at start of 1,2,3", function(){
        let addStart = new Llist([1, 2, 3]);
        assert.deepEqual(addStart.addStart(-8),-8);
    });
});

describe("addEnd", function(){
    let addEnd = new Llist([1, 2, 3]);
    it("addEnd 4 at end of 1,2,3", function(){
        assert.deepEqual(addEnd.addEnd(4),4);
    });
    it("addEnd -8 at end of 1,2,3", function(){
        let addEnd = new Llist([1, 2, 3]);
        assert.deepEqual(addEnd.addEnd(-8),-8);
    });
});
describe("delStart", function(){
    let delStart = new Llist([1, 2, 3]);
    it("delStart of 1,2,3", function(){
        assert.deepEqual(delStart.delStart(),2);
    });
    it("delStart of 5,4", function(){
        delStart = new Llist([5,4]);
        assert.deepEqual(delStart.delStart(),4);
    });
    it("delStart of 3", function(){
        delStart = new Llist([3]);
        assert.deepEqual(delStart.delStart(),null);
    });
});
describe("delEnd", function(){
    let delEnd = new Llist([1, 2, 3]);
    it("delEnd of 1,2,3", function(){
        assert.deepEqual(delEnd.delEnd(),2);
    });
    it("delEnd of 5,4", function(){
        delEnd = new Llist([5,4]);
        assert.deepEqual(delEnd.delEnd(),5);
    });
});
describe("delPosition", function(){
    let delPos = new Llist([1, 2, 3]);
    it("delPosition 1 of 1,2,3", function(){
        assert.deepEqual(delPos.delPos(1),[1,3]);
    });
    it("delPosition 2 of 1,2,3", function(){
        delPos = new Llist([1, 2, 3]);
        assert.deepEqual(delPos.delPos(2),[1,2]);
    });
    it("delPosition 0 of 1,2", function(){
        delPos = new Llist([1, 2]);
        assert.deepEqual(delPos.delPos(0),[2]);
    });
});
describe("get", function(){
    let get = new Llist([1, 2, 3]);
    it("get 1 of 1,2,3", function(){
        assert.deepEqual(get.get(1),2);
    });
    it("get 2 of 1,2,3", function(){
       get = new Llist([1, 2, 3]);
        assert.deepEqual(get.get(2),3);
    });
});
describe("set", function(){
    let set = new Llist([1, 2, 3]);
    it("set 1 to '5' of 1,2,3", function(){
        assert.deepEqual(set.set(1,5),5);
    });
    it("set 0 to '7' of 1,2,3", function(){
        set = new Llist([1, 2, 3]);
        assert.deepEqual(set.set(0,7),7);
    });
});
describe("toString", function(){
    let toString = new Llist([1, 2, 3]);
    it("toString  [1,2,3]", function(){
        assert.deepEqual(toString.toString(),"123");
    });
    it("toString  [2,2,3]", function(){
        toString = new Llist([2, 2, 3]);
        assert.deepEqual(toString.toString(),"223");
    });
    it("toString  [2]", function(){
        toString = new Llist([2]);
        assert.deepEqual(toString.toString(),"2");
    });
});
describe("min", function(){
    let min = new Llist([1, 2, 3]);
    it("min of  1,2,3", function(){
        assert.deepEqual(min.min(),1);
    });
    it("min of 7,10,3", function(){
        min = new Llist([7, 10, 3]);
        assert.deepEqual(min.min(),3);
    });
});
describe("max", function(){
    let max = new Llist([1, 2, 3]);
    it("max of  1,2,3", function(){
        assert.deepEqual(max.max(),3);
    });
    it("max of 7,10,3", function(){
        max = new Llist([7, 10, 3]);
        assert.deepEqual(max.max(),10);
    });
});
describe("sort", function(){
    let sort = new Llist([4,5,-9,6]);
    it("sort of  4,5,-9,6", function(){
        assert.deepEqual(sort.sort(),[-9,4,5,6]);
    });
    it("sort of 7,10,3", function(){
        sort = new Llist([7,10,3]);
        assert.deepEqual(sort.sort(),[3,7,10]);
    });
});
describe("maxIndex", function(){
    let maxIndex = new Llist([4,5,-9,6]);
    it("maxIndex of  4,5,-9,6", function(){
        assert.deepEqual(maxIndex.maxIndex(),3);
    });
    it("maxIndex of 7,10,3", function(){
        maxIndex = new Llist([7,10,3]);
        assert.deepEqual(maxIndex.maxIndex(),1);
    });
});
describe("minIndex", function(){
    let minIndex = new Llist([4,5,-9,6]);
    it("minIndex of  4,5,-9,6", function(){
        assert.deepEqual(minIndex.minIndex(),2);
    });
    it("minIndex of 7,10,3", function(){
        minIndex = new Llist([7,10,3]);
        assert.deepEqual(minIndex.minIndex(),2);
    });
});
describe("reverse", function(){
    let reverse = new Llist([4,5,-9,6]);
    it("reverse  of  4,5,-9,6", function(){
        assert.deepEqual(reverse.reverse(),[6,-9,5,4]);
    });
    it("reverse of 7,10,3", function(){
        reverse = new Llist([7,10,3]);
        assert.deepEqual(reverse.reverse(),[3,10,7]);
    });
});
describe("halfReverse", function(){
    let halfReverse = new Llist([4,2,-9,-77]);
    it("halfReverse of  4,2,-9,-77", function(){
        assert.deepEqual(halfReverse.halfReverse(),[-9,-77,4,2]);
    });
    it("halfReverse of 7,10,3", function(){
        halfReverse = new Llist([7,10,3]);
        assert.deepEqual(halfReverse.halfReverse(),[3,10,7]);
    });
    it("halfReverse of 7,1,8,6,1", function(){
        halfReverse = new Llist([7,1,8,6,1]);
        assert.deepEqual(halfReverse.halfReverse(),[6,1,8,7,1]);
    });
});

