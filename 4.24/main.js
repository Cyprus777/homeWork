// Задача 1.
// Напишите цикл, который выводит числа от 1 до 20, но пропускает те числа, которые делятся на 4 без остатка.
for (let i = 0; i < 20; i++) {
	let currentNumber = i + 1;
	if (currentNumber % 4 === 0) continue;
	console.log(currentNumber);
}
// Задача 2.
// С помощью цикла for вычислите факториал числа (произведение всех чисел от 1 до заданного числа). Используйте prompt() для получения начального значения.
const inputNumber = +prompt("Введите число для расчета факториала", 1);
if (isNaN(inputNumber) || inputNumber < 0) {
	alert("Пожалуйста, введите положительное целое число");
} else {
	let result = 1n;
	for (let i = 1n; i <= BigInt(inputNumber); i++) {
		result *= i;
	}
	alert(`Факториал числа ${inputNumber} равен ${result}`);
}

// Задача 3.
// Выведите в консоль шахматную доску размером 8х8, где символы чередуются (например # и пробел). Начинайте с # в первой ячейке первой строки.
const size = 8;
let chessBoard = "";

for (let row = 0; row < size; row++) {
	for (let col = 0; col < size; col++) {
		chessBoard += (row + col) % 2 === 0 ? "\u25A1" : "\u25A0";
	}
	chessBoard += "\n";
}
console.log(chessBoard);
