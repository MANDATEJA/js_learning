const account = {
    name: 'Teja',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description,
            amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description,
            amount
        })
    },
    getAccountSummary: function () {
        let sumExpense = 0
        let sumIncome = 0
        this.expenses.forEach(function (expense) {
            sumExpense = sumExpense + expense.amount
        })
        this.income.forEach(function (income) {
            sumIncome = sumIncome + income.amount
        })
        const balance = sumIncome - sumExpense

        return `${this.name} has a balance of $${balance}. $${sumIncome} in income. $${sumExpense} in expense`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 10000)
console.log(account.getAccountSummary())