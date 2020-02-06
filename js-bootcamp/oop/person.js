const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Teja', 'Reddy', 24)
console.log(me)

const person2 = new Person('Robert', 'Downey', 34)
console.log(person2)