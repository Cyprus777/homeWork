// Задача 1.
// Напишите условие, которое будет проверять чётное ли число, используйте оператор if.
const number = +prompt("Проверка числа на четность. Введите число", 0);
const isNumberEven = number % 2 === 0;
const isNumber = typeof number;
const isNotNaN = !isNaN(number);
if (isNumber && isNotNaN) {
	if (isNumberEven) {
		alert(`Число ${number} является четным`);
	} else {
		alert(`Число ${number} является нечетным`);
	}
} else {
	alert("Ошибка! Введите число");
}

// Задача 2.
// 1. Объявите переменную age с числовым значением.
const yourAge = +prompt("Введите свой возраст", 0);
// 2. С помощью тернарного оператора (вложенного, если нужно) присвойте переменной discount значение скидки:
//    2.1. Если age меньше 18 – скидка 10%.
//    2.2. Если age от 18 до 65 (включительно) – скидка 20%.
//    2.3. Если age больше 65 – скидка 30%.
const discount =
	typeof yourAge === "number" && !isNaN(yourAge)
		? yourAge > 0 && yourAge < 18
			? "скидка 10%"
			: yourAge >= 18 && yourAge <= 65
				? "скидка 20%"
				: "скидка 30%"
		: "Ошибка! Введите число.";
// 3. Выведите значение discount в консоль.
console.log(discount);

// 4. *Дополнительное задание: перепишите задачу на switch-case.
let additionalTask_discount = null;
const additionalTask_yourAge = +prompt("Введите свой возраст", 0);
if (
	typeof additionalTask_yourAge === "number" &&
	!isNaN(additionalTask_yourAge)
) {
	switch (true) {
		case additionalTask_yourAge > 0 && additionalTask_yourAge < 18:
			{
				additionalTask_discount = "скидка 10%";
			}

			break;
		case additionalTask_yourAge >= 18 && additionalTask_yourAge <= 65:
			{
				additionalTask_discount = "скидка 20%";
			}

			break;

		default:
			additionalTask_discount = "скидка 30%";
			break;
	}
} else {
	additionalTask_discount = "Ошибка! Введите число.";
}

console.log(additionalTask_discount);

// Задача 3.
// 1. Объявите переменные username и password.
//    Допустимые варианты имени пользователя — это "admin" или "user", а пароль должен быть равен "123456".
const username = prompt("Введите имя пользователя", 0);
const password = prompt("Введите пароль", 0);
// 2. Если выполняется условие:
//     (username равен "admin" или "user") и пароль равен "123456"
//     то выведите сообщение "Доступ разрешен", иначе — "Доступ запрещен".
if ((username === "admin" || username === "user") && password === "123456") {
	alert("Доступ разрешен", 0);
} else {
	alert("Доступ запрещен", 0);
}
// 3. Используйте prompt для ввода имени пользователя и пароля.

// *Задача 4.
// Создайте программу, которая рассчитывает стоимость доставки посылки, основываясь на весе и типе доставки. Программа должна запрашивать у пользователя данные с помощью prompt и выводить результат через alert.

// 1. Ввод данных:
//    1.1. Запросите у пользователя вес посылки (в килограммах).
let askParcelWeightKg = +prompt("Укажите вес посылки в килограммах", 0);

//    1.2. Запросите у пользователя тип доставки. Допустимые варианты:
//        "Стандарт"
//        "Экспресс"
//        "Премиум"
let deliveryType = prompt(
	"Укажите тип доставки (Стандарт, Экспресс, Премиум)",
	"",
);

// 2. Проверка корректности данных:
//    2.1. Если вес меньше или равен 0, выведите сообщение об ошибке: "Некорректный вес посылки".
if (isNaN(askParcelWeightKg) || askParcelWeightKg <= 0) {
	alert("Некорректный вес посылки");
}
//    2.2. Если введён тип доставки, который не соответствует ни одному из ожидаемых вариантов, выведите сообщение: "Неверный тип доставки".
if (
	deliveryType !== "Стандарт" &&
	deliveryType !== "Экспресс" &&
	deliveryType !== "Премиум"
) {
	alert("Неверный тип доставки");
}
// 3. Расчёт базовой стоимости доставки:
//    3.1. Определите базовую стоимость в зависимости от веса посылки:
//        Если вес меньше 1 кг, базовая стоимость — 5$.
//        Если вес от 1 кг до 5 кг (включительно), базовая стоимость — 10$.
//        Если вес больше 5 кг, базовая стоимость — 15$.
//    Для определения базовой стоимости можно использовать конструкцию if...else или тернарный оператор.
let baseDeliveryFee =
	askParcelWeightKg !== null
		? askParcelWeightKg < 1
			? 5
			: askParcelWeightKg >= 1 && askParcelWeightKg <= 10
				? 10
				: 15
		: "Некорректный вес посылки";

// 4. Определение коэффициента по типу доставки:
//     Используйте конструкцию switch-case для назначения коэффициента:
//        "Стандарт": коэффициент 1
//        "Экспресс": коэффициент 1.5
//        "Премиум": коэффициент 2
let deliveryTypeMultiplier;
switch (deliveryType) {
	case "Стандарт":
		{
			deliveryTypeMultiplier = 1;
		}
		break;
	case "Экспресс":
		{
			deliveryTypeMultiplier = 1.5;
		}
		break;
	case "Премиум":
		{
			deliveryTypeMultiplier = 2;
		}
		break;
	default: {
		alert("Ошибка! Некорректно указан тип доставки");
	}
}
// 5. Расчёт итоговой стоимости доставки:
//    Итоговая стоимость = базовая стоимость * коэффициент.
const totalDeliveryFee =
	!isNaN(baseDeliveryFee) && !isNaN(deliveryTypeMultiplier)
		? baseDeliveryFee * deliveryTypeMultiplier
		: "Ошибка";

// 6. Вывод результата:
//    С помощью alert выведите итоговую стоимость доставки, например: "Итоговая стоимость доставки: 15$."
alert(`Итоговая стоимость доставки: ${totalDeliveryFee}.`);
