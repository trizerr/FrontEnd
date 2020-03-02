"use strict";

var personList = [],
    i = 0,
    checkExist = false;
var listDiv = document.querySelector("#listDiv"); // adding input

var idInput = document.querySelector("#idInput");
var firstNameInput = document.querySelector("#firstNameInput");
var lastNameInput = document.querySelector("#lastNameInput");
var ageInput = document.querySelector("#ageInput");
var create = document.querySelector("#create");
var read = document.querySelector("#read");
read.addEventListener('click', function (event) {
  personList = JSON.parse(window.localStorage.getItem('personList')); //getting personList from localStorage

  for (var t = 0; t < personList.length; t++) {
    var person = personList[t];
    var idString = document.createElement("td"); // adding elements of line(<td>)

    var firstNameString = document.createElement("td");
    var lastNameString = document.createElement("td");
    var ageString = document.createElement("td");
    idString.innerHTML = person.id; // setting value to strings(elements of line(<td>))

    firstNameString.innerHTML = person.firstName;
    lastNameString.innerHTML = person.lastName;
    ageString.innerHTML = person.age;
    var string = document.createElement("tr"); //creating line

    var id = "id" + person.id;
    string.id = id; //setting id for line

    var className = person.id; //creating classname for elements(<tr>)

    listDiv.append(string); //appending new elements to line

    string.append(idString);
    string.append(firstNameString);
    string.append(lastNameString);
    string.append(ageString);
    idString.className = className; // setting classname for elements

    firstNameString.className = className;
    lastNameString.className = className;
    ageString.className = className;
  }
});
create.addEventListener('click', function (event) {
  checkExist = false;
  var person = {
    //creating person
    id: idInput.value,
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    age: ageInput.value
  };
  personList[i] = person; // putting person in array

  console.log(i);
  i++;
  console.log(i);

  for (var j = 0; j < i - 1; j++) {
    // checking if id already exists
    if (personList[j].id == personList[i - 1].id) {
      checkExist = true;
    }
  }

  if (checkExist == false) {
    var idString = document.createElement("td"); // adding elements of line(<td>)

    var firstNameString = document.createElement("td");
    var lastNameString = document.createElement("td");
    var ageString = document.createElement("td");
    idString.innerHTML = person.id; // setting value to strings(elements of line(<td>))

    firstNameString.innerHTML = person.firstName;
    lastNameString.innerHTML = person.lastName;
    ageString.innerHTML = person.age;
    var string = document.createElement("tr"); //creating line

    var id = "id" + person.id;
    string.id = id; //setting id for line

    var className = idString.innerHTML; //creating classname for elements(<tr>)

    listDiv.append(string); //appending new elements to line

    string.append(idString);
    string.append(firstNameString);
    string.append(lastNameString);
    string.append(ageString);
    idString.className = className; // setting classname for elements

    firstNameString.className = className;
    lastNameString.className = className;
    ageString.className = className;
    window.localStorage.setItem('personList', JSON.stringify(personList)); // passing personlist to local storage
  } else alert("id already exists!");
});
var deletee = document.querySelector("#delete");
deletee.addEventListener('click', function (event) {
  var id = "#id" + idInput.value.toString(); //finding id of line

  $(id).remove(); // deleting all elements from line

  for (var j = 0; j < personList.length; j++) {
    if (personList[j].id == idInput.value) {
      personList.splice(j, 1); // deleting person from personList

      i--;
    }
  }

  window.localStorage.setItem('personList', JSON.stringify(personList)); // passing personlist to local storage
});
var update = document.querySelector("#update");
update.addEventListener('click', function (event) {
  for (var j = 0; j < i; j++) {
    if (personList[j].id == idInput.value) {
      personList[j].id = idInput.value;
      personList[j].firstName = firstNameInput.value;
      personList[j].lastName = lastNameInput.value;
      personList[j].age = ageInput.value;
      var id = "#id" + idInput.value.toString();
      var string = document.querySelector(id); //finding line(<tr>)

      var className = idInput.value.toString();
      $("." + className).remove(); //removing all elements from line
      //-----------> creating new line

      var idString = document.createElement("td"); // adding columns<td>

      var firstNameString = document.createElement("td");
      var lastNameString = document.createElement("td");
      var ageString = document.createElement("td");
      idString.innerHTML = idInput.value; // setting value to each element of line

      firstNameString.innerHTML = firstNameInput.value;
      lastNameString.innerHTML = lastNameInput.value;
      ageString.innerHTML = ageInput.value;
      id = "id" + idString.innerHTML;
      string.id = id; // setting id to string

      var className = idString.innerHTML; // determine classname(for each element of line)

      listDiv.append(string); //appending new elements to line

      string.append(idString);
      string.append(firstNameString);
      string.append(lastNameString);
      string.append(ageString);
      idString.className = className; //setting class name to each element of line(<tr>)

      firstNameString.className = className;
      lastNameString.className = className;
      ageString.className = className;
      window.localStorage.setItem('personList', JSON.stringify(personList)); // passing personlist to local storage
    }
  }
});