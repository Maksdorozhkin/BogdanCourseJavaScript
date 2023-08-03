// ! Пример функции сложения двух переменных
// let a = 10;
// let b = 22;
// function sum(a, b) {
//   // название фунуции sum(a, b)
//   const c = a + b; // в теле функции объявляем переменную с которая равна а+в
//   console.log(c); // выводим результат
// }
// sum(a, b); // вызов нашей функции

// a = 350;
// b = 500;

// sum(a, b);

function myFN(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}
let d = myFN(10, 3);
console.log(d);

//! функция мутирует внешний объект
const personOne ={ // создаем переменную с такими значениями 
  name: 'Maks', 
  age: 42
}
function increasePersonAge(person) { 
  person.age += 1
  person.name = 'Maks Dorozhkin'
  return person
}
increasePersonAge(personOne)
console.log(personOne.age);
console.log(personOne.name);


