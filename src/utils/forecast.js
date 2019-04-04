const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = ' https://api.darksky.net/forecast/8ed1d5372530ee028273be2ba6d31b50/' + latitude + ',' + longitude + '?units=si'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. The High today is ' + body.daily.data[0].temperatureHigh + ' and the Low today is ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast