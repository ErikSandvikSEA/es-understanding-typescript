// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
// 	name: string
// 	age: number
// 	hobbies: string[]
// 	role: [number, string]
// } = {
// 	name: 'Maximilian',
// 	age: 30,
// 	hobbies: ['Sports', 'Cooking'],
// 	role: [2, 'author'],
// }

enum Role {
	ADMIN, //assigned to the number 1
	READ_ONLY, //assigned to the number 2
	AUTHOR, //assigned to the number 3
}

const person = {
	name: 'Maximilian',
	age: 30,
	hobbies: ['Sports', 'Cooking'],
	role: Role.ADMIN,
}

if (person.role === Role.ADMIN) {
	console.log('Maximilian is an admin')
}

let favoriteActivities: string[]
favoriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase())
}
