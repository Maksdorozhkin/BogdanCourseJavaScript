// ! Пример функции сложения двух переменных
let a = 10;
let b = 22;
function sum(a, b) {
  // название фунуции sum(a, b)
  const c = a + b; // в теле функции объявляем переменную с которая равна а+в
  console.log(c); // выводим результат
}
sum(a, b); // вызов нашей функции

a = 350;
b = 500;

sum(a, b);

function myFN(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}
console.dir(myFN)
