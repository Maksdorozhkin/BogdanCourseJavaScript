let a = 10
console.log(a)
a = true
console.log(a)
a = 'a,b,c,d'
console.log(a)

//функция
function w() {
    console.log('Hey there')
}
w()

//стрелочная функция
const f = () => {
    console.log('Hey There')
}
f()
f = 10 //нельзя присвоить новое значение постоянной переменной
f()
