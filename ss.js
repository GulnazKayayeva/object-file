let user = {
    name: 'Daler',
    surname: 'Muinjonov',
    age: 15,
    isMarried: true,
    hairColor: 'rijiy'
}


let money = {
    auto: 30000,
    food: 50000,
    friends: 100000,
    expenses: [{
        house: 1000000
    }],
    hairColor: 'red'
}


// Соеденить два объекта в один 
// Достать все его значения 
// Отфильровать массив по типам данных в соответсвующие переменные
// и найти элемент которго больше всего в массиве

//1

let newObj = Object.assign(user, money)

//2

let entries = Object.entries(user)

console.log(entries);

//3

let val = Object.values(user)

console.log(val);



let num = val.filter(item => typeof(item) === 'number')

console.log(num);

let strings = val.filter(item => typeof(item) === 'string')

console.log(strings);

let bool = val.filter(item => typeof(item) === 'boolean')

console.log(bool);

let obj = val.filter(item => typeof(item) === 'object')

console.log(obj);

//4

console.log('элемент,которого больше - '+Math.max(num.length, obj.length, strings.length, bool.length)+ ' '+typeof(Math.max(num.length, obj.length, strings.length, bool.length)));