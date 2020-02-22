const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject('An error has occured!')
        }
    })
    
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
})

const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const countryInfo = data.find((country) => country.alpha2Code === countryCode)

            resolve(countryInfo.name)
        } else if (e.target.readyState === 4) {
            reject('An error has occured!')
        }
    })

    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.send()
})