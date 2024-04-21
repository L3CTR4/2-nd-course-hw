// 1
let people = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(
  people.sort((first, second) => {
    return first.age - second.age;
  })
);

// 2
function isPositive(element) {
  if (!isNaN(+element) && element > 0) return true;
  else return false;
}
function isMale(element) {
  return element.gender === "male";
}
function filter(array, filterRule) {
  let result = [];
  const length = array.length;
  for(let i = 0; i < length; i++){
    if(filterRule(array[i])){
      result.push(array[i]);
    }
  }
  return result;
}

let array = [3, -4, 1, 9];
console.log(filter(array, isPositive));

people = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];
console.log(filter(people, isMale));

// 3
function showTime() {
  const repeat = setInterval(() => {
    console.log(new Date());
  }, 3 * 1000);

  setTimeout(() => {
    clearInterval(repeat);
  }, 3 * 10 * 1000);
}
showTime();

// 4
function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(() => {
  console.log("Привет, Глеб!");
});

// 5
// Функция delayForSecond через 1 секунду пишет в консоль
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecondWithInfo(cb) {
  setTimeout(() => {
    console.log("Прошла одна секунда");
    if (cb) {
      cb();
    }
  }, 1000);
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecondWithInfo(() => {
  sayHi("Глеб");
});
