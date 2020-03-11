"use strict";

var personList = [], i = 0, checkExist = false, db;
var listDiv = document.querySelector("#listDiv"); // adding input
var idInput = document.querySelector("#idInput");
var firstNameInput = document.querySelector("#firstNameInput");
var lastNameInput = document.querySelector("#lastNameInput");
var ageInput = document.querySelector("#ageInput");
var emailInput = document.querySelector("#emailInput");
var phoneInput = document.querySelector("#phoneInput");
var create = document.querySelector("#create");
var localStor = document.querySelector("#localStorage");
var indexDB = document.querySelector("#indexDB");

window.onload = function(){
  if(localStor.checked == true)
    localStorageFunc();
  else
    indexDBFunc();
}
function localStorageFunc() {
    if (window.localStorage.getItem('personList') != undefined) {
      personList = JSON.parse(window.localStorage.getItem('personList')); //getting personList from localStorage
      for (var t = 0; t < personList.length; t++) {
        var person = personList[t];
        creating(person);
      }
      i=personList.length;
    }
}
function indexDBFunc() {

  let db;
  let dbReq = indexedDB.open('myDB', 1);
  dbReq.onupgradeneeded = event => {
    console.log("d");
    db = event.target.result;
    let persons = db.createObjectStore('persons', { keyPath: 'id' });
  };
  dbReq.onsuccess = event => {
    db = event.target.result;
  };
  dbReq.onerror = event => {
    alert('error opening database ' + event.target.errorCode);
  };
}




create.addEventListener('click', function (event) {
    checkExist = false;
    var person = { //creating person
      id: idInput.value,
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      age: ageInput.value,
      phone: phoneInput.value,
      email: emailInput.value
    };
    personList[i] = person; // putting person in array
    i++;
    for (var j = 0; j < i - 1; j++) { // checking if id already exists
      if (personList[j].id == personList[i - 1].id) {
        checkExist = true;
      }
    }
    creating(person);
});

function creating(person) {
  if (checkExist == false) {
    console.log(person);
    var idString = document.createElement("td"); // adding elements of line(<td>)
    var firstNameString = document.createElement("td");
    var lastNameString = document.createElement("td");
    var ageString = document.createElement("td");
    var phoneString = document.createElement("td");
    var emailString = document.createElement("td");

    idString.innerHTML = person.id; // setting value to strings(elements of line(<td>))
    firstNameString.innerHTML = person.firstName;
    lastNameString.innerHTML = person.lastName;
    ageString.innerHTML = person.age;
    emailString.innerHTML = person.email;
    phoneString.innerHTML = person.phone;

    var string = document.createElement("tr"); //creating line

    var id = "id" + person.id;
    string.id = id; //setting id for line
    var className = idString.innerHTML; //creating classname for elements(<tr>)

    listDiv.append(string); //appending new elements to line
    string.append(idString);
    string.append(firstNameString);
    string.append(lastNameString);
    string.append(ageString);
    string.append(emailString);
    string.append(phoneString);
    idString.className = className; // setting classname for elements
    firstNameString.className = className;
    lastNameString.className = className;
    ageString.className = className;
    if (localStor.checked == true)
      window.localStorage.setItem('personList', JSON.stringify(personList)); // passing personlist to local storage

  } else alert("id already exists!");
}

var deletee = document.querySelector("#delete");
deletee.addEventListener('click', function deleteFunc(event) { //delete function

  var id = "#id" + idInput.value.toString(); //finding id of line
  $(id).remove(); // deleting all elements from line
  for (var j = 0; j < personList.length; j++) {
    if (personList[j].id == idInput.value) {
      personList.splice(j, 1); // deleting person from personList
      i--;
    }
  }
  if(localStor.checked == true)
  window.localStorage.setItem('personList', JSON.stringify(personList)); // passing personlist to local storage

});

var update = document.querySelector("#update");
update.addEventListener('click', function (event) { //update function
  $(deletee).trigger('click');
  $(create).trigger('click');
});