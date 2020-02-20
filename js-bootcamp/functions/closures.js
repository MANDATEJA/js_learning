const myFunction = () => {
    const message = 'This is my message'
    const printMessage = () => {
        console.log(message)
    }
    return printMessage
}

const myPrintMessage = myFunction()
myPrintMessage() // This function will still have acess to 'message' variable even though it is called outside the variable's scope.

const createTipper = (tip) => {
    return (amount) => {
        return tip * amount
    }
}

const calculateTip15 = createTipper(.15)
console.log(calculateTip15(100))
console.log(calculateTip15(200))