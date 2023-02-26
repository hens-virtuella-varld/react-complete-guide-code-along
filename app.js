// Class & Inheritance
class Human {
	gender = "female";
	printGender = () => {
		console.log(this.gender);
	};
}

class Person extends Human {
	name = "Regan";
	printName = () => {
		console.log(this.name);
	};
}

const person = new Person();
person.printGender();
person.printName();

// Spread Operator
const numbers = [0, 1, 2];
const newNumbers = [...numbers, 3, 4, 5];
console.log(newNumbers);

const personInfo = {
	name: "Love",
};

const newPersonInfo = {
	...personInfo,
	gender: "female",
};

console.log(newPersonInfo);

// Rest Operator
const filter = (...args) => args.filter((el) => el === 13);

console.log(filter(0, 1, 2, 3, 13, 5, 13));

// Destructuring

const arr = [0, 1, 22, 333];
[num0, , num2] = arr;
console.log(num0, num2);

const companyInfo = { company: "Spotify", city: "Stockholm" };
const { city } = companyInfo;
console.log(city);

// Array Method
const numArr = [5, 15, 25, 35];
const doubleNumArr = numArr.map((num) => {
	return num * 2;
});
console.log(doubleNumArr);

function transformToObjects(numberArray) {
	return numberArray.map((num) => {
		return { val: num };
	});
}
console.log(transformToObjects([7, 77, 777]));
