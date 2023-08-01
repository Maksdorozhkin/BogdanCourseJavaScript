const myCity = {
    city: 'Dedowsk',
    info: {
        isPopular: false,
        country: 'Russian Federation'
    }
}
console.log(myCity.info.isPopular)
delete myCity.info['isPopular']
console.log(myCity)

