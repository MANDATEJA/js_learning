// Export styles:
// 1. Named export
// 2. Default export - we can only have atmost one default export

const add = (a, b) => a + b
const name = 'Teja Reddy'

const square = (x) => x * x
console.log('from my code')

export { add, name, square as default }