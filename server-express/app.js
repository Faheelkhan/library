// 'use strict'
// const ServiceManager = require('./service_manager/requiredModules');
// const port = process.env.PORT || 3000;

// /** DATABASE CONNECTION */
// ServiceManager.mongoose.connection.openUri('mongodb://administer:administer1@ds113442.mlab.com:13442/plantation');
// ServiceManager.mongoose.connection.on('connected', () => {
//     console.log('Connected Database ' + ServiceManager.config.database);
// })

// ServiceManager.mongoose.connection.on('error', (err) => {
//         console.log('Error to databse --> ' + err)
//     })
//     /** DATABASE CONNECTION END */

// ServiceManager.app.use(ServiceManager.cors());
// ServiceManager.app.use(ServiceManager.bodyParser.json());

// ServiceManager.app.on('error', err => {
//     log.error('server error', err)
// });

// ServiceManager.app.listen(port, () => {
//     console.log('Server Started on port ' + port)
// })

// // LOAD APIS
// // require('./routes')(ServiceManager.app);

var express = require('express');
var jwt = require('jsonwebtoken');
const app = express();

app.get('/api', (req, res) => {
    res.json({
        text: 'my api'
    })
});

app.get('/api/protectedRoute', (req, res) => {
    res.json({
        text: 'protected Route'
    });
});

app.post('/api/login', (req, res) => {
    // auth user
    const user = { 'id': 3 };
    const token = jwt.sign({ user }, 'my_secret_key');
    res.json({
        token: token
    });
});
app.listen(3000, function() {
    console.log('server on 3000');
})