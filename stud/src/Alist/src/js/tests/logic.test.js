
const { Alist } = require('../index');

describe("addStart", function(){
    let addStart = new Alist([1, 2, 3]);
    it("addStart 4 at start of 1,2,3", function(){
        assert.deepEqual(addStart.addStart(4),[4,1,2,3]);
        addStart.clear();
    });
    it("addStart -8 at start of 1,2,3", function(){
        assert.deepEqual(addStart.addStart(-8),[-8,1,2,3]);
    });
});
describe("addEnd", function(){
    let addEnd = new Alist([1, 2, 3]);
    it("addEnd 4 at end of 1,2,3", function(){
        assert.deepEqual(addEnd.addEnd(4),[1,2,3,4]);
        addEnd.clear();
    });
    it("addEnd -8 at end of 1,2,3", function(){
        assert.deepEqual(addEnd.addEnd(-8),[1,2,3,-8]);
    });
});
describe("delStart", function(){
    let delStart = new Alist([1, 2, 3]);
    it("delStart of 1,2,3", function(){
        assert.deepEqual(delStart.delStart(),[2,3]);
    });
    it("delStart of 5,4", function(){
        delStart.clear();
        delStart = new Alist([5,4]);
        assert.deepEqual(delStart.delStart(),[4]);
    });
});
describe("delEnd", function(){
    let delEnd = new Alist([1, 2, 3]);
    it("delEnd of 1,2,3", function(){
        assert.deepEqual(delEnd.delEnd(),[1,2]);
    });
    it("delEnd of 5,4", function(){
        delEnd.clear();
        delEnd = new Alist([5,4]);
        assert.deepEqual(delEnd.delEnd(),[5]);
    });
});
describe("delPosition", function(){
    let delPos = new Alist([1, 2, 3]);
    it("delPosition 1 of 1,2,3", function(){
        assert.deepEqual(delPos.delPos(1),[1,3]);
    });
    it("delPosition 2 of 1,2,3", function(){
        delPos.clear();
        assert.deepEqual(delPos.delPos(2),[1,2]);
    });
});
describe("get", function(){
    let get = new Alist([1, 2, 3]);
    it("get 1 of 1,2,3", function(){
        assert.deepEqual(get.get(1),2);
    });
    it("get 2 of 1,2,3", function(){
        get.clear();
        assert.deepEqual(get.get(2),3);
    });
});
describe("set", function(){
    let set = new Alist([1, 2, 3]);
    it("set 1 to '5' of 1,2,3", function(){
        assert.deepEqual(set.set(1,5),[1,5,3]);
    });
    it("set 0 to '7' of 1,2,3", function(){
        set.clear();
        assert.deepEqual(set.set(0,7),[7,2,3]);
    });
});
describe("toString", function(){
    let toString = new Alist([1, 2, 3]);
    it("toString  [1,2,3]", function(){
        assert.deepEqual(toString.toString(),"123");
    });
    it("toString  [2,2,3]", function(){
        toString.clear();
        toString = new Alist([2, 2, 3]);
        assert.deepEqual(toString.toString(),"223");
    });
});
describe("min", function(){
    let min = new Alist([1, 2, 3]);
    it("min of  1,2,3", function(){
        assert.deepEqual(min.min(),1);
    });
    it("min of 7,10,3", function(){
        min.clear();
        min = new Alist([7, 10, 3]);
        assert.deepEqual(min.min(),3);
    });
});
describe("max", function(){
    let max = new Alist([1, 2, 3]);
    it("max of  1,2,3", function(){
        assert.deepEqual(max.max(),3);
    });
    it("max of 7,10,3", function(){
        max.clear();
        max = new Alist([7, 10, 3]);
        assert.deepEqual(max.max(),10);
    });
});
describe("sort", function(){
    let sort = new Alist([4,5,-9,6]);
    it("sort of  4,5,-9,6", function(){
        assert.deepEqual(sort.sort(),[-9,4,5,6]);
    });
    it("sort of 7,10,3", function(){
        sort.clear();
        sort = new Alist([7,10,3]);
        assert.deepEqual(sort.sort(),[3,7,10]);
    });
});
describe("maxIndex", function(){
    let maxIndex = new Alist([4,5,-9,6]);
    it("maxIndex of  4,5,-9,6", function(){
        assert.deepEqual(maxIndex.maxIndex(),3);
    });
    it("maxIndex of 7,10,3", function(){
        maxIndex.clear();
        maxIndex = new Alist([7,10,3]);
        assert.deepEqual(maxIndex.maxIndex(),1);
    });
});
describe("minIndex", function(){
    let minIndex = new Alist([4,5,-9,6]);
    it("minIndex of  4,5,-9,6", function(){
        assert.deepEqual(minIndex.minIndex(),2);
    });
    it("minIndex of 7,10,3", function(){
        minIndex.clear();
        minIndex = new Alist([7,10,3]);
        assert.deepEqual(minIndex.minIndex(),2);
    });
});
describe("reverse", function(){
    let reverse = new Alist([4,5,-9,6]);
    it("reverse  of  4,5,-9,6", function(){
        assert.deepEqual(reverse.reverse(),[6,-9,5,4]);
    });
    it("reverse of 7,10,3", function(){
        reverse.clear();
        reverse = new Alist([7,10,3]);
        assert.deepEqual(reverse.reverse(),[3,10,7]);
    });
});
describe("halfReverse", function(){
    let halfReverse = new Alist([4,2,-9,-77]);
    it("halfReverse of  4,2,-9,-77", function(){
        assert.deepEqual(halfReverse.halfReverse(),[2,4,-77,-9]);
    });
    it("halfReverse of 7,10,3", function(){
        halfReverse.clear();
        halfReverse = new Alist([7,10,3]);
        assert.deepEqual(halfReverse.halfReverse(),[7,10,3]);
    });
    it("halfReverse of 7,1,8,6,1", function(){
        halfReverse.clear();
        halfReverse = new Alist([7,1,8,6,1]);
        assert.deepEqual(halfReverse.halfReverse(),[1,7,8,1,6]);
    });
});

