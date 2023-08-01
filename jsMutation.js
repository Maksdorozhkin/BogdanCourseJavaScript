// //! мутирование в JS
// const person = {
//     name: 'Maks',
//     age: 42
// }
// const person2 = person // скопировали значение переменной person

// person2.age = 43 // изменение значения age
// person2.isAdult = true // добавление нового свойства

// console.log(person2.age)
// console.log(person.age)
// console.log(person2)

//! Как избежать мутаций
// //!вариант 1 если нет вложенных объектов
// const person = {
//   name: "Maks",
//   age: 42,
// };
// const person2 = Object.assign({}, person); // копирует из person в переменную person2
// person2.age = 43;
// console.log(person2.age);
// console.log(person.age);

// //! вариант 2

// const person = {
//   name: "Maks",
//   age: 42,
// };
// const person2 = {...person}; // копирует из person в переменную person2
// person2.name = 'Maks Dorozhkin';
// console.log(person2.name);
// console.log(person.name);

//! вариант 3 создает копию объекта и полностью избегает мутаций

const person = {
  name: "Maks",
  age: 42,
};
const person2 = JSON.parse(JSON.stringify(person)); // копирует из person в переменную person2
person2.name = 'Maks Dorozhkin';
console.log(person2.name);
console.log(person.name);