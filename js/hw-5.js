// Проверка на число
function isNum(variable) {
  if (parseInt(variable) === Number(variable) && !isNaN(variable) && typeof variable != "undefined") {
    return true;
  }
  return false;
}

// 1
let num1 = 4;
let num2 = 8;
const compareNums = (num1, num2) => {
  if (!isNum(num1) || !isNum(num2)) {
    return "Переменная(ые) не число";
  }
  return num1 > num2 ? num1 : num2;
};
console.log(compareNums(num1, num2));

// 2
let num3 = 18;
const isEven = (num) => {
  if (!isNum(num)) {
    return "Переменная не число";
  }

  if (num % 2 === 0) {
    return "Число чётное";
  } else {
    return "Число не чётное";
  }
};
console.log(isEven(num3));

// 3
let num4 = 31;
const squareNum = (num) => {
  if (!isNum(num)) {
    return "Переменная не число";
  }
  console.log(num ** 2);
};
squareNum(num1);

const squareNumReturn = (num) => {
  if (!isNum(num)) {
    return "Переменная не число";
  }
  return num ** 2;
};
let result = squareNumReturn(num2);
console.log(result);

// 4
const askAge = () => {
  let year = prompt("Сколько вам лет?");

  if (!isNum(year)) {
    alert("Возраст должен быть числом!");
    return;
  }
  year = Number(year);

  if (0 <= year && year <= 12) {
    alert("Привет, друг!");
    return;
  } else if (year >= 13) {
    alert("Добро пожаловать!");
    return;
  } else {
    alert("Неправильный возраст!");
  }
};
askAge();

// 5
let num5 = 24;
let num6 = 3;
function checkVariables(num1, num2) {
  if (!isNum(num1) || !isNum(num2)) {
    return "Переменная(ые) не число";
  } else {
    return num1 * num2;
  }
}
result = checkVariables(num5, num6);
console.log(result);

// 6
function cubeNumber() {
  let number = prompt("Введите число");

  if (!isNum(number)) {
    alert("Переменная не число");
    return;
  }
  number = Number(number);
  alert(`${number} в кубе равняется ` + number ** 3);
}
cubeNumber();

// 7
class Circle {
  radius = 0;

  getArea() {
    return (Math.PI * this.radius ** 2).toFixed(2);
  }

  getPerimeter() {
    return (Math.PI * this.radius * 2).toFixed(2);
  }
}

const circle1 = new Circle();
circle1.radius = 12;
const circle2 = new Circle();
circle2.radius = 32;

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
