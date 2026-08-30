// Задание 1.
// Дан массив пользователей:
const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

const getUserAverageAge = (users) => {
	if (!users.length)
		return "В исходном массиве нет пользователей либо другая ошибка";

	let sumAge = 0;

	users.forEach((user) => {
		sumAge += user.age;
	});

	const averageAge = sumAge / users.length;

	if (averageAge !== Infinity) {
		return averageAge;
	} else {
		return "Ошибка: Деление на ноль";
	}
};

console.log(getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.
const getAllAdmins = (users) => {
	if (users.length === 0)
		return "В исходном массиве нет пользователей либо другая ошибка";

	const admins = [];

	users.forEach((user) => {
		if (user.isAdmin) admins.push(user);
	});

	return admins;
};

console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

const arr = [1, "dhiw", true, "4685748", { index: "index" }, {}, [1, true, 3]];

const first = (arr, n) => {
	if (n > arr.length)
		return "Указанное количество элементов больше количества элементов в исходном массиве.";

	const firstElements = [];

	if (n === 0) return firstElements;
	if (n === undefined) {
		firstElements.push(arr.at(0));
		return firstElements;
	}

	for (let index = 0; index < n; index++) {
		firstElements.push(arr[index]);
	}

	return firstElements;
};

console.log(first(arr, 7));
