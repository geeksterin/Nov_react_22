// "use strict"
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

const cat = new Animal();
console.log(cat);

var speak = cat.speak;

var ans = speak();
console.log(ans); //undefined 


// let obj = {
//   speak() {
//     return this;
//   },
// };
// const speak = obj.speak;

// let ans = speak();
// console.log(ans); //window obj  //undeinfed in stric mode 