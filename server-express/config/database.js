'use strict'
module.exports = {
    database: process.env.NODE == 'production' ? 'mongodb://administer:administer1@ds113442.mlab.com:13442/plantation' : 'mongodb://localhost:27017/plantation',
    secret: 'secret'
}