const getGrade = function(score, totalPossibleScore) {
    if (typeof score !== 'number' || typeof totalPossibleScore !== 'number') {
        throw new Error('Input must be a number')
    }

    const percent = (score/totalPossibleScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${percent}%)!`
}

try {
    const result = getGrade('blah',20)
    console.log(result)
} catch (e) {
    console.log(e.message)
}
