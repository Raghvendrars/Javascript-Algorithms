class Raghav {
  constructor(firstname) {
    this.firstname = firstname;
  }
  displayfirstname() {
    return firstname;
  }
}

class singh extends Raghav {
  constructor(firstname, lastname) {
    super(firstname);
    this.lastname = lastname;
  }
  displayit() {
    console.log(this.firstname + " " + this.lastname);
  }
}

let heyraghav = new singh("Raghav", "Singh");
heyraghav.displayit();
