class Employee1 {
    public firstName: string;
    public lastName: string;
    public designation: string;

    public Print(): void {
        console.log("Employee details");
    }
}

class Manger1 extends Employee1 {

    // constructor 
    constructor(firstName: string, lastName: string, designation: string) {
        // calling parent class constructor.
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    // overriding parent class print method .
    public Print(): void {
        super.Print()
        console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
    }
}

class Lead1 extends Employee1 {

    // constructor 
    constructor(firstName: string, lastName: string, designation: string) {
        // calling parent class constructor.
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    // overriding parent class print method .
    public Print(): void {
        super.Print()
        console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
    }
}

class Developer1 extends Employee1 {

    // constructor 
    constructor(firstName: string, lastName: string, designation: string) {
        // calling parent class constructor.
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    // overriding parent class print method .
    public Print(): void {
        super.Print()
        console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
    }
}


let employees1: Employee1[] = new Array(new Manger1("Jack", "Sparrow", "Manger"), new Lead1("Sumit", "Pande", "Lead"), new Developer1("Dnyanesh", "Surya", "Developer"));

for(var emp of employees1) {
    emp.Print();
}