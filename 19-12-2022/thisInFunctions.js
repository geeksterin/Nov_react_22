let group1 = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

    showList() {
      //this in alert fn points to this of outer env, that is showList. this of showList is pointing to group object. that is why inside alert fn we can access title 
    this.students.forEach((student) => alert(this.title + ": " + student));
  },
};

group1.showList(); //this will point to group object 

let group2 = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.map(function (student) {
      // Error: Cannot read property 'title' of undefined
        alert(this.title + ": " + student);
        console.log("123 ",this);
    });
  },
};

group2.showList();


//EXCEPTIONAL CASE

let group3 = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(function (student) {
      // Error: Cannot read property 'title' of undefined
      alert(this.title + ": " + student);
    });
  },
};

group3.showList();
//this in regular function inside forEach points to undefined. because forEach has a special property which makes this=ud. hence we cannot access title 


