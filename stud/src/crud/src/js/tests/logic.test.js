const { create } = require('../indexLogic');
const { update } = require('../indexLogic');
const { deletee } = require('../indexLogic');
const { personList } = require('../indexLogic');
describe('test', () => {
    it('create', () => {
        create(1,"d","d","d");
        expect(personList[0]).to.deep.contain({id:1, firstName:"d", lastName:"d",age:"d"});
        create(2,"gg","d","d");
        expect(personList[1]).to.deep.contain({id:2, firstName:"gg", lastName:"d",age:"d"});
    })
    it('update', () => {
        update(1, "dff", "james", "11");
        expect(personList[0]).to.deep.contain({id: 1, firstName: "dff", lastName: "james", age: "11"});
        update(2, "4444", "d", "ddd");
        expect(personList[1]).to.deep.contain({id: 2, firstName: "4444", lastName: "d", age: "ddd"});
    })
    it('delete', () => {
        deletee(1);
        deletee(2);
        expect(personList.length === 1).to.be.false;
    })
})

