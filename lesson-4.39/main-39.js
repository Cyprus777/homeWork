// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
	name: "Иван",
	surname: "Иваныч",
	age: 1005000,
	isProgrammer: true,
	isSeniorPomidor: true,
};

console.log(person);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.
const isEmpty = (obj) => {
	for (const key in obj) {
		if (key) return false;
	}

	return true;
};

console.log(isEmpty(person));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
	title: "Деструктуризация",
	description:
		"Создает поверхностную копию объекта или объединяет несколько объектов",
	isCompleted: false,
};

const modifications = {
	description: "Извлечение данных из объекта в переменные",
	isCompleted: true,
};

const cloneAndModify = (object, modifications) => {
	const modificateTask = { ...object, ...modifications };
	for (const property in modificateTask) {
		console.log(`${property}: ${modificateTask[property]}`);
	}
};

console.log(cloneAndModify(task, modifications));

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

const myObject = {
	property: "Это не метод",

	method1() {
		console.log("Метод 1 вызван");
	},
	method2() {
		console.log("Метод 2 вызван");
	},
	method3() {
		console.log("Метод 3 вызван");
	},
};

const callAllMethods = (obj) => {
	let counterMethods = 0;
	for (const method in obj) {
		if (typeof obj[method] === "function") {
			obj[method]();
			counterMethods += 1;
		}
	}

	if (!counterMethods) return "В объекте нет методов";
};

console.log(callAllMethods(myObject));
