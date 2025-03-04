//  1) Создайте объект с вашим описанием(имя, возраст и т.д.).
const student = {
    firstName: 'Юрий',
    lastName: 'Соболь',
    age: 37,
    isStudying: true,

    // 2) Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.
    greeting(name) {
        return `Hello ${name}`
    }
}

const result = student.greeting(student.firstName);
console.log(result); //Hello Юрий

// 3) Создайте массив объектов с описанием пользователей(такой мы делали в уроке). Объявите отдельную переменную, в которой будет храниться количество простых пользователей, начальное значение будет - 0. Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу. После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.

const users = [
    { name: 'Паша', age: 19, isAdmin: false },
    { name: 'Юра', age: 35, isAdmin: false },
    { name: 'Саша', age: 24, isAdmin: false },
    { name: 'Андрей', age: 22, isAdmin: false },
    { name: 'Юля', age: 33, isAdmin: false },
    { name: 'Маша', age: 40, isAdmin: false },
    { name: 'Катя', age: 60, isAdmin: true },
    { name: 'Петя', age: 28, isAdmin: false },
    { name: 'Иван', age: 21, isAdmin: false },
    { name: 'Таня', age: 55, isAdmin: true }
];

let countSimpleUsers = 0;
for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        countSimpleUsers++
    }
}
console.log(`Количество простых пользователей составляет ${countSimpleUsers} человек.`);