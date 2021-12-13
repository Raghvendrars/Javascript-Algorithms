class Student {
  constructor(name) {
    this.name = name;
  }
  displaydata() {
    console.log("This is parent class");
  }
}

class School extends Student {
  constructor(name, Schoolname, rollno) {
    super(name);
    super.displaydata();
    this.Schoolname = Schoolname;
    this.rollno = rollno;
  }
  displaydata() {
    console.log(this.name + " study in " + this.Schoolname + " school");
    console.log(this.name + " roll no is " + this.rollno);
  }
}

let schooldata = new School("Raghav", "Ld college", "26");
schooldata.displaydata();
