const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => data.puzzle)
}

const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all', {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch country details')
        }
    }).then((data) => data.find((country) => country.alpha2Code === countryCode))
}

const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=0943d4a3b134e6').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch location')
        }
    })
}