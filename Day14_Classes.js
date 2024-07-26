// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instanse of the class and log the greeting message.
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    // Method (setter methods)
    greet(){
        return `Hello ${this.firstName}`
    }

    // static Method
    static genericGreet(){
        return `Good Morning!`
    }

    // Getter
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new Person("Ayush","Dodiya",21)
console.log(person1.greet())

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
Person.prototype.updateAge = function(age){
    this.age = age;
    return this.age;
}

const person2 = new Person("Jeet", "Oza", 22)
console.log(`The updated age of ${person2.firstName} is ${person2.updateAge(21)}`)

// Task 3: Defina a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

class Student extends Person{
    static totalStudents = 0;
    constructor(firstName, lastName,age,studentId){
        super(firstName, lastName,age)
        this.studentId = studentId
        Student.totalStudents++
    }

    getStudentId(){
        return this.studentId
    }

}

const student1 = new Student("Jatan","Dadhania", 22, 1)
const student2 = new Student("Amit", "Parekh", 23, 2)
console.log(student1.getStudentId())

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
Student.prototype.greet = function(){
    return `Hello ${this.name}, your studentID is ${this.studentId}`
}

console.log(student1.greet())

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
console.log(Person.genericGreet())

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
console.log(`Total number of students: ${Student.totalStudents}`)

// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
console.log(person2.fullName)

// Task 8: Add a setter method to Person class to update the name properties(firstName and lastName). Update the name using the setter and log the updated full name.
Person.prototype.updateName = function(firstName,lastName){
    this.firstName = firstName
    this.lastName = lastName
}

person2.updateName("Jeetyo","Ozio")
console.log(`The updated name is: ${person2.fullName}`)

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account{
    #balance = 0
    constructor(initialBalance){
        this.#balance = initialBalance
    }

    deposit(amount){
        this.#balance += amount;
        return `Deposited: ${amount}`
    }

    withdraw(amount){
        if (amount<=this.#balance) {
            this.#balance -= amount
            return `Amount withdrawed: ${amount}`
        }
        else{
            return `Insufficient Balance`
        }
    }

    getBalance(){
        return this.#balance
    }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
const account1=new Account(20)
console.log(account1.getBalance())
console.log(account1.deposit(50))
console.log(account1.getBalance())
console.log(account1.withdraw(30))
console.log(account1.getBalance())
console.log(account1.withdraw(70))
console.log(account1.getBalance())