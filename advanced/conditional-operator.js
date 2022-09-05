const myAge = 20

const showPage = () => {
    console.log('Showing the Page.')
}
const showErrorPage = () => {
    console.log('Showing the Error Page.')
}

myAge >= 21 ? showPage() : showErrorPage()

const team = ['Ekim','Huseyin','Ali','Mehmet','Fatma']

team.length <= 4 ? console.log(`Team Size = ${team.length}`) : console.log('Too many people in your team')