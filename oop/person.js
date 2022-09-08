class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}`
        })

        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Students extends Person {
    constructor(firstName, lastName, age, likes, grade) {
        super(firstName, lastName, age, likes)
        if (grade >= 0 && grade <= 100) {
            this.grade = grade
        } else {
            console.log("Grade must be between 0 and 100")
        }

    }

    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'

        return `${this.firstName} is ${status} the exam. Grade: ${this.grade}`
    }

    updateGrade(value) {
        this.grade += value
    }
}

const me = new Employee('Ekim', 'Coskun', 24, 'Developer', 56)
me.fullName = 'Zuhal Coskun'
console.log(me.getBio())
