// Проверка на число
function isVariableNumber(variable) {
    if (parseInt(variable) === Number(variable) && !isNaN(variable) && typeof variable != "undefined") {
      return true;
    }
    return false;
  }
  

// 1
let array = [1, 5, 4, 10, 0, 3];
for (let item of array) {
  console.log(item);
  if (item === 10) break;
}

// 2
let array2 = [1, 5, 4, 10, 0, 3];
console.log(array2.indexOf(4));

// 3
array3 = [1, 3, 5, 10, 20];
console.log(array3.join(" "));

// 4
let array4 = [];
for (let i = 0; i < 3; i++) {
  let nestArray = [];
  for (let i = 0; i < 3; i++) {
    nestArray.push(1);
  }
  array4.push(nestArray);
}
console.log(array4);

// 5
let array5 = [1, 1, 1];
array5.push(2, 2, 2);
console.log(array5);

// 6
let array6 = [9, 8, 7, "a", 6, 5];
array6 = array6.filter((item) => typeof item === "number");
array6.sort();
console.log(array6);

// 7
array7 = [9, 8, 7, 6, 5, 0];
let answer = prompt("Угадай число", "");
answer = isVariableNumber(answer) ? Number(answer) : undefined;
let result = array7.indexOf(answer) >= 0 ? "Ты угадал!" : "В следующий раз повезёт!";
alert(result);

// 8
let string = "abcdef";
console.log(string.split("").reverse().join(""));

// 9
let array9 = [
  [1, 2, 3],
  [4, 5, 6],
];
let result9 = array9.flat();
console.log(result9);

// 10
let array10 = [2, 5, 1, 4, 8, 9, 11, 5];
for (let i = 0; i < array10.length - 1; i++) {
  console.log(array10[i] + array10[i + 1]);
}

// 11
let array11 = [2, 5, 1, 4, 8, 9, 11, 5];
function powElements(array) {
  return array.map((item) => item ** 2);
}
console.log(powElements(array11));

// 12
let array12 = ["слово", "", "слог", "длинное предложение", "буква"];
function getLengthWords(array) {
  return array.map((item) => item.length);
}
console.log(getLengthWords(array12));

// 13
function filterPositive(array) {
  return array.filter((item) => item < 0);
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));

// 14
let array14 = [];
for (let i = 0; i < 10; i++) {
  array14.push(Math.round(Math.random() * 10));
}
let filteredArray = array14.filter((item) => item % 2 == 0);
console.log(array14, filteredArray);

// 15
let array15 = [];
for (let i = 0; i < 6; i++) {
  array15.push(Math.round(Math.random() * 10));
}
let result15 = array15.reduce((accumulator, current) => accumulator + current) / array.length;
console.log(array, parseFloat(result15).toFixed(2));

