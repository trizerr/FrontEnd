"use strict";
let i = 0, personList = [];

    function create(id, fName, lName, age) {

        let person = {
            id: id,
            firstName: fName,
            lastName: lName,
            age: age,
        }
        personList[i] = person;
        i++;
    }

    function update(id, fName, lName, age) {
        for (let i = 0; i < personList.length; i++) {
            if (personList[i].id == id) {
                personList[i].id = id;
                personList[i].firstName = fName;
                personList[i].lastName = lName;
                personList[i].age = age;
            }
        }
    }

    function deletee(id) {
        for (let i = 0; i < personList.length; i++) {
            if (personList[i].id == id) {
                personList.splice(i, 1); // deleting person from personList
                i--;
            }
        }
        i--;
    }

module.exports={
    create:create,
    deletee:deletee,
    update:update,
    personList:personList
}
