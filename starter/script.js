// Object literals
/*let john = {
	name: 'John',
	yearOfBirth: 1990,
	isMarried: false
};

let mary = {
	name: 'Mary',
	yearOfBirth: 1995,
	isMarried: true
};

let jane ={
	name: 'Jane',
	yearOfBirth: 1992,
	isMarried: false
};*/

// Function constructor
// Blueprint
const Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	console.log(this);
	this.calculateAge = function() {
		console.log(2019 - this.yearOfBirth);
	}
}

// Instantiation
const john = new Person('John', 1990, 'teacher');

const wisest = new Person('Wisest', 1987, 'Developer')

john.calculateAge();