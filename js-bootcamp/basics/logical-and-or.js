let temp = 55

// Logical and operator

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Eh. Do whatever you want')
}

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Offer vegan food')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer some vegan food from menu')
} else {
    console.log('Choose what you want from the menu')
}