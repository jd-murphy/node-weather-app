const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/4660e788cf46ac6cbaeacad58f6fbd25/' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            const message = (`${ body.daily.data[0].summary } ` + 
                `It is currently ${ body.currently.temperature } degrees out. ` + 
                `There is a ${ body.currently.precipProbability }% chance of rain.`)

            callback(undefined, message)
        }
    })
}

module.exports = forecast