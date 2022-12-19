// class Person{
//   constructor() {
//     this.name = 'Vijendra';
//   }
//   printMyName() {
//     console.log(this.name);
//   }
// }

// const p1 = new Person();
// p1.printMyName();
// What why how
class Human{
  constructor() {
    this.eats = true;
  }
  printHabit() {
    console.log(`This human will ${this.eats?'':'not'} eat food`);
  }
}
//inorder to inherit from a class we use a special keyword 'extends'
      //child class parent classs
class Person extends Human {
  constructor() {
    super(); //super keyword gives acces to the methods and properties of parent class
    this.name = "Vijendra";
    //-> modification/alteration of methods/properties from parent class should only be done after calling super() fn
    this.eats = false;
  }
  printMyName() {
    console.log(this.name);
  }

  // writing own implemtation of method present in parent class, this will override the method of parent class
  // printHabit() {
  //   console.log("this is my version")
  // }
}

const p1 = new Person();
p1.printMyName();
p1.printHabit();


// let arr1 = [];
// let arr2 = new Array();
// arr2.push(10)


// class myArray(){
//   constructor(size){
//     //[]
//     // [size]
//   }

//   push(num){
    
//   }
// }



