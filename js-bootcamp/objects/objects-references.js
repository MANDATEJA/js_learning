let myAccount = {
    name: 'Teja',
    expenses: 0,
    income: 0
}

// We can only modify object properties using reference.
// Assigning a new value to the reference object will not modify the original object and will break binding with original object
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
    account.income = account.income + income
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    let balence = account.income - account.expenses
    return `Account for ${account.name} has $${balence}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 55000)
// Passing object as reference
addExpense(myAccount, 2.50)
addExpense(myAccount, 144)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
addIncome(myAccount, 55000)
console.log(getAccountSummary(myAccount))