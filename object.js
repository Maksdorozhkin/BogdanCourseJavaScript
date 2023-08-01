const newObject = {
    a: 43,
    b: 'i won`t sex'
}

const lastObject = newObject
newObject.c = 'i wont big tits gerl'
console.log(newObject)
lastObject.a = 40
console.log(newObject)
lastObject.d = true
console.log(lastObject)

const myCity = {
    city: 'Dedowsk',
    popular: false,
    country: 'Russian Federation'
}
console.log(myCity.city) //получение свойств объектов
console.log(myCity.popular)

myCity.city = 'Moscow'
console.log(myCity.city) //получение свойств объектов
myCity.people = 30000 // добавление новых свойств 
console.log(myCity.people)

delete myCity.people
console.log(myCity)

const myWork = {
    company: 'UMT Indastry'
}
myWork['business'] = 'activity production'
console.log(myWork)

const countryPropertyName = 'country'
myCity[countryPropertyName] = 'USA'
console.log(myCity)


