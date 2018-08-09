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

app.get('/api', function(req, res) {
    res.json({
        text: 'my api'
    })
});

app.post('/api/login', function(req, res) {
    // auth user
    console.log(req.body);

    const user = { 'id': 3 };
    const token = jwt.sign({ user: user.id }, 'secret_key_goes_here');
    res.json({
        message: 'Authenticated! Use this token in the "Authorization" header',
        token: token
    });
});

app.get('/api/protected', ensureToken, function(req, res) {
    console.log(req.token);
    jwt.verify(req.token, 'secret_key_goes_here', function(err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                description: 'Protected information. Congrats!',
                data: data
            });
        }
    });
});

app.get('/api/getFaheel', ensureToken, function(req, res) {
    console.log(req.token);
    jwt.verify(req.token, 'secret_key_goes_here', function(err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                description: 'Protected information. Congrats!',
                data: data
            });
        }
    });
});

function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    console.log(bearerHeader);
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}
app.listen(3000, function() {
    console.log('server on 3000');
})