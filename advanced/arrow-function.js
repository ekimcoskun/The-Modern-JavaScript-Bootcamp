const square = (num) => num * num
console.log(square(5))

const people = [{
    name: 'Ekim',
    age: 24
},{
    name:'Hüseyin',
    age: 40
},{
    name:'Zuhal',
    age: 35
}]

const under30 = (people.filter((person) => person.age < 30))
console.log(under30)

const find35 = (people.find((person) => person.age === 35))
console.log(find35)