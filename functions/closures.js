const createCounter = () => {
    let count = 0

    return {
        increment() {
            count ++
        },
        decrement() {
            count --
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.decrement()
counter.decrement()
counter.decrement()
console.log(counter.get())

//Adder
const add = (a, b) => a + b
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-60))

const createTipper = (percentage) => {
    return (amount) => {
        return amount * percentage
    }
}

const order1 = createTipper(.15)
const order2 = createTipper(.20)
console.log(order1(10))
console.log(order2(30))