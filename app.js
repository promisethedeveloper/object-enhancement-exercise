// SAME KEYS AND VALUES
// function createInstructor(firstName, lastName) {
// 	return {
// 		firstName: firstName,
// 		lastName: lastName,
// 	};
// }

const createInstructor = (firstName, lastName) => {
	return {
		firstName,
		lastName,
	};
};

// COMPUTED PROPERTY NAMES
// var favoriteNumber = 42;
// var instructor = {
// 	firstName: "Colt",
// };
// instructor[favoriteNumber] = "That is my favorite!";

const favoriteNumber = 42;
const instructor = {
	firstName: "Colt",
	[favoriteNumber]: "That is my favorite!",
};

// OBJECT METHODS
// var instructor = {
// 	firstName: "Colt",
// 	sayHi: function () {
// 		return "Hi!";
// 	},
// 	sayBye: function () {
// 		return this.firstName + " says bye!";
// 	},
// };

const instructor = {
	firstName: "Colt",
	sayHi() {
		return "Hi!";
	},
	sayBye() {
		return `${this.firstName} says bye!`;
	},
};

const createAnimal = (species, verb, noise) => {
	return {
		species,
		[verb]() {
			return noise;
		},
	};
};

const d = createAnimal("dog", "bark", "wooof!");
d.bark();
const s = createAnimal("sheep", "bleet", "BAAAAAaaaaa");
s.bleet();
