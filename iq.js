//q1
const person = {
  firstName: "Lydia",
  lastName: "Hallie",
  pet: {
    name: "Mara",
    breed: "Dutch Tulip Hound",
  },
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.pet?.name);
console.log(person.pet?.family?.name);
console.log(person.getFullName?.());
console.log(member.getLastName?.());

//q2
const person = {
  name: "Lydia",
  age: 21,
};

const changeAge = function (x = { ...person }) {
  x.age += 1;
};
const changeAgeAndName = function (x = { ...person }) {
  x.age += 1;
  x.name = "Sarah";
};

changeAge(person);
changeAgeAndName();

console.log(person);
