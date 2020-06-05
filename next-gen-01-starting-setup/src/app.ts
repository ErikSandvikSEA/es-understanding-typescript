// const userName = 'Max'
// let age = 30

// age = 29

// function add(a: number, b: number) {
// 	let result
// 	result = a + b
// 	return result
// }

// if (age > 20) {
// 	let isOld = true
// }

// console.log(isOld)

// const add = (a: number, b: number = 1) => a + b

// console.log(add(2, 5))

// const printOutput: (a: number | string) => void = (output) =>
// 	console.log(output)
// const button = document.querySelector('button')
// if (button) {
// 	button.addEventListener('click', (event) => console.log(event))
// }

// printOutput(add(5))

const hobbies = ['Sports', 'Cooking', 'Video Games', 'Coding', 'Camping']

console.log(hobbies[0])

const activeHobbies = ['Hiking']
console.log(activeHobbies)
activeHobbies.push(...hobbies)

console.log(activeHobbies)

const person = {
	firstName: 'Max',
	age: 30,
	hobbies: hobbies,
}
const copiedPerson = { ...person }
console.log(copiedPerson)

const add = (...numbers: number[]) => {
	return numbers.reduce((currentResult, currentValue) => {
		return currentResult + currentValue
	}, 0)
}

const addedNumbers = add(5, 10, 2, 3.7)
console.log(addedNumbers)

const [hobby1, hobby2, ...remainingHobbies] = hobbies
console.log(hobby2)
console.log(remainingHobbies)

console.log(hobbies, hobby1, hobby2)

const { firstName: userName, age } = person
console.log(userName, age)
